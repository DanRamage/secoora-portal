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
from bisect import bisect_left
from date_time_utils import get_utc_epoch
from settings_local import *
from xeniaSQLAlchemy import xeniaAlchemy, platform, sensor, m_type
from geoalchemy import *

logger = logging.getLogger(__name__)

@cache_page(60 * 60 * 24, key_prefix="data_manager_get_json")
def get_json(request):
    json = {
        "state": { "activeLayers": [] },
        "layers": [layer.toDict for layer in Layer.objects.filter(is_sublayer=False).exclude(layer_type='placeholder').order_by('name')],
        "themes": [theme.toDict for theme in Theme.objects.all().order_by('display_name')],
        "topics": [topic.toDict for topic in Topic.objects.all().order_by('display_name')],          
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



def get_water_temp_stations(request):
  results = {
    'type': 'FeatureCollection',
    'features': []
  }
  if logger:
    logger.debug("Starting get_water_temp_stations.")

  obs_name = "water_temperature"
  uom_name = "celcius"
  xeniaDb = xeniaAlchemy(logger=logger)

  if xeniaDb.connectDB(databaseType='postgres',
                        dbUser=XENIA_USER,
                        dbPwd=XENIA_PWD,
                        dbHost=XENIA_HOST,
                        dbName=XENIA_DB):
    if logger:
      logger.debug("Connected to xenia DB")
  try:
    m_type_id = xeniaDb.mTypeExists(obs_name, uom_name)
    if id is not None:
      bbox = "POLYGON((%s))" % (SECOORA_BBOX)
      platform_list = xeniaDb.session.query(platform.row_id, platform.platform_handle)\
        .join((sensor, sensor.m_type_id == m_type_id))\
        .filter(sensor.m_type_id == m_type_id)\
        .filter(platform.active > 0)\
        .filter(platform.active < 3)\
        .filter(func.ST_Contains(WKTElement(bbox, srid=4326), Point(platform.the_geom)))\
        .order_by(platform.short_name)
    platforms = []
    for platform in platform_list:
      platforms.append(platform.platform_handle)
    if logger:
      logger.debug(platforms)
  except Exception,e:
    if logger:
      logger.exception(e)

  if logger:
    logger.debug("Finsihed get_water_temp_stations.")
  return HttpResponse(simplejson.dumps(results))