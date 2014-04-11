from django.db import models
from utils import get_domain
from django.template.defaultfilters import slugify
#from sorl.thumbnail import ImageField


class Topic(models.Model):
    display_name = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    header_image = models.CharField(max_length=255, blank=True, null=True)
    header_attrib = models.CharField(max_length=255, blank=True, null=True)
    overview = models.TextField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    thumbnail = models.URLField(max_length=255, blank=True, null=True)

    factsheet_thumb = models.CharField(max_length=255, blank=True, null=True)
    factsheet_link = models.CharField(max_length=255, blank=True, null=True)

    # not really using these atm    
    feature_image = models.CharField(max_length=255, blank=True, null=True)
    feature_excerpt = models.TextField(blank=True, null=True)
    feature_link = models.CharField(max_length=255, blank=True, null=True)



    def __unicode__(self):
        return unicode('%s' % (self.name))

    @property
    def learn_link(self):
        domain = get_domain(8000)
        return '%s/learn/%s' %(domain, self.name)
        
    @property
    def toDict(self):
        layers = [layer.id for layer in self.layer_set.filter(is_sublayer=False).exclude(layer_type='placeholder')]
        topics_dict = {
            'id': self.id,
            'display_name': self.display_name,
            'learn_link': self.learn_link,
            'layers': layers,
            'description': self.description
        }
        return topics_dict


class Theme(models.Model):
    display_name = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    header_image = models.CharField(max_length=255, blank=True, null=True)
    header_attrib = models.CharField(max_length=255, blank=True, null=True)
    overview = models.TextField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    thumbnail = models.URLField(max_length=255, blank=True, null=True)

    factsheet_thumb = models.CharField(max_length=255, blank=True, null=True)
    factsheet_link = models.CharField(max_length=255, blank=True, null=True)

    # not really using these atm    
    feature_image = models.CharField(max_length=255, blank=True, null=True)
    feature_excerpt = models.TextField(blank=True, null=True)
    feature_link = models.CharField(max_length=255, blank=True, null=True)



    def __unicode__(self):
        return unicode('%s' % (self.name))

    @property
    def learn_link(self):
        domain = get_domain(8000)
        return '%s/learn/%s' %(domain, self.name)
        
    @property
    def toDict(self):
        layers = [layer.id for layer in self.layer_set.filter(is_sublayer=False).exclude(layer_type='placeholder')]
        themes_dict = {
            'id': self.id,
            'display_name': self.display_name,
            'learn_link': self.learn_link,
            'layers': layers,
            'description': self.description
        }
        return themes_dict



class Observation(models.Model):
    name = models.TextField()

class ProjectName(models.Model):
    name = models.TextField()

class Place(models.Model):
    name = models.TextField()

class Funding(models.Model):
    name = models.TextField()


class metadatafields(models.Model):
  DATA_TYPE_CHOICES = (
    ('observed', 'Observed'),
    ('model', 'Model')
  )

  SPATIAL_TYPE_CHOICES = (
    ('point', 'Point'),
    ('coverage', 'Coverage')
  )

  MODEL_DATA_TYPE_CHOICES = (
    ('grid', 'Grid'),
    ('ugrid', 'Unstructured Grid'),
    ('point', 'Point')
  )

  TIME_TYPE_CHOICES = (
    ('realtime', 'Real Time'),
    ('archival', 'Archival')
  )

  data_type = models.CharField(max_length=50, choices=DATA_TYPE_CHOICES)
  spatial_type = models.CharField(max_length=50, choices=SPATIAL_TYPE_CHOICES)
  model_data_type = models.CharField(max_length=50, choices=MODEL_DATA_TYPE_CHOICES)

  getcap_link = models.TextField(blank=True)
  bbox_extent = models.TextField(blank=True)
  wkt_geometry = models.TextField(blank=True)
  spatial_resolution = models.TextField(blank=True)

  time_type = models.CharField(max_length=50, choices=TIME_TYPE_CHOICES)
  time_begin = models.DateTimeField(null=True, blank=True)
  time_end = models.DateTimeField(null=True, blank=True)
  time_interval_minutes = models.IntegerField(null=True, blank=True)
  get_capabilities_url = models.TextField(blank=True)

  keywords_project = models.ManyToManyField("ProjectName", blank=True, null=True)
  keywords_funding = models.ManyToManyField("Funding", blank=True, null=True)
  keywords_topic = models.ManyToManyField("Topic", blank=True, null=True)
  keywords_theme = models.ManyToManyField("Theme", blank=True, null=True)

  keywords_instrumentation = models.TextField(blank=True)
  keywords_obs = models.ManyToManyField("Observation", blank=True, null=True)
  keywords_place = models.ManyToManyField("Place", blank=True, null=True)
  keywords_other = models.TextField(blank=True)

  anytext = models.TextField(blank=True)

  thumbnail_product = models.TextField(blank=True)
  abstract = models.TextField(blank=True)
  description_short = models.TextField(blank=True)
  metadata_link = models.TextField(blank=True)
  xml = models.TextField(blank=True)
  identifiers = models.TextField(blank=True)
  publish_date = models.DateTimeField(null=True, blank=True)
  title = models.TextField(blank=True)

