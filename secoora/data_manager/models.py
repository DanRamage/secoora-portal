from django.db import models
from utils import get_domain

from djorm_pgfulltext.models import SearchManager
from djorm_pgfulltext.fields import VectorField

from django.template.defaultfilters import slugify
from django.contrib.gis.db import models
import datetime
#from sorl.thumbnail import ImageField
import logging
logger = logging.getLogger(__name__)

"""
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
"""

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
  name = models.CharField(max_length=100)
  display_name = models.CharField(max_length=100, blank=True, null=True)

  def __unicode__(self):
      return unicode('%s' % (self.display_name))

class ProjectName(models.Model):
  name = models.CharField(max_length=100)

  def __unicode__(self):
      return unicode('%s' % (self.name))


class Place(models.Model):
  name = models.CharField(max_length=100)

  def __unicode__(self):
      return unicode('%s' % (self.name))

class Funding(models.Model):
  name = models.CharField(max_length=100)

  def __unicode__(self):
      return unicode('%s' % (self.name))

urn_mapping = {'urn:ogc:serviceType:CatalogueService:2.0.2' : 'OGC Catalogue Service for the Web 2.0.2',
  'urn:ogc:serviceType:SensorObservationService:1.0.0' : 'OGC Sensor Obstion Service 1.0.0',
  'urn:ogc:serviceType:SensorObservationService:2.0.0' : 'OGC Sensor Observation Service 2.0.0',
  'urn:ogc:serviceType:WebCoverageService:1.1.0' : 'OGC Web Coverage Service 1.1.0',
  'urn:ogc:serviceType:WebCoverageService:1.0.0' : 'OGC Web Coverage Service 1.0.0',
  'urn:ogc:serviceType:WebFeatureService:2.0.0' : 'OGC Web Feature Service 2.0.0',
  'urn:ogc:serviceType:WebFeatureService:1.1.0' : 'OGC Web Feature Service 1.1.0',
  'urn:ogc:serviceType:WebFeatureService:1.0.0' : 'OGC Web Feature Service 1.0.0',
  'urn:ogc:serviceType:WebMapService:1.3.0' : 'OGC Web Map Service 1.3.0',
  'urn:ogc:serviceType:WebMapService:1.1.1' : 'OGC Web Map Service 1.1.1',
  'urn:ogc:serviceType:WebProcessingService:1.0.0' : 'OGC Web Processing Service 1.0.0',
  'urn:x-esri:serviceType:ArcIMS' : 'ESRI ArcIMS Service',
  'urn:x-esri:serviceType:ArcGIS' : 'ESRI ArcGIS Service',
  'urn:x-unidata:serviceType:OPeNDAP:2.0.0' : 'OPeNDAP 2.0.0',
  'urn:x-unidata:serviceType:NetCDFSubsetService:1.0.0' : 'NetCDF Subset Service 1.0.0',
  'urn:x-unidata:serviceType:CDMRemote:0.1.0' : 'Common Data Model Remote Web Service 0.1.0',
  'urn:ogc:dataFormat:GML:2.0' : 'OGC Geography Markup Language 2.0',
  'urn:ogc:dataFormat:GML:2.1.1' : 'OGC Geography Markup Language 2.1.1',
  'urn:ogc:dataFormat:GML:2.1.2' : 'OGC Geography Markup Language 2.1.2',
  'urn:ogc:dataFormat:GML:3.0' : 'OGC Geography Markup Language 3.0',
  'urn:ogc:dataFormat:GML:3.1.1' : 'OGC Geography Markup Language 3.1.1',
  'urn:x-osgeo:link:www' : 'Web link / URL',
  'urn:x-osgeo:link:www-thumbnail' : 'Web Thumbnail / browse image'}

