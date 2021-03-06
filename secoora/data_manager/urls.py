from django.conf.urls.defaults import *
from views import *

urlpatterns = patterns('',
    (r'^layer/([A-Za-z0-9_-]+)$', update_layer),
    (r'^layer', create_layer),
    (r'^get_json', get_json),
    (r'^get_closest_time', get_closest_time),
    (r'^get_time_increments/([A-Za-z0-9_-]+)$', get_time_increments),
    (r'^obs_data/([A-Za-z0-9_-]+)$', obs_data_request),
    (r'^platform_data/([A-Za-z0-9_-]+)$', platform_time_series_request),
    (r'^organization_data/([A-Za-z0-9_-]+)$', get_platforms_by_org)
)
