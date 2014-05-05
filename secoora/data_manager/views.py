# Create your views here.
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render_to_response
from django.template import RequestContext
from django.utils import simplejson
from django.views.decorators.cache import cache_page
from models import *
from datetime import datetime,timedelta
import logging

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
  logger.info("Begin get_closest_time, from: %s" % (request.get_host()))

  layer_name = request.GET['layer_name']
  time_offset = request.GET['time_offset']
  logger.debug("Layer: %s Time Offset: %s" % (layer_name, time_offset))
  time_offset_obj = datetime.strptime(str(time_offset), "%Y-%m-%d %H:%M:%S")
  results = {datetime : None}
  def date_compare_func(x):
    logger.debug("Time: %s" % (x))
    d =  datetime.strptime(x, "%Y-%m-%dT%H:%M:%SZ")
    delta =  d - time_offset_obj if d > time_offset_obj else timedelta.max
    return delta

  for layer in Layer.objects.all().order_by('name'):
    if layer.metadatatable is not None and layer.metadatatable.time_steps is not None:
      times = layer.metadatatable.time_steps.split(',')
      results['datetime'] = min(times, key = date_compare_func)
      logger.debug("Closest Time: %s" % (results['datetime']))

  logger.info("End get_closest_time, from: %s" % (request.get_host()))



  return simplejson.dumps(results)
