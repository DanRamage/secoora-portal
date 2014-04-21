# Create your views here.
from django.shortcuts import get_object_or_404, render_to_response
from django.template import RequestContext
from data_manager.models import *
from utils import get_domain
import settings
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
        layers = theme_dict['theme'].layer_set.all().exclude(layer_type='placeholder').order_by('name')
        theme_dict['layers'] = layers
    
def add_learn_links(themes):
    theme_dict = []
    for theme in themes:
        num_layers = len([layer.name for layer in theme.layer_set.all() if not layer.is_parent])
        theme_dict.append({'theme': theme, 'num_layers': num_layers, 'learn_link': theme.learn_link})
    return theme_dict
    
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

def linkify(text):
    return text.lower().replace(' ', '-')
    
def catalog_search(request, catalog_q, template='catalog_search_results.html'):
  if logger:
    logger.info("Begin catalog_search: %s" % (catalog_q))

    themes = Theme.objects.all().order_by('display_name')

  search_results = Layer.objects.filter(metadatatable.keywords_obs__icontains=catalog_q)

  if logger:
    logger.debug("Found: %d records similar to: %s" % (len(search_results), catalog_q))

  #context = {'search_key': search_key, 'domain': get_domain(8000), 'domain8010': get_domain()}

  #return render_to_response(template, RequestContext(request, context))
