from django.conf.urls.defaults import *
from views import *

urlpatterns = patterns('',
    (r'^topic/([\w-]*)', topic_page),
    (r'^', learn_page),
)
