# Create your views here.
import sys
sys.path.append('/usr/local/userapps/secoora-portal/xeniatools')

from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render_to_response
from django.template import RequestContext
from django.utils import simplejson
from django.views.decorators.cache import cache_page
from models import *
from datetime import datetime,timedelta
import logging
import requests
from collections import OrderedDict
from bisect import bisect_left
from date_time_utils import get_utc_epoch
from settings_local import *

#Imports for xenia db connection.
from sqlalchemy import func
from xeniaSQLAlchemy import xeniaAlchemy, platform as xenia_platform, sensor as xenia_sensor, m_type as xenia_m_type, organization as xenia_organization
from geoalchemy2 import Geometry
from geoalchemy2.elements import WKTElement,WKBElement

logger = logging.getLogger(__name__)

@cache_page(60 * 60 * 24, key_prefix="data_manager_get_json")
def get_json(request):
    json = {
        "state": { "activeLayers": [] },
        "layers": [layer.toDict for layer in Layer.objects.filter(is_sublayer=False).exclude(layer_type='placeholder').order_by('name')],
        "themes": [theme.toDict for theme in Theme.objects.all().order_by('display_name')],
        #"topics": [topic.toDict for topic in Topic.objects.all().order_by('display_name')],
        "success": True
    }
    return HttpResponse(simplejson.dumps(json))

def get_time_increments(request, layer_id):
  epoch_times = []
  if logger:
    logger.info("Begin get_time_increments")
    logger.debug("Layer requested: %s" % layer_id)
  try:
    layer_data = Layer.objects.get(id=layer_id)
    times = layer_data.metadatatable.time_steps.split(",")
    epoch_times = [get_utc_epoch(datetime.strptime(time, '%Y-%m-%dT%H:%M:%SZ')) for time in times]
  except Exception, e:
    if logger:
      logger.exception(e)
  json = {
    'time_steps': epoch_times
  }
  if logger:
    logger.info("End get_time_increments, %d times found" % (len(epoch_times)))
  return HttpResponse(simplejson.dumps(json))

def create_layer(request):
    if request.POST:
        try:
            url, name, type, themes = get_layer_components(request.POST)
            layer = Layer(
                url = url,
                name = name,
                layer_type = type
            )
            layer.save()
            
            for theme_id in themes:
                theme = Theme.objects.get(id=theme_id)
                layer.themes.add(theme)
            layer.save()
            
        except Exception, e:
            return HttpResponse(e.message, status=500)

        result = layer_result(layer, message="Saved Successfully")            
        return HttpResponse(simplejson.dumps(result))

    
def update_layer(request, layer_id):
    if request.POST:
        layer = get_object_or_404(Layer, id=layer_id)
        
        try:
            url, name, type, themes = get_layer_components(request.POST)
            layer.url = url
            layer.name = name        
            layer.save()
            
            for theme in layer.themes.all():
                layer.themes.remove(theme)
            for theme_id in themes:
                theme = Theme.objects.get(id=theme_id)
                layer.themes.add(theme)            
            layer.save()  
            
        except Exception, e:
            return HttpResponse(e.message, status=500)

        result = layer_result(layer, message="Edited Successfully")
        return HttpResponse(simplejson.dumps(result))
    
    
def get_layer_components(request_dict, url='', name='', type='XYZ', themes=[]):
    if 'url' in request_dict:
        url = request_dict['url']
    if 'name' in request_dict:
        name = request_dict['name']
    if 'type' in request_dict:
        type = request_dict['type']
    if 'themes' in request_dict:
        themes = request_dict.getlist('themes') 
    return url, name, type, themes
    
    
def layer_result(layer, status_code=1, success=True, message="Success"):
    result = {
        "status_code":status_code,  
        "success":success, 
        "message":message,
        "layer": layer.toDict,
        "themes": [theme.id for theme in layer.themes.all()]
    }
    return result