class Metadata(models.Model):
  DATA_TYPE_CHOICES = (
    ('Observed', 'Observed'),
    ('Model', 'Model')
  )

  SPATIAL_TYPE_CHOICES = (
    ('Point', 'Point'),
    ('Coverage', 'Coverage')
  )

  MODEL_DATA_TYPE_CHOICES = (
    ('Grid', 'Grid'),
    ('Unstructured Grid', 'Unstructured Grid'),
    ('Point', 'Point')
  )

  TIME_TYPE_CHOICES = (
    ('Real Time', 'Real Time'),
    ('Forecast_Hindcast', 'Forecast/Hindcast'),
    ('Archival', 'Archival')
  )
  display_name = models.CharField(max_length=100, blank=True)
  name = models.CharField(max_length=100, blank=True)
  title = models.TextField(blank=True)

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
  time_steps = models.TextField(blank=True, null=True)

  keywords_project = models.ManyToManyField('ProjectName', blank=True, null=True)
  keywords_funding = models.ManyToManyField('Funding', blank=True, null=True)
  #keywords_topic = models.ManyToManyField('Topic', blank=True, null=True)
  keywords_theme = models.ManyToManyField('Theme', blank=True, null=True)

  keywords_instrumentation = models.TextField(blank=True)
  keywords_obs = models.ManyToManyField('Observation', blank=True, null=True)
  keywords_place = models.ManyToManyField('Place', blank=True, null=True)
  keywords_other = models.TextField(blank=True)

  anytext = models.TextField(blank=True)

  thumbnail_product = models.TextField(blank=True)
  abstract = models.TextField(blank=True)
  description_short = models.TextField(blank=True)
  metadata_link = models.TextField(blank=True)
  xml = models.TextField(blank=True)
  identifiers = models.TextField(blank=True)
  publish_date = models.DateTimeField(null=True, blank=True)
  links = models.TextField(blank=True)


  def __unicode__(self):
      return unicode('%s' % (self.title))

  @property
  def links_data(self):
    links = []
    if len(self.links):
      sources = self.links.split('\n')
      #Links are separated by return
      for src in sources:
        src = src.split(',')
        #THe link consists of [0]: Variable name [1]: Display name [2]: urn type [3]: link
        if len(src) == 4:
          type = "Unknown"
          if src[2] in urn_mapping:
            type = urn_mapping[src[2]]
          links.append({'name': src[0], 'type': type, 'href': src[3]})
        else:
          if logger:
            logger.error("%s missing links metadata." % (self.display_name))
    return links

class Provider(models.Model):
  row_entry_date = models.DateTimeField(default=datetime.datetime.now)
  row_update_date = models.DateTimeField(null=True, blank=True)
  display_name = models.CharField(max_length=200, blank=True)
  source_name = models.CharField(max_length=200, blank=True)
  source_link = models.CharField(max_length=500, blank=True)
  group_name = models.CharField(max_length=200, blank=True)
  thumbnail_source = models.CharField(max_length=500, blank=True)
  contact_email_list = models.CharField(max_length=2000, blank=True)
  use_constraints = models.CharField(max_length=2000, blank=True)
  #links = models.TextField(blank=True)
  catalog_name = models.CharField(max_length=200, blank=True)
  catalog_link = models.CharField(max_length=500, blank=True)
  #metadatatable = models.OneToOneField('Metadata', related_name='provider', blank=True, null=True)
  metadatatable = models.ForeignKey('Metadata', blank=True, null=True)
  secoora_funded = models.BooleanField(default='True')

  def __unicode__(self):
      return unicode('%s' % (self.source_name))

  @property
  def contacts(self):
    contacts = []
    for contact in self.contact_email_list.split(','):
      parts = contact.split(';')
      if len(parts) == 2:
        contacts.append({'name': parts[0], 'email_addr': parts[1]})
    return contacts

  @property
  def page_anchor(self):
    anchor = ""
    if self.group_name:
      anchor = self.group_name.replace(' ', '_')
    return anchor


