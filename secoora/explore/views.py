# Create your views here.
from django.shortcuts import get_object_or_404, render_to_response
from django.http import HttpResponse
from django.template import RequestContext
from django.db.models import Q
from data_manager.models import *
from utils import get_domain
import settings
from django.utils import simplejson
import logging

logger = logging.getLogger(__name__)

def explore_page(request, template='explore_page.html'):
    context = {'domain': get_domain(8000), 'domain8010': get_domain()}
    return render_to_response(template, RequestContext(request, context)) 

def data_catalog(request, template='catalog.html'):
    themes = Theme.objects.all().order_by('display_name')
    themes_with_links = add_learn_links(themes)
    add_ordered_layers_lists(themes_with_links)
    context = {'themes': themes_with_links, 'domain': get_domain(8000), 'domain8010': get_domain()}
    return render_to_response(template, RequestContext(request, context)) 

def data_catalog_bs3(request, template='bs3_catalog.html'):
    themes = Theme.objects.all().order_by('display_name')
    themes_with_links = add_learn_links(themes)
    add_ordered_layers_lists(themes_with_links)
    context = {'themes': themes_with_links, 'domain': get_domain(8000), 'domain8010': get_domain()}
    return render_to_response(template, RequestContext(request, context))

def data_needs(request, template='needs.html'):
    themes = Theme.objects.all().order_by('display_name')
    ordered_themes, theme_dict = add_ordered_needs_lists(themes)
    context = {'themes': themes, 'theme_dict': theme_dict, 'ordered_themes': ordered_themes, 'domain': get_domain(8000), 'domain8010': get_domain()}
    return render_to_response(template, RequestContext(request, context)) 
    
def add_ordered_needs_lists(themes_list):
    theme_dict = {}
    ordered_themes = []
    for theme in themes_list:
        needs = theme.dataneed_set.all().exclude(archived=True).order_by('name')
        if len(needs) > 0:
            ordered_themes.append(theme)
            theme_dict[theme] = needs
    return ordered_themes, theme_dict
    
def add_ordered_layers_lists(themes_list): 
    for theme_dict in themes_list:
        layers = theme_dict['theme'].layer_set.all().exclude(layer_type='placeholder').select_related('provider').select_related('metadatatable').order_by('name')
        theme_dict['layers'] = layers

def add_learn_links(themes):
    theme_dict = []
    for theme in themes:
      if logger:
        logger.debug("Theme: %s" % (theme.name))

      #Don't include the parent container layer in count. It's not a viewable layer, just a
      #container.
      num_layers = len([layer.name for layer in theme.layer_set.all() if not layer.is_parent])
      theme_dict.append({'theme': theme, 'num_layers': num_layers, 'learn_link': theme.learn_link})
    return theme_dict
"""
def tiles_page(request, slug=None, template='tiles_page.html'):
    layer = get_object_or_404(Layer, slug_name=slug)
    orig_url = layer.url
    arctile_url = orig_url.replace('{z}', '{level}').replace('{x}', '{col}').replace('{y}', '{row}')
    arcrest_url = orig_url.replace('/export', '')
    context = {'layer': layer, 'arctile_url': arctile_url, 'arcrest_url': arcrest_url, 'domain': get_domain(8000)}
    return render_to_response(template, RequestContext(request, context)) 

def map_tile_example(request, slug=None, template='map_tile_example.html'):
    layer = get_object_or_404(Layer, slug_name=slug)
    context = {'layer': layer}
    return render_to_response(template, RequestContext(request, context)) 

def map_tile_esri_example(request, slug=None, template='map_tile_esri_example.html'):
    layer = get_object_or_404(Layer, slug_name=slug)
    orig_url = layer.url
    arctile_url = orig_url.replace('{z}', '{level}').replace('{x}', '{col}').replace('{y}', '{row}')
    context = {'layer': layer, 'arctile_url': arctile_url}
    return render_to_response(template, RequestContext(request, context)) 

def map_tile_leaflet_example(request, slug=None, template='map_tile_leaflet_example.html'):
    layer = get_object_or_404(Layer, slug_name=slug)
    orig_url = layer.url
    leaflet_url = orig_url.replace('$', '')
    context = {'layer': layer, 'leaflet_url': leaflet_url}
    return render_to_response(template, RequestContext(request, context)) 

def arcrest_example(request, slug=None, template='arcrest_example.html'):
    layer = get_object_or_404(Layer, slug_name=slug)
    context = {'layer': layer}
    return render_to_response(template, RequestContext(request, context)) 
"""
def linkify(text):
    return text.lower().replace(' ', '-')
    
def catalog_search(request, catalog_q, template='catalog_search_results.html'):
  search_term = catalog_q
  if(len(search_term) == 0):
    search_term = request.GET['catalog_q']
  if logger:
    logger.info("View search param: %s" % (catalog_q))
    logger.info("Begin catalog_search: %s" % (search_term))

  layer_results = Layer.objects.filter(metadatatable__anytext__icontains=search_term).order_by('name')

  if logger:
    logger.debug("Found: %d records similar to: %s" % (len(layer_results), search_term))
    #for result in layer_results:
    #  logger.info("Layer: %s" % (result.name))

  context = {'result_count' : len(layer_results), 'catalog_q': search_term, 'layers': layer_results, 'domain': get_domain(8000), 'domain8010': get_domain()}

  if logger:
    logger.info("Rendering response.")
  return render_to_response(template, RequestContext(request, context))


def data_partners(request, template='data_partners.html'):
  logger.info("Start data_partners")
  data_partners = Provider.objects.all().filter(~Q(source_name='SECOORA')).filter(secoora_funded=True).order_by('source_name')
  logger.info("End data_partners")

  context = {'providers': data_partners, 'num_providers': len(data_partners), 'domain': get_domain(8000), 'domain8010': get_domain()}
  return render_to_response(template, RequestContext(request, context))


def csw_listing(request, template='pycsw_catalog_view.html'):
  if logger:
    logger.info("Start csw_listing")
  csw_recs = pycsw_records.objects.using('pycsw_test').all().order_by('organization')
  html_id = 0
  for rec in csw_recs;
    rec.unique_id = html_id
    html_id += 1
  context = {'records': csw_recs, 'domain': get_domain(8000), 'domain8010': get_domain()}
  if logger:
    logger.info("End csw_listing")
  return render_to_response(template, RequestContext(request, context))



def csw_test(request):
  if logger:
    logger.info("Start csw_test")
  json_recs = []
  try:
    csw_recs = pycsw_records.objects.using('pycsw_test').all()
    for rec in csw_recs:
      json_recs.append({
        'title': rec.title,
        'links': rec.links,
        'organization': rec.organization
      })
  except Exception, e:
    if logger:
      logger.exception(e)
  json = {
    'records': json_recs
  }
  return HttpResponse(simplejson.dumps(json))