def get_closest_time(request):
  logger.info("Begin get_closest_time")
  results = {'datetime' : None}
  logger.debug("GET Params: %s" % (request.GET.items()))

  if 'layer_name' in request.GET:
    layer_name = request.GET['layer_name']
    try:
      if 'time_offset' in request.GET:
        time_offset_obj = datetime.strptime(request.GET['time_offset'], "%Y-%m-%d %H:%M:%S")
      elif 'time_offset_hours' in request.GET:
        time_offset_obj = datetime.now() - timedelta(hours=float(request.GET['time_offset_hours']))
      else:
        time_offset_obj = datetime.now()

      logger.debug("Finding closest time to: %s" % (time_offset_obj.strftime("%Y-%m-%d %H:%M:%S")))
      for layer in Layer.objects.all().filter(name=layer_name):
        logger.debug("Found layer: %s" % (layer.name))
        if layer.metadatatable is not None and layer.metadatatable.time_steps is not None:
          times = [datetime.strptime(timeStamp, "%Y-%m-%dT%H:%M:%SZ") for timeStamp in layer.metadatatable.time_steps.split(',')]
          #Find the spot in the list where'd we would insert the time. THis is our search starting point.
          index = bisect_left(times, time_offset_obj)
          closestTime = min(times[max(0, index-1) : index+2], key=lambda t: abs(time_offset_obj - t))
          results['datetime'] = closestTime.strftime("%Y-%m-%d %H:%M:%S")

          logger.debug("Closest Time: %s" % (results['datetime']))
          break
    except Exception,e:
      logger.exception(e)

  else:
    logger.info("No layer_name GET param.")

  logger.info("End get_closest_time")

def get_closest_time_for_ids(request):
  if logger:
    logger.info("Begin get_closest_time")
  results = {'layer_ids' : []}
  #logger.debug("GET Params: %s" % (request.GET.items()))
  if request.is_ajax():
    if request.method == 'POST':
      layer_ids = request.body
      if logger:
        logger.debug("Request json: %s" % (layer_ids))
      for layer_id in layer_ids:
        try:
          if 'time_offset' in request.GET:
            time_offset_obj = datetime.strptime(request.GET['time_offset'], "%Y-%m-%d %H:%M:%S")
          elif 'time_offset_hours' in request.GET:
            time_offset_obj = datetime.now() - timedelta(hours=float(request.GET['time_offset_hours']))
          else:
            time_offset_obj = datetime.now()

          logger.debug("Finding closest time to: %s" % (time_offset_obj.strftime("%Y-%m-%d %H:%M:%S")))
          for layer in Layer.objects.all().get(id=int(layer_id)):
            logger.debug("Found layer: %s" % (layer.name))
            if layer.metadatatable is not None and layer.metadatatable.time_steps is not None:
              times = [datetime.strptime(timeStamp, "%Y-%m-%dT%H:%M:%SZ") for timeStamp in layer.metadatatable.time_steps.split(',')]
              #Find the spot in the list where'd we would insert the time. THis is our search starting point.
              index = bisect_left(times, time_offset_obj)
              closestTime = min(times[max(0, index-1) : index+2], key=lambda t: abs(time_offset_obj - t))
              results['datetime'] = closestTime.strftime("%Y-%m-%d %H:%M:%S")

              logger.debug("Layer ID: %d Closest Time: %s" % (int(layer_id), results['datetime']))
              break
        except Exception,e:
          logger.exception(e)

  else:
    logger.info("No layer_ids GET param.")

  logger.info("End get_closest_time")


  return HttpResponse(simplejson.dumps(results))

def obs_data_request(request, observation_name):
  results = {
    'type': 'FeatureCollection',
    'features': []
  }

  if logger:
    logger.debug("Starting get_obs_data, obs name: %s" % (observation_name))


  if observation_name == "water_temperature":
    uom_name = 'celsius'

  elif observation_name == "air_temperature":
    uom_name = 'celsius'

  elif observation_name == "air_pressure":
    uom_name = 'mb'

  elif observation_name == "salinity":
    uom_name = 'psu'

  elif observation_name == "water_level":
    uom_name = 'm'

  elif observation_name == "relative_humidty":
    uom_name = 'percent'

  elif observation_name == "wind_speed":
    uom_name = 'm_s-1'

  elif observation_name == "turbidity":
    uom_name = 'ntu'

  elif observation_name == "ph":
    uom_name = 'units'

  elif observation_name == "chl_concentration":
    uom_name = 'ug_L-1'

  results = get_obs_data(observation_name, uom_name)

  if logger:
    logger.debug("Finished get_obs_data, obs name: %s" % (observation_name))

  return HttpResponse(simplejson.dumps(results))