class Layer(models.Model):

    TYPE_CHOICES = (
        ('XYZ', 'XYZ'),
        ('WMS', 'WMS'),
        ('WMST', 'WMST'),
        ('KML', 'KML'),
        ('GeoJSON', 'GeoJSON'),
        ('ObsGeoJSON', 'ObsGeoJSON'),
        ('WindGeoJSON', 'WindGeoJSON'),
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
    themes = models.ManyToManyField('Theme', blank=True, null=True)
    #topics = models.ManyToManyField('Topic', blank=True, null=True)
    is_sublayer = models.BooleanField(default=False)
    legend = models.CharField(max_length=2000, blank=True, null=True)
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


    row_entry_date = models.DateTimeField(default=datetime.datetime.now)
    row_update_date = models.DateTimeField(null=True, blank=True)
    openlayers_options = models.TextField(blank=True)

    metadatatable = models.OneToOneField('Metadata', related_name='layer', blank=True, null=True)
    provider = models.ForeignKey('Provider', blank=True, null=True)

    status_platform_handle = models.CharField(max_length=100, blank=True, null=True)
    status_field = models.CharField(max_length=500, blank=True, null=True)

    observation_name = models.CharField(max_length=50, blank=True, null=True)
    units = models.CharField(max_length=100, blank=True, null=True)
    units_display = models.CharField(max_length=100, blank=True, null=True)

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
                'opacity': layer.opacity,
                'openlayers_options': layer.openlayers_options,
                'status_field': layer.status_field,
                'observation_name': layer.observation_name,
                'units': layer.units,
                'units_display': layer.units_display
            }
            for layer in self.sublayers.all()
        ]
        status_field = self.status_field
        if len(sublayers) > 0:
          status_field = ""
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
            'opacity': self.opacity,
            'openlayers_options': self.openlayers_options,
            'status_field': status_field,
            'observation_name': self.observation_name,
            'units': self.units,
            'units_display': self.units_display

        }
        return layers_dict

    def save(self, *args, **kwargs):
        self.slug_name = self.slug
        super(Layer, self).save(*args, **kwargs)

"""
class Records(models.Model):
  identifier = models.TextField(primary_key=True)
  typename = models.TextField()
  schema = models.TextField()
  mdsource = models.TextField()
  insert_date = models.TextField()
  xml = models.TextField()
  anytext = models.TextField()
  language = models.TextField(blank=True)
  type = models.TextField(blank=True)
  title = models.TextField(blank=True)
  title_alternate = models.TextField(blank=True)
  abstract = models.TextField(blank=True)
  keywords = models.TextField(blank=True)
  keywordstype = models.TextField(blank=True)
  parentidentifier = models.TextField(blank=True)
  relation = models.TextField(blank=True)
  time_begin = models.TextField(blank=True)
  topicategory = models.TextField(blank=True)
  resourcelanguage = models.TextField(blank=True)
  creator = models.TextField(blank=True)
  publisher = models.TextField(blank=True)
  contributor = models.TextField(blank=True)
  organization = models.TextField(blank=True)
  securityconstraints = models.TextField(blank=True)
  accessconstraints = models.TextField(blank=True)
  otherconstraints = models.TextField(blank=True)
  date = models.TextField(blank=True)
  date_revision = models.TextField(blank=True)
  date_creation = models.TextField(blank=True)
  date_publication = models.TextField(blank=True)
  date_modified = models.TextField(blank=True)
  format = models.TextField(blank=True)
  source = models.TextField(blank=True)
  crs = models.TextField(blank=True)
  geodescode = models.TextField(blank=True)
  denominator = models.TextField(blank=True)
  distancevalue = models.TextField(blank=True)
  distanceuom = models.TextField(blank=True)
  wkt_geometry = models.TextField(blank=True)
  servicetype = models.TextField(blank=True)
  servicetypeversion = models.TextField(blank=True)
  operation = models.TextField(blank=True)
  couplingtype = models.TextField(blank=True)
  operateson = models.TextField(blank=True)
  operatesonidentifier = models.TextField(blank=True)
  operatesoname = models.TextField(blank=True)
  degree = models.TextField(blank=True)
  classification = models.TextField(blank=True)
  conditionapplyingtoaccessanduse = models.TextField(blank=True)
  lineage = models.TextField(blank=True)
  responsiblepartyrole = models.TextField(blank=True)
  specificationtitle = models.TextField(blank=True)
  specificationdate = models.TextField(blank=True)
  specificationdatetype = models.TextField(blank=True)
  links = models.TextField(blank=True)
  area = models.DecimalField(null=True, max_digits=999, decimal_places=999, blank=True)
  secoora_extent = models.BooleanField(blank=True)


  def __unicode__(self):
      return unicode('%s' % (self.name))
"""

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