class Provider(models.Model):
    id = models.IntegerField(primary_key=True)
    row_entry_date = models.DateTimeField()
    row_update_date = models.DateTimeField(null=True, blank=True)
    source_name = models.CharField(max_length=200, blank=True)
    source_link = models.CharField(max_length=500, blank=True)
    thumbnail_source = models.CharField(max_length=500, blank=True)
    contact_email_list = models.CharField(max_length=2000, blank=True)
    use_constraints = models.CharField(max_length=2000, blank=True)
    links = models.TextField(blank=True)
    metadatafields = models.OneToOneField(metadatafields, related_name='provider')


class Layer(models.Model):

    TYPE_CHOICES = (
        ('XYZ', 'XYZ'),
        ('WMS', 'WMS'),
        ('ArcRest', 'ArcRest'),
        ('radio', 'radio'),
        ('checkbox', 'checkbox'),
        ('Vector', 'Vector'),
        ('placeholder', 'placeholder'),
    )
    name = models.CharField(max_length=100)
    slug_name = models.CharField(max_length=100, blank=True, null=True)
    layer_type = models.CharField(max_length=50, choices=TYPE_CHOICES)
    url = models.CharField(max_length=2000, blank=True, null=True)
    shareable_url = models.BooleanField(default=True)
    arcgis_layers = models.CharField(max_length=255, blank=True, null=True)
    sublayers = models.ManyToManyField('self', blank=True, null=True)
    themes = models.ManyToManyField("Theme", blank=True, null=True)
    topics = models.ManyToManyField("Topic", blank=True, null=True)
    is_sublayer = models.BooleanField(default=False)
    legend = models.CharField(max_length=255, blank=True, null=True)
    legend_title = models.CharField(max_length=255, blank=True, null=True)
    legend_subtitle = models.CharField(max_length=255, blank=True, null=True)
    utfurl = models.CharField(max_length=255, blank=True, null=True)

    #tooltip
    description = models.TextField(blank=True, null=True)

    #data description (updated fact sheet) (now the Learn pages)
    data_overview = models.TextField(blank=True, null=True)
    data_status = models.CharField(max_length=255, blank=True, null=True)
    data_source = models.CharField(max_length=255, blank=True, null=True)
    data_notes = models.TextField(blank=True, null=True)

    #data catalog links
    bookmark = models.CharField(max_length=755, blank=True, null=True)
    map_tiles = models.CharField(max_length=255, blank=True, null=True)
    kml = models.CharField(max_length=255, blank=True, null=True)
    data_download = models.CharField(max_length=255, blank=True, null=True)
    learn_more = models.CharField(max_length=255, blank=True, null=True)
    metadata = models.CharField(max_length=255, blank=True, null=True)
    fact_sheet = models.CharField(max_length=255, blank=True, null=True)
    source = models.CharField(max_length=255, blank=True, null=True)
    thumbnail = models.URLField(max_length=255, blank=True, null=True)

    #geojson javascript attribution
    EVENT_CHOICES = (
        ('click', 'click'),
        ('mouseover', 'mouseover')
    )
    attribute_title = models.CharField(max_length=255, blank=True, null=True)
    attribute_fields = models.ManyToManyField('AttributeInfo', blank=True, null=True)
    compress_display = models.BooleanField(default=False)
    attribute_event = models.CharField(max_length=35, choices=EVENT_CHOICES, default='click')
    lookup_field = models.CharField(max_length=255, blank=True, null=True)
    lookup_table = models.ManyToManyField('LookupInfo', blank=True, null=True)
    vector_color = models.CharField(max_length=7, blank=True, null=True)
    vector_fill = models.FloatField(blank=True, null=True)
    vector_graphic = models.CharField(max_length=255, blank=True, null=True)
    opacity = models.FloatField(default=.5, blank=True, null=True)


    row_entry_date = models.DateTimeField()
    row_update_date = models.DateTimeField(null=True, blank=True)
    openlayers_options = models.TextField(blank=True)

    metadatafields = models.OneToOneField(metadatafields, related_name='layer')
    provider = models.ManyToManyField('Provider', blank=True, null=True)

