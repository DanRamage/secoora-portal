from django.conf.urls.defaults import *
from views import *

urlpatterns = patterns('',
    (r'^layer/([A-Za-z0-9_-]+)$', update_layer),
    (r'^layer', create_layer),
    (r'^get_json', get_json),
    (r'^get_closest_time', get_closest_time),
    (r'^get_time_increments/([A-Za-z0-9_-]+)$', get_time_increments),
    (r'^water_temps', get_water_temp_stations)
)