links_mapping = {
  "OGC-CSW": "OGC-CSW Catalogue Service for the Web",
  "OGC-WMS": "OGC-WMS Web Map Service",
  "OGC-WFS": "OGC-WFS Web Feature Service",
  "OGC-WCS": "OGC-WCS Web Coverage Service",
  "OGC-WPS": "OGC-WPS Web Processing Service",
  "OGC-SOS": "OGC-SOS Sensor Observation Service",
  "WWW:LINK-1.0-http--image-thumbnail": "Web image thumbnail (URL)",
  "WWW:DOWNLOAD-1.0-http--download": "File for download",
  "OGC:WPS-1.1.0-http-get-capabilities": "OGC-WPS Capabilities service (ver 1.0.0)"}


service_display_name = {
  'http': {'name': 'HTTP',
           'help_text': 'A URL to the data source.'},
  'OPeNDAP:OPeNDAP': {'name' : 'OPeNDAP',
                      'help_text': 'Open-source Project for a Network Data Access Protocol", is a data transport architecture and protocol widely used by earth scientists.'},
  'OGC:WMS': {'name': 'WMS',
              'help_text': 'Web Map Service (WMS) is a standard protocol for serving georeferenced map images over the Internet that are generated by a map server using data from a GIS database.'},
  'UNIDATA:NCSS': {'name': 'NCSS',
                   'help_text': 'The NetCDF Subset Service is a web service for subsetting CDM scientific datasets.'},
  'file': {'name': 'File',
           'help_text': 'A file for downloading.'
           },
  'OGC:SOS': {'name': 'SOS',
              'help_text': 'The Sensor Observation Service is a web service to query real-time sensor data and sensor data time series and is part of the Sensor Web.'},
  'OGC:WCS': {'name': 'WCS',
              'help_text': 'Provides access to coverage data in forms that are useful for client-side rendering, as input into scientific models, and for other clients.'},
  'WWW:LINK': {'name': 'Link',
               'help_text': 'A web image thumbnail URL.'}
}