"""
class Layer(models.Model):
    TYPE_CHOICES = (
        ('XYZ', 'XYZ'),
        ('WMS', 'WMS'),
        ('ArcRest', 'ArcRest'),
        ('radio', 'radio'),
        ('checkbox', 'checkbox'),
        ('Vector', 'Vector'),
        ('placeholder', 'placeholder'),
    )
    name = models.CharField(max_length=100)
    slug_name = models.CharField(max_length=100, blank=True, null=True)
    layer_type = models.CharField(max_length=50, choices=TYPE_CHOICES)
    url = models.CharField(max_length=2000, blank=True, null=True)
    shareable_url = models.BooleanField(default=True)
    arcgis_layers = models.CharField(max_length=255, blank=True, null=True)
    sublayers = models.ManyToManyField('self', blank=True, null=True)
    themes = models.ManyToManyField("Theme", blank=True, null=True)
    topics = models.ManyToManyField("Topic", blank=True, null=True)
    is_sublayer = models.BooleanField(default=False)
    legend = models.CharField(max_length=255, blank=True, null=True)
    legend_title = models.CharField(max_length=255, blank=True, null=True)
    legend_subtitle = models.CharField(max_length=255, blank=True, null=True)
    utfurl = models.CharField(max_length=255, blank=True, null=True)
    
    #tooltip
    description = models.TextField(blank=True, null=True)
    
    #data description (updated fact sheet) (now the Learn pages)
    data_overview = models.TextField(blank=True, null=True)
    data_status = models.CharField(max_length=255, blank=True, null=True)
    data_source = models.CharField(max_length=255, blank=True, null=True)
    data_notes = models.TextField(blank=True, null=True)
    
    #data catalog links    
    bookmark = models.CharField(max_length=755, blank=True, null=True)
    map_tiles = models.CharField(max_length=255, blank=True, null=True)
    kml = models.CharField(max_length=255, blank=True, null=True)
    data_download = models.CharField(max_length=255, blank=True, null=True)
    learn_more = models.CharField(max_length=255, blank=True, null=True)
    metadata = models.CharField(max_length=255, blank=True, null=True)
    fact_sheet = models.CharField(max_length=255, blank=True, null=True)
    source = models.CharField(max_length=255, blank=True, null=True)
    thumbnail = models.URLField(max_length=255, blank=True, null=True)
    
    #geojson javascript attribution
    EVENT_CHOICES = (
        ('click', 'click'),
        ('mouseover', 'mouseover')
    )
    attribute_title = models.CharField(max_length=255, blank=True, null=True)
    attribute_fields = models.ManyToManyField('AttributeInfo', blank=True, null=True)
    compress_display = models.BooleanField(default=False)
    attribute_event = models.CharField(max_length=35, choices=EVENT_CHOICES, default='click')
    lookup_field = models.CharField(max_length=255, blank=True, null=True)
    lookup_table = models.ManyToManyField('LookupInfo', blank=True, null=True)
    vector_color = models.CharField(max_length=7, blank=True, null=True)
    vector_fill = models.FloatField(blank=True, null=True)
    vector_graphic = models.CharField(max_length=255, blank=True, null=True)
    opacity = models.FloatField(default=.5, blank=True, null=True)
    
    def __unicode__(self):
        return unicode('%s' % (self.name))

    @property
    def is_parent(self):
        return self.sublayers.all().count() > 0 and not self.is_sublayer
    
    @property
    def parent(self):
        if self.is_sublayer:
            return self.sublayers.all()[0]
        return self
    
    @property 
    def sublayer_list(self):
        if self.is_parent:
            return self.sublayers.all().order_by('name')
        else:
            return None
    
    @property
    def slug(self):
        return slugify(self.name)

    @property
    def data_overview_text(self):
        if not self.data_overview and self.is_sublayer:
            return self.parent.data_overview
        else:
            return self.data_overview
        
    @property
    def data_source_text(self):
        if not self.data_source and self.is_sublayer:
            return self.parent.data_source
        else:
            return self.data_source
        
    @property
    def data_notes_text(self):
        if not self.data_notes and self.is_sublayer:
            return self.parent.data_notes
        else:
            return self.data_notes
    
    @property
    def bookmark_link(self):
        if not self.bookmark and self.is_sublayer and self.parent.bookmark:
            return self.parent.bookmark.replace('<layer_id>', str(self.id))
        else:
            return self.bookmark
    
    @property
    def data_download_link(self):
        if self.data_download and self.data_download.lower() == 'none':
            return None
        if not self.data_download and self.is_sublayer:
            return self.parent.data_download
        else:
            return self.data_download
        
    @property
    def metadata_link(self):
        if self.metadata and self.metadata.lower() == 'none':
            return None
        if not self.metadata and self.is_sublayer:
            return self.parent.metadata
        else:
            return self.metadata
        
    @property
    def source_link(self):
        if self.source and self.source.lower() == 'none':
            return None
        if not self.source and self.is_sublayer:
            return self.parent.source
        else:
            return self.source
        
    @property
    def learn_link(self):
        if self.learn_more:
            return self.learn_more
        else:
            theme = self.themes.all()[0]  
            return "%s#%s" %(theme.learn_link, self.slug)
        
    @property
    def description_link(self):
        theme_name = self.themes.all()[0].name
        domain = get_domain(8000)
        return '%s/learn/%s#%s' %(domain, theme_name, self.slug)
        
    @property
    def tiles_link(self):
        if self.is_shareable and self.layer_type in ['XYZ', 'ArcRest', 'WMS']:
            domain = get_domain(8000)
            return '%s/explore/%s' %(domain, self.slug)
        return None
        
    @property
    def tooltip(self):
        if self.description and self.description.strip() != '':
            return self.description
        elif self.parent.description and self.parent.description.strip() != '':
            return self.parent.description
        else:
            return None
            
    @property
    def is_shareable(self):
        if self.shareable_url == False:
            return False
        if self.parent and self.parent.shareable_url == False:
            return False
        return True
            
    @property
    def serialize_attributes(self):
        return {'title': self.attribute_title, 
                'compress_attributes': self.compress_display,
                'event': self.attribute_event,
                'attributes': [{'display': attr.display_name, 'field': attr.field_name, 'precision': attr.precision} for attr in self.attribute_fields.all().order_by('order')]}
    
    @property
    def serialize_lookups(self):
        return {'field': self.lookup_field, 
                'details': [{'value': lookup.value, 'color': lookup.color, 'dashstyle': lookup.dashstyle, 'fill': lookup.fill, 'graphic': lookup.graphic} for lookup in self.lookup_table.all()]}
    
    @property
    def toDict(self):
        sublayers = [
            {
                'id': layer.id,
                'name': layer.name,
                'type': layer.layer_type,
                'url': layer.url,
                'arcgis_layers': layer.arcgis_layers,
                'utfurl': layer.utfurl,
                'parent': self.id,
                'legend': layer.legend,
                'legend_title': layer.legend_title,
                'legend_subtitle': layer.legend_subtitle,
                'description': layer.tooltip,
                'overview': layer.data_overview_text,
                'data_source': layer.data_source,
                'data_notes': layer.data_notes,
                'kml': layer.kml,
                'data_download': layer.data_download_link,
                'metadata': layer.metadata_link,
                'source': layer.source_link,
                'tiles': layer.tiles_link,
                'learn_link': layer.learn_link,
                'attributes': layer.serialize_attributes,
                'lookups': layer.serialize_lookups,
                'color': layer.vector_color,
                'fill_opacity': layer.vector_fill,
                'graphic': layer.vector_graphic,
                'opacity': layer.opacity
            } 
            for layer in self.sublayers.all()
        ]
        layers_dict = {
            'id': self.id,
            'name': self.name,
            'type': self.layer_type,
            'url': self.url,
            'arcgis_layers': self.arcgis_layers,
            'utfurl': self.utfurl,
            'subLayers': sublayers,
            'legend': self.legend,
            'legend_title': self.legend_title,
            'legend_subtitle': self.legend_subtitle,
            #'description': self.description,
            'description': self.data_overview,
            'overview': self.data_overview,
            'data_source': self.data_source,
            'data_notes': self.data_notes,
            'kml': self.kml,
            'data_download': self.data_download_link,
            'metadata': self.metadata_link,
            'source': self.source_link,
            'tiles': self.tiles_link,
            'learn_link': self.learn_link,
            'attributes': self.serialize_attributes,
            'lookups': self.serialize_lookups,
            'color': self.vector_color,
            'fill_opacity': self.vector_fill,
            'graphic': self.vector_graphic,
            'opacity': self.opacity
        }
        return layers_dict
        
    def save(self, *args, **kwargs):
        self.slug_name = self.slug
        super(Layer, self).save(*args, **kwargs)
"""
class AttributeInfo(models.Model):
    display_name = models.CharField(max_length=255, blank=True, null=True)
    field_name = models.CharField(max_length=255, blank=True, null=True)
    precision = models.IntegerField(blank=True, null=True)
    order = models.IntegerField(default=1)
    
    def __unicode__(self):
        return unicode('%s' % (self.field_name)) 
    
