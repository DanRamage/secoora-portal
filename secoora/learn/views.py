# Create your views here.
from django.shortcuts import get_object_or_404, render_to_response
from django.template import RequestContext
from django.utils import simplejson
from data_manager.models import *
from learn.models import *
from utils import get_domain
import settings


def topic_page(request, topic_name=None, template='topic_page.html'):
    topic = get_object_or_404(Topic, name = topic_name)
    views = MapView.objects.filter(topic=topic).order_by('ordering')
    viewsList = simplejson.dumps([view.name for view in views])
    layers = topic.layers.all().order_by('name')
    context = {'topic': topic, 'views': [views[0]], 'views_list': [viewsList[0]], 'initial_view': views[0].name, 'layers': layers, 'domain': get_domain(8000), 'domain8010': get_domain()}
    return render_to_response(template, RequestContext(request, context)) 

def learn_page(request, theme_name=None, template='learn_page.html'):
    topics = Topic.objects.filter(active=True).order_by('ordering')
    context = {'topics': topics, 'domain': get_domain(8000), 'domain8010': get_domain()}
    return render_to_response(template, RequestContext(request, context)) 

def get_ordered_list():
    themes = Theme.objects.all().order_by('display_name')
    theme_list = []
    for theme in themes:
        layers = theme.layer_set.all().order_by('name')
        theme_list.append((theme, layers))
    return theme_list
    
def add_learn_links(themes):
    context = []
    for theme in themes:
        context.append({'theme': theme, 'learn_link': theme.learn_link})
    return context
    
def linkify(text):
    return text.lower().replace(' ', '-')
    