class pycsw_records(models.Model):
  identifier  = models.TextField(primary_key=True)
  typename  = models.TextField(default="csw:record", null=False,db_index=True)
  schema  = models.TextField(default='http://www.opengis.net/cat/csw/2.0.2', null=False, db_index=True)
  mdsource  = models.TextField(default='local', null=False, db_index=True)
  insert_date  = models.TextField(null=False, db_index=True)
  xml  = models.TextField(null=False)
  anytext  = models.TextField(null=False)
  language  = models.TextField(db_index=True)
  type  = models.TextField(db_index=True)
  title  = models.TextField(db_index=True)
  title_alternate  = models.TextField(db_index=True)
  abstract  = models.TextField(db_index=True)
  keywords  = models.TextField(db_index=True)
  keywordstype  = models.TextField(db_index=True)
  parentidentifier  = models.TextField(db_index=True)
  relation  = models.TextField(db_index=True)
  time_begin  = models.TextField(db_index=True)
  time_end  = models.TextField(db_index=True)
  topicategory  = models.TextField(db_index=True)
  resourcelanguage  = models.TextField(db_index=True)
  creator  = models.TextField(db_index=True)
  publisher  = models.TextField(db_index=True)
  contributor  = models.TextField(db_index=True)
  organization  = models.TextField(db_index=True)

  securityconstraints  = models.TextField(db_index=True)
  accessconstraints  = models.TextField(db_index=True)
  otherconstraints  = models.TextField(db_index=True)

  date  = models.TextField(db_index=True)
  date_revision  = models.TextField(db_index=True)
  date_creation  = models.TextField(db_index=True)
  date_publication  = models.TextField(db_index=True)
  date_modified  = models.TextField(db_index=True)
  format  = models.TextField(db_index=True)
  source  = models.TextField(db_index=True)

  crs  = models.TextField(db_index=True)
  geodescode  = models.TextField(db_index=True)
  denominator  = models.TextField(db_index=True)
  distancevalue  = models.TextField(db_index=True)
  distanceuom  = models.TextField(db_index=True)
  wkt_geometry  = models.TextField(db_index=True)

  servicetype  = models.TextField(db_index=True)
  servicetypeversion  = models.TextField(db_index=True)
  operation  = models.TextField(db_index=True)
  couplingtype  = models.TextField(db_index=True)
  operateson  = models.TextField(db_index=True)
  operatesonidentifier  = models.TextField(db_index=True)
  operatesoname  = models.TextField(db_index=True)

  degree  = models.TextField(db_index=True)
  classification  = models.TextField(db_index=True)
  conditionapplyingtoaccessanduse  = models.TextField(db_index=True)
  lineage  = models.TextField(db_index=True)
  responsiblepartyrole  = models.TextField(db_index=True)
  specificationtitle  = models.TextField(db_index=True)
  specificationdate  = models.TextField(db_index=True)
  specificationdatetype  = models.TextField(db_index=True)


  links  = models.TextField(db_index=True)

  wkb_geometry = models.PolygonField()

  anytext_tsvector = VectorField()

  #objects = models.Manager()
  objects = models.GeoManager()

  search_manager = SearchManager(
    fields=('anytext'),
    config='pg_catalog.english',
    search_field='anytext_tsvector',
    auto_update_search_field=True
  )
  html_id = None
  @property
  def wkt_geometry_to_text(self):
    geo_string = self.wkt_geometry.replace("POLYGON((", "")
    geo_string = geo_string.replace("))", "")
    return geo_string

  @property
  def links_data(self):
    links = []
    try:
      if len(self.links):
        #Links are separated by '^'
        sources = self.links.split('^')
        for src in sources:
          src = src.split(',')
          #THe link consists of name,description,protocol,ur
          if len(src) == 4:
            link = {'name': src[0], 'protocol': src[2], 'url': src[3]}
            if link['protocol'] and link['protocol'] != "None":
              links.append(link)
            #else:
            #  if logger:
            #    logger.error("%s has invalid protocol" % (self.title))
          else:
            if logger:
              logger.error("%s missing links metadata." % (self.title))
    except Exception,e:
      if logger:
        logger.exception(e)
    return links

  @property
  def time_begin_pretty(self):
    if logger:
      logger.debug("time_begin_pretty: %s" % (self.title))
    try:
      time_begin = datetime.datetime.strptime(self.time_begin, '%Y-%m-%dT%H:%M:%SZ')
      buf = time_begin.strftime("%Y-%m-%d %H:%M:%S")
    except ValueError, e:
      buf = self.time_begin
      if logger:
        logger.exception(e)
      try:
        if logger:
          logger.debug("time_begin_pretty attemping different format")
        time_begin = datetime.datetime.strptime(self.time_begin, '%Y-%m-%dT%H:%M:%S.%fZ')
        buf = time_begin.strftime("%Y-%m-%d %H:%M:%S")
      except ValueError, e:
        if logger:
          logger.exception(e)
    if logger:
      logger.debug("time_begin_pretty: %s" % (buf))

    return buf


  @property
  def time_end_pretty(self):
    if logger:
      logger.debug("time_end_pretty: %s" % (self.title))
    try:
      time_end = datetime.datetime.strptime(self.time_end, '%Y-%m-%dT%H:%M:%SZ')
      buf = time_end.strftime("%Y-%m-%d %H:%M:%S")
    except ValueError,e:
      buf = self.time_end
      if logger:
        logger.exception(e)
      try:
        if logger:
          logger.debug("time_end_pretty attemping different format")
        time_end = datetime.datetime.strptime(self.time_begin, '%Y-%m-%dT%H:%M:%S.%fZ')
        buf = time_end.strftime("%Y-%m-%d %H:%M:%S")
      except ValueError, e:
        if logger:
          logger.exception(e)
    if logger:
      logger.debug("time_end_pretty: %s" % (buf))
    return buf

  @property
  def keywords_split(self):
    if logger:
      logger.debug("keywords_split: %s" % (self.title))
    keywords = []
    try:
      keywords = self.keywords.split(',')
      keywords = [keyword.replace('_', ' ') for keyword in keywords]
    except Exception,e:
      if logger:
        logger.exception(e)

    if logger:
      logger.debug("keywords_split: %s" % (self.title))

    return(keywords)

  def __unicode__(self):
      return unicode('%s' % (self.title))

  class Meta:
    db_table = 'records'


