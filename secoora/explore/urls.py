from django.conf.urls.defaults import *
from views import *

urlpatterns = patterns('',

    (r'^csw_services', csw_list_service_type_grouping),
    (r'^catalog', data_catalog),
    (r'^bs3_catalog', data_catalog_bs3),
    (r'^data_partners', data_partners),
    (r'^search_catalog/(?P<catalog_q>[\w-]*)', catalog_search),
    (r'^csw_listing', csw_listing),
    (r'^search_page', search_page),
    #(r'^group_csw_services', csw_list_service_type_grouping_test),
    #(r'^csw_query', csw_query),
    #(r'^csw_test', csw_test),

    #(r'^needs', data_needs),
    #(r'^map_tile_example/([\w-]*)', map_tile_example),
    #(r'^map_tile_esri_example/([\w-]*)', map_tile_esri_example),
    ##(r'^map_tile_leaflet_example/([\w-]*)', map_tile_leaflet_example),
    #(r'^arcrest_example/([\w-]*)', arcrest_example),
    #(r'^([\w-]+)', tiles_page),
    #(r'^', explore_page),

)