class LookupInfo(models.Model):
    DASH_CHOICES = (
        ('dot', 'dot'),
        ('dash', 'dash'),
        ('dashdot', 'dashdot'),
        ('longdash', 'longdash'),
        ('longdashdot', 'longdashdot'),
        ('solid', 'solid')
    )
    value = models.CharField(max_length=255, blank=True, null=True)
    color = models.CharField(max_length=7, blank=True, null=True)
    dashstyle = models.CharField(max_length=11, choices=DASH_CHOICES, default='solid')
    fill = models.BooleanField(default=False)
    graphic = models.CharField(max_length=255, blank=True, null=True)
    
    def __unicode__(self):
        return unicode('%s' % (self.value)) 
    
"""
class DataNeed(models.Model):
    name = models.CharField(max_length=100)
    archived = models.BooleanField(default=False)
    description = models.TextField(blank=True, null=True)
    source = models.CharField(max_length=255, blank=True, null=True)
    status = models.TextField(blank=True, null=True)
    contact = models.CharField(max_length=255, blank=True, null=True)
    contact_email = models.CharField(max_length=255, blank=True, null=True)
    expected_date = models.CharField(max_length=255, blank=True, null=True)
    notes = models.TextField(blank=True, null=True)
    themes = models.ManyToManyField("Theme", blank=True, null=True)

    @property
    def html_name(self):
        return self.name.lower().replace(' ', '-')
    
    def __unicode__(self):
        return unicode('%s' % (self.name))
"""