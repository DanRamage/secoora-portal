from django.contrib import admin
from models import * 

class ThemeAdmin(admin.ModelAdmin):
    list_display = ('display_name', 'name', 'id')
    pass

class LayerAdmin(admin.ModelAdmin):
    list_display = ('name', 'layer_type', 'url')
    search_fields = ['name', 'layer_type']
    ordering = ('name','metadatatable')
    exclude = ('slug_name',)

class AttributeInfoAdmin(admin.ModelAdmin):
    list_display = ('field_name', 'display_name', 'precision', 'order')

class LookupInfoAdmin(admin.ModelAdmin):
    list_display = ('value', 'color', 'dashstyle', 'fill', 'graphic')


class MetadataAdmin(admin.ModelAdmin):
    list_display = ('title', 'display_name', 'id')
    search_fields = ['title', 'display_name']

class ProviderAdmin(admin.ModelAdmin):
    list_display = ('source_name', 'id')

#class DataNeedAdmin(admin.ModelAdmin):
#    list_display = ('name', 'description')

admin.site.register(Theme, ThemeAdmin)
admin.site.register(Layer, LayerAdmin)
admin.site.register(AttributeInfo, AttributeInfoAdmin)
admin.site.register(LookupInfo, LookupInfoAdmin)
admin.site.register(Metadata, MetadataAdmin)
admin.site.register(Provider, ProviderAdmin)
admin.site.register(Observation)
admin.site.register(ProjectName)
admin.site.register(Place)
admin.site.register(Funding)