def get_obs_data(obs_name, uom_name):

  results = {
    'type': 'FeatureCollection',
    'features': []
  }
  if logger:
    logger.debug("Starting get_obs_data for obs: %s." % (obs_name))

  xeniaDb = xeniaAlchemy(logger=logger)

  if xeniaDb.connectDB(databaseType='postgres',
                        dbUser=XENIA_USER,
                        dbPwd=XENIA_PWD,
                        dbHost=XENIA_HOST,
                        dbName=XENIA_DB,
                        printSQL=True):
    if logger:
      logger.debug("Connected to xenia DB")
    try:
      m_type_id = xeniaDb.mTypeExists(obs_name, uom_name)
      if id is not None:
        bbox = "POLYGON((%s))" % (SECOORA_BBOX)
        platform_list = xeniaDb.session.query(xenia_platform)\
          .join((xenia_sensor, xenia_sensor.platform_id == xenia_platform.row_id))\
          .join((xenia_organization, xenia_organization.row_id == xenia_platform.organization_id))\
          .filter(xenia_sensor.m_type_id == m_type_id)\
          .filter(xenia_platform.active.in_((1,2)))\
          .filter(func.ST_Contains(WKTElement(bbox, srid=4326), WKBElement(xenia_platform.the_geom, srid=4326)))\
          .order_by(xenia_platform.short_name)
    except Exception,e:
      if logger:
        logger.exception(e)
    else:
      platforms = []
      is_vector_data = False
      if obs_name == 'wind_speed' or obs_name == 'current_speed':
        is_vector_data = True

      for platform in platform_list:
        try:
          file_name = platform.platform_handle.replace('.', ':').lower()

          #json_url = "%s/%s_data.json" % (OBSJSON_URL, file_name)

          json_file_dir = "%s/%s_data.json" % (OBSJSON_DIR, file_name)
          if logger:
            logger.debug("Opening obs json file: %s" % (file_name))
          json_file = open(json_file_dir, "r")
        except IOError,e:
          if logger:
            logger.exception(e)
        else:
          try:
          #res = requests.get(json_url)
          #if res.status_code == 200:
            #obs_json = res.json
            obs_json = simplejson.load(json_file)
            properties = OrderedDict()
            properties['p_handle'] = platform.platform_handle
            properties['p_name'] = platform.short_name
            properties['p_description'] = platform.description
            properties['o_name'] = platform.organization.short_name

            properties['obs'] = OrderedDict()
            obs_dict = properties['obs']

            #FInd the observation of interest first.
            for feature in obs_json['properties']['features']:
              prop = feature['properties']
              if obs_name == prop['obsType']:
                prop = feature['properties']
                if prop['obsType'] is not None:
                  obs_dict[prop['obsType']] = {'value': prop['value'][-1],
                                      'uom': prop['uomType'],
                                      'time': prop['time'][-1]}

                else:
                  if 'other_obs' not in properties:
                    properties['other_obs'] = []
                  properties['other_obs'].append(prop['obsType'])

            if is_vector_data:
              for feature in obs_json['properties']['features']:
                prop = feature['properties']
                if(prop['obsType'] == 'wind_from_direction' or prop['obsType'] == 'current_from_direction'):
                  obs_dict[prop['obsType']] = {'value': prop['value'][-1],
                                      'uom': prop['uomType'],
                                      'time': prop['time'][-1]}




                """
                properties['obs_name'] = obs_name
                properties['obs_value'] = prop['value'][-1]
                properties['obs_uom'] = prop['uomType']
                properties['obs_time'] = prop['time'][-1]
              else:
                if get_wind_dir and prop['obsType'] == 'wind_from_direction':
                  properties['dir_name'] = prop['obsType']
                  properties['dir_value'] = prop['value'][-1]
                  properties['dir_uom'] = prop['uomType']
                  properties['dir_time'] = prop['time'][-1]
                if 'other_obs' not in properties:
                  properties['other_obs'] = []
                properties['other_obs'].append(prop['obsType'])
              """
              """
              if prop['obsType'] is not None:
                properties['%s_val' % (prop['obsType'])] = prop['value'][-1]
                properties['%s_uom' % (prop['obsType'])] = prop['uomType']
                properties['%s_time' % (prop['obsType'])] = prop['time'][-1]
              """
            feature = {
              "geometry": {
                "coordinates": [platform.fixed_longitude, platform.fixed_latitude],
                "type": "Point"
              },
              "properties": properties
            }
            if len(obs_dict):
              results['features'].append(feature)

            json_file.close()
          #else:
          #  if logger:
          #    logger.debug("Error opening obs json file: %s Code: %d" % (json_url, res.status_code))

          except Exception,e:
            if logger:
              logger.exception(e)


    xeniaDb.disconnect()

  if logger:
    logger.debug("Finished get_obs_data for obs: %s." % (obs_name))
  return results

def platform_time_series_request(request, platform_name):
  results = {
    'type': 'Feature',
    'features': {}
  }

  if logger:
    logger.debug("Starting obs_time_series_request, platform: %s" % (platform_name))

  xeniaDb = xeniaAlchemy(logger=logger)

  if xeniaDb.connectDB(databaseType='postgres',
                        dbUser=XENIA_USER,
                        dbPwd=XENIA_PWD,
                        dbHost=XENIA_HOST,
                        dbName=XENIA_DB,
                        printSQL=True):
    if logger:
      logger.debug("Connected to xenia DB")
    try:
      #m_type_id = xeniaDb.mTypeExists(observation_name, uom_name)
      platform_data = xeniaDb.session.query(xenia_platform)\
        .join((xenia_organization, xenia_organization.row_id == xenia_platform.organization_id))\
        .filter(xenia_platform.short_name.ilike(platform_name))\
        .filter(xenia_platform.active.in_((1,2))).one()


      properties = OrderedDict()
      properties['p_handle'] = platform_data.platform_handle
      properties['p_name'] = platform_data.short_name
      properties['p_description'] = platform_data.description
      properties['o_name'] = platform_data.organization.short_name

    except Exception, e:
      if logger:
        logger.exception(e)
    try:
      #json_url = "%s/%s_data.json" % (OBSJSON_URL, platform_data.platform_handle.replace('.', ':').lower())
      file_name = platform_data.platform_handle.replace('.', ':').lower()
      json_file_dir = "%s/%s_data.json" % (OBSJSON_DIR, file_name)

      if logger:
        logger.debug("Opening obs json file: %s" % (file_name))
      json_file = open(json_file_dir, "r")

    except IOError,e:
      if logger:
        logger.exception(e)
    else:
      try:
        #res = requests.get(json_url)
        #if res.status_code == 200:
        #obs_json = res.json
        obs_json = simplejson.load(json_file)
        properties['observations'] = obs_json['properties']['features']

        feature = {
          "geometry": {
            "coordinates": [platform_data.fixed_longitude, platform_data.fixed_latitude],
            "type": "Point"
          },
          "properties": properties
        }
        results['features'] = feature

        json_file.close()
      except Exception,e:
        if logger:
          logger.exception(e)

  xeniaDb.disconnect()

  if logger:
    logger.debug("Finished obs_time_series_request, platform: %s" % (platform_name))

  return HttpResponse(simplejson.dumps(results))

def get_platforms_by_org(request, organization):
  results = {
    'type': 'FeatureCollection',
    'features': []
  }
  if logger:
    logger.debug("Starting get_platforms_by_org for org: %s." % (organization))

  xeniaDb = xeniaAlchemy(logger=logger)

  if xeniaDb.connectDB(databaseType='postgres',
                        dbUser=XENIA_USER,
                        dbPwd=XENIA_PWD,
                        dbHost=XENIA_HOST,
                        dbName=XENIA_DB,
                        printSQL=True):
    if logger:
      logger.debug("Connected to xenia DB")
    org_id = xeniaDb.organizationExists(organization)
    if org_id is not None:
      try:
        bbox = "POLYGON((%s))" % (SECOORA_BBOX)
        platform_list = xeniaDb.session.query(xenia_platform)\
          .join((xenia_sensor, xenia_sensor.platform_id == xenia_platform.row_id))\
          .join((xenia_organization, xenia_organization.row_id == xenia_platform.organization_id))\
          .filter(xenia_platform.organization_id == org_id)\
          .filter(xenia_platform.active.in_((1,2)))\
          .filter(func.ST_Contains(WKTElement(bbox, srid=4326), WKBElement(xenia_platform.the_geom, srid=4326)))\
          .order_by(xenia_platform.short_name)
      except Exception,e:
        if logger:
          logger.exception(e)
      else:
        platforms = []
        if platform_list is not None:
          for platform in platform_list:
            try:
              file_name = platform.platform_handle.replace('.', ':').lower()

              json_file_dir = "%s/%s_data.json" % (OBSJSON_DIR, file_name)
              if logger:
                logger.debug("Opening obs json file: %s" % (file_name))
              json_file = open(json_file_dir, "r")
            except IOError,e:
              if logger:
                logger.exception(e)
            else:
              try:
                obs_json = simplejson.load(json_file)
                properties = OrderedDict()
                properties['p_handle'] = platform.platform_handle
                properties['p_name'] = platform.short_name
                properties['p_description'] = platform.description
                properties['o_name'] = platform.organization.short_name
                properties['obs'] = OrderedDict()
                obs_dict = properties['obs']
                for feature in obs_json['properties']['features']:
                  prop = feature['properties']

                  if prop['obsType'] is not None:
                    obs_dict[prop['obsType']] = {'value': prop['value'][-1],
                                        'uom': prop['uomType'],
                                        'time': prop['time'][-1]}

                feature = {
                  "geometry": {
                    "coordinates": [platform.fixed_longitude, platform.fixed_latitude],
                    "type": "Point"
                  },
                  "properties": properties
                }
                results['features'].append(feature)

                json_file.close()
              except Exception,e:
                if logger:
                  logger.exception(e)

  if logger:
    logger.debug("Finished get_platforms_by_org for org: %s." % (organization))

  return HttpResponse(simplejson.dumps(results))