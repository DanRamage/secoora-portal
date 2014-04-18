# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding model 'Topic'
        db.create_table('data_manager_topic', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('display_name', self.gf('django.db.models.fields.CharField')(max_length=100)),
            ('name', self.gf('django.db.models.fields.CharField')(max_length=100)),
            ('header_image', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
            ('header_attrib', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
            ('overview', self.gf('django.db.models.fields.TextField')(null=True, blank=True)),
            ('description', self.gf('django.db.models.fields.TextField')(null=True, blank=True)),
            ('thumbnail', self.gf('django.db.models.fields.URLField')(max_length=255, null=True, blank=True)),
            ('factsheet_thumb', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
            ('factsheet_link', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
            ('feature_image', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
            ('feature_excerpt', self.gf('django.db.models.fields.TextField')(null=True, blank=True)),
            ('feature_link', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
        ))
        db.send_create_signal('data_manager', ['Topic'])

        # Adding model 'Theme'
        db.create_table('data_manager_theme', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('display_name', self.gf('django.db.models.fields.CharField')(max_length=100)),
            ('name', self.gf('django.db.models.fields.CharField')(max_length=100)),
            ('header_image', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
            ('header_attrib', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
            ('overview', self.gf('django.db.models.fields.TextField')(null=True, blank=True)),
            ('description', self.gf('django.db.models.fields.TextField')(null=True, blank=True)),
            ('thumbnail', self.gf('django.db.models.fields.URLField')(max_length=255, null=True, blank=True)),
            ('factsheet_thumb', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
            ('factsheet_link', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
            ('feature_image', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
            ('feature_excerpt', self.gf('django.db.models.fields.TextField')(null=True, blank=True)),
            ('feature_link', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
        ))
        db.send_create_signal('data_manager', ['Theme'])

        # Adding model 'Observation'
        db.create_table('data_manager_observation', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.TextField')()),
        ))
        db.send_create_signal('data_manager', ['Observation'])

        # Adding model 'ProjectName'
        db.create_table('data_manager_projectname', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.TextField')()),
        ))
        db.send_create_signal('data_manager', ['ProjectName'])

        # Adding model 'Place'
        db.create_table('data_manager_place', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.TextField')()),
        ))
        db.send_create_signal('data_manager', ['Place'])

        # Adding model 'Funding'
        db.create_table('data_manager_funding', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.TextField')()),
        ))
        db.send_create_signal('data_manager', ['Funding'])

        # Adding model 'Metadata'
        db.create_table('data_manager_metadata', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('data_type', self.gf('django.db.models.fields.CharField')(max_length=50)),
            ('spatial_type', self.gf('django.db.models.fields.CharField')(max_length=50)),
            ('model_data_type', self.gf('django.db.models.fields.CharField')(max_length=50)),
            ('getcap_link', self.gf('django.db.models.fields.TextField')(blank=True)),
            ('bbox_extent', self.gf('django.db.models.fields.TextField')(blank=True)),
            ('wkt_geometry', self.gf('django.db.models.fields.TextField')(blank=True)),
            ('spatial_resolution', self.gf('django.db.models.fields.TextField')(blank=True)),
            ('time_type', self.gf('django.db.models.fields.CharField')(max_length=50)),
            ('time_begin', self.gf('django.db.models.fields.DateTimeField')(null=True, blank=True)),
            ('time_end', self.gf('django.db.models.fields.DateTimeField')(null=True, blank=True)),
            ('time_interval_minutes', self.gf('django.db.models.fields.IntegerField')(null=True, blank=True)),
            ('keywords_instrumentation', self.gf('django.db.models.fields.TextField')(blank=True)),
            ('keywords_other', self.gf('django.db.models.fields.TextField')(blank=True)),
            ('anytext', self.gf('django.db.models.fields.TextField')(blank=True)),
            ('thumbnail_product', self.gf('django.db.models.fields.TextField')(blank=True)),
            ('abstract', self.gf('django.db.models.fields.TextField')(blank=True)),
            ('description_short', self.gf('django.db.models.fields.TextField')(blank=True)),
            ('metadata_link', self.gf('django.db.models.fields.TextField')(blank=True)),
            ('xml', self.gf('django.db.models.fields.TextField')(blank=True)),
            ('identifiers', self.gf('django.db.models.fields.TextField')(blank=True)),
            ('publish_date', self.gf('django.db.models.fields.DateTimeField')(null=True, blank=True)),
            ('title', self.gf('django.db.models.fields.TextField')(blank=True)),
        ))
        db.send_create_signal('data_manager', ['Metadata'])

        # Adding M2M table for field keywords_project on 'Metadata'
        db.create_table('data_manager_metadata_keywords_project', (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('metadata', models.ForeignKey(orm['data_manager.metadata'], null=False)),
            ('projectname', models.ForeignKey(orm['data_manager.projectname'], null=False))
        ))
        db.create_unique('data_manager_metadata_keywords_project', ['metadata_id', 'projectname_id'])

        # Adding M2M table for field keywords_funding on 'Metadata'
        db.create_table('data_manager_metadata_keywords_funding', (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('metadata', models.ForeignKey(orm['data_manager.metadata'], null=False)),
            ('funding', models.ForeignKey(orm['data_manager.funding'], null=False))
        ))
        db.create_unique('data_manager_metadata_keywords_funding', ['metadata_id', 'funding_id'])

        # Adding M2M table for field keywords_topic on 'Metadata'
        db.create_table('data_manager_metadata_keywords_topic', (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('metadata', models.ForeignKey(orm['data_manager.metadata'], null=False)),
            ('topic', models.ForeignKey(orm['data_manager.topic'], null=False))
        ))
        db.create_unique('data_manager_metadata_keywords_topic', ['metadata_id', 'topic_id'])

        # Adding M2M table for field keywords_theme on 'Metadata'
        db.create_table('data_manager_metadata_keywords_theme', (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('metadata', models.ForeignKey(orm['data_manager.metadata'], null=False)),
            ('theme', models.ForeignKey(orm['data_manager.theme'], null=False))
        ))
        db.create_unique('data_manager_metadata_keywords_theme', ['metadata_id', 'theme_id'])

        # Adding M2M table for field keywords_obs on 'Metadata'
        db.create_table('data_manager_metadata_keywords_obs', (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('metadata', models.ForeignKey(orm['data_manager.metadata'], null=False)),
            ('observation', models.ForeignKey(orm['data_manager.observation'], null=False))
        ))
        db.create_unique('data_manager_metadata_keywords_obs', ['metadata_id', 'observation_id'])

        # Adding M2M table for field keywords_place on 'Metadata'
        db.create_table('data_manager_metadata_keywords_place', (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('metadata', models.ForeignKey(orm['data_manager.metadata'], null=False)),
            ('place', models.ForeignKey(orm['data_manager.place'], null=False))
        ))
        db.create_unique('data_manager_metadata_keywords_place', ['metadata_id', 'place_id'])

        # Adding model 'Provider'
        db.create_table('data_manager_provider', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('row_entry_date', self.gf('django.db.models.fields.DateTimeField')(default=datetime.datetime.now)),
            ('row_update_date', self.gf('django.db.models.fields.DateTimeField')(null=True, blank=True)),
            ('source_name', self.gf('django.db.models.fields.CharField')(max_length=200, blank=True)),
            ('source_link', self.gf('django.db.models.fields.CharField')(max_length=500, blank=True)),
            ('thumbnail_source', self.gf('django.db.models.fields.CharField')(max_length=500, blank=True)),
            ('contact_email_list', self.gf('django.db.models.fields.CharField')(max_length=2000, blank=True)),
            ('use_constraints', self.gf('django.db.models.fields.CharField')(max_length=2000, blank=True)),
            ('links', self.gf('django.db.models.fields.TextField')(blank=True)),
            ('catalog_name', self.gf('django.db.models.fields.CharField')(max_length=200, blank=True)),
            ('catalog_link', self.gf('django.db.models.fields.CharField')(max_length=500, blank=True)),
            ('metadatatable', self.gf('django.db.models.fields.related.OneToOneField')(blank=True, related_name='provider', unique=True, null=True, to=orm['data_manager.Metadata'])),
        ))
        db.send_create_signal('data_manager', ['Provider'])

        # Adding model 'Layer'
        db.create_table('data_manager_layer', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(max_length=100)),
            ('slug_name', self.gf('django.db.models.fields.CharField')(max_length=100, null=True, blank=True)),
            ('layer_type', self.gf('django.db.models.fields.CharField')(max_length=50)),
            ('url', self.gf('django.db.models.fields.CharField')(max_length=2000, null=True, blank=True)),
            ('shareable_url', self.gf('django.db.models.fields.BooleanField')(default=True)),
            ('arcgis_layers', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
            ('is_sublayer', self.gf('django.db.models.fields.BooleanField')(default=False)),
            ('legend', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
            ('legend_title', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
            ('legend_subtitle', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
            ('utfurl', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
            ('description', self.gf('django.db.models.fields.TextField')(null=True, blank=True)),
            ('data_overview', self.gf('django.db.models.fields.TextField')(null=True, blank=True)),
            ('data_status', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
            ('data_source', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
            ('data_notes', self.gf('django.db.models.fields.TextField')(null=True, blank=True)),
            ('bookmark', self.gf('django.db.models.fields.CharField')(max_length=755, null=True, blank=True)),
            ('map_tiles', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
            ('kml', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
            ('data_download', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
            ('learn_more', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
            ('metadata', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
            ('fact_sheet', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
            ('source', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
            ('thumbnail', self.gf('django.db.models.fields.URLField')(max_length=255, null=True, blank=True)),
            ('attribute_title', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
            ('compress_display', self.gf('django.db.models.fields.BooleanField')(default=False)),
            ('attribute_event', self.gf('django.db.models.fields.CharField')(default='click', max_length=35)),
            ('lookup_field', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
            ('vector_color', self.gf('django.db.models.fields.CharField')(max_length=7, null=True, blank=True)),
            ('vector_fill', self.gf('django.db.models.fields.FloatField')(null=True, blank=True)),
            ('vector_graphic', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
            ('opacity', self.gf('django.db.models.fields.FloatField')(default=0.5, null=True, blank=True)),
            ('row_entry_date', self.gf('django.db.models.fields.DateTimeField')(default=datetime.datetime.now)),
            ('row_update_date', self.gf('django.db.models.fields.DateTimeField')(null=True, blank=True)),
            ('openlayers_options', self.gf('django.db.models.fields.TextField')(blank=True)),
            ('metadatatable', self.gf('django.db.models.fields.related.OneToOneField')(blank=True, related_name='layer', unique=True, null=True, to=orm['data_manager.Metadata'])),
        ))
        db.send_create_signal('data_manager', ['Layer'])

        # Adding M2M table for field sublayers on 'Layer'
        db.create_table('data_manager_layer_sublayers', (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('from_layer', models.ForeignKey(orm['data_manager.layer'], null=False)),
            ('to_layer', models.ForeignKey(orm['data_manager.layer'], null=False))
        ))
        db.create_unique('data_manager_layer_sublayers', ['from_layer_id', 'to_layer_id'])

        # Adding M2M table for field themes on 'Layer'
        db.create_table('data_manager_layer_themes', (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('layer', models.ForeignKey(orm['data_manager.layer'], null=False)),
            ('theme', models.ForeignKey(orm['data_manager.theme'], null=False))
        ))
        db.create_unique('data_manager_layer_themes', ['layer_id', 'theme_id'])

        # Adding M2M table for field topics on 'Layer'
        db.create_table('data_manager_layer_topics', (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('layer', models.ForeignKey(orm['data_manager.layer'], null=False)),
            ('topic', models.ForeignKey(orm['data_manager.topic'], null=False))
        ))
        db.create_unique('data_manager_layer_topics', ['layer_id', 'topic_id'])

        # Adding M2M table for field attribute_fields on 'Layer'
        db.create_table('data_manager_layer_attribute_fields', (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('layer', models.ForeignKey(orm['data_manager.layer'], null=False)),
            ('attributeinfo', models.ForeignKey(orm['data_manager.attributeinfo'], null=False))
        ))
        db.create_unique('data_manager_layer_attribute_fields', ['layer_id', 'attributeinfo_id'])

        # Adding M2M table for field lookup_table on 'Layer'
        db.create_table('data_manager_layer_lookup_table', (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('layer', models.ForeignKey(orm['data_manager.layer'], null=False)),
            ('lookupinfo', models.ForeignKey(orm['data_manager.lookupinfo'], null=False))
        ))
        db.create_unique('data_manager_layer_lookup_table', ['layer_id', 'lookupinfo_id'])

        # Adding M2M table for field provider on 'Layer'
        db.create_table('data_manager_layer_provider', (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('layer', models.ForeignKey(orm['data_manager.layer'], null=False)),
            ('provider', models.ForeignKey(orm['data_manager.provider'], null=False))
        ))
        db.create_unique('data_manager_layer_provider', ['layer_id', 'provider_id'])

        # Adding model 'AttributeInfo'
        db.create_table('data_manager_attributeinfo', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('display_name', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
            ('field_name', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
            ('precision', self.gf('django.db.models.fields.IntegerField')(null=True, blank=True)),
            ('order', self.gf('django.db.models.fields.IntegerField')(default=1)),
        ))
        db.send_create_signal('data_manager', ['AttributeInfo'])

        # Adding model 'LookupInfo'
        db.create_table('data_manager_lookupinfo', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('value', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
            ('color', self.gf('django.db.models.fields.CharField')(max_length=7, null=True, blank=True)),
            ('dashstyle', self.gf('django.db.models.fields.CharField')(default='solid', max_length=11)),
            ('fill', self.gf('django.db.models.fields.BooleanField')(default=False)),
            ('graphic', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
        ))
        db.send_create_signal('data_manager', ['LookupInfo'])

    def backwards(self, orm):
        # Deleting model 'Topic'
        db.delete_table('data_manager_topic')

        # Deleting model 'Theme'
        db.delete_table('data_manager_theme')

        # Deleting model 'Observation'
        db.delete_table('data_manager_observation')

        # Deleting model 'ProjectName'
        db.delete_table('data_manager_projectname')

        # Deleting model 'Place'
        db.delete_table('data_manager_place')

        # Deleting model 'Funding'
        db.delete_table('data_manager_funding')

        # Deleting model 'Metadata'
        db.delete_table('data_manager_metadata')

        # Removing M2M table for field keywords_project on 'Metadata'
        db.delete_table('data_manager_metadata_keywords_project')

        # Removing M2M table for field keywords_funding on 'Metadata'
        db.delete_table('data_manager_metadata_keywords_funding')

        # Removing M2M table for field keywords_topic on 'Metadata'
        db.delete_table('data_manager_metadata_keywords_topic')

        # Removing M2M table for field keywords_theme on 'Metadata'
        db.delete_table('data_manager_metadata_keywords_theme')

        # Removing M2M table for field keywords_obs on 'Metadata'
        db.delete_table('data_manager_metadata_keywords_obs')

        # Removing M2M table for field keywords_place on 'Metadata'
        db.delete_table('data_manager_metadata_keywords_place')

        # Deleting model 'Provider'
        db.delete_table('data_manager_provider')

        # Deleting model 'Layer'
        db.delete_table('data_manager_layer')

        # Removing M2M table for field sublayers on 'Layer'
        db.delete_table('data_manager_layer_sublayers')

        # Removing M2M table for field themes on 'Layer'
        db.delete_table('data_manager_layer_themes')

        # Removing M2M table for field topics on 'Layer'
        db.delete_table('data_manager_layer_topics')

        # Removing M2M table for field attribute_fields on 'Layer'
        db.delete_table('data_manager_layer_attribute_fields')

        # Removing M2M table for field lookup_table on 'Layer'
        db.delete_table('data_manager_layer_lookup_table')

        # Removing M2M table for field provider on 'Layer'
        db.delete_table('data_manager_layer_provider')

        # Deleting model 'AttributeInfo'
        db.delete_table('data_manager_attributeinfo')

        # Deleting model 'LookupInfo'
        db.delete_table('data_manager_lookupinfo')

    models = {
        'data_manager.attributeinfo': {
            'Meta': {'object_name': 'AttributeInfo'},
            'display_name': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'field_name': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'order': ('django.db.models.fields.IntegerField', [], {'default': '1'}),
            'precision': ('django.db.models.fields.IntegerField', [], {'null': 'True', 'blank': 'True'})
        },
        'data_manager.funding': {
            'Meta': {'object_name': 'Funding'},
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.TextField', [], {})
        },
        'data_manager.layer': {
            'Meta': {'object_name': 'Layer'},
            'arcgis_layers': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'attribute_event': ('django.db.models.fields.CharField', [], {'default': "'click'", 'max_length': '35'}),
            'attribute_fields': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'to': "orm['data_manager.AttributeInfo']", 'null': 'True', 'blank': 'True'}),
            'attribute_title': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'bookmark': ('django.db.models.fields.CharField', [], {'max_length': '755', 'null': 'True', 'blank': 'True'}),
            'compress_display': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'data_download': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'data_notes': ('django.db.models.fields.TextField', [], {'null': 'True', 'blank': 'True'}),
            'data_overview': ('django.db.models.fields.TextField', [], {'null': 'True', 'blank': 'True'}),
            'data_source': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'data_status': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'description': ('django.db.models.fields.TextField', [], {'null': 'True', 'blank': 'True'}),
            'fact_sheet': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'is_sublayer': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'kml': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'layer_type': ('django.db.models.fields.CharField', [], {'max_length': '50'}),
            'learn_more': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'legend': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'legend_subtitle': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'legend_title': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'lookup_field': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'lookup_table': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'to': "orm['data_manager.LookupInfo']", 'null': 'True', 'blank': 'True'}),
            'map_tiles': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'metadata': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'metadatatable': ('django.db.models.fields.related.OneToOneField', [], {'blank': 'True', 'related_name': "'layer'", 'unique': 'True', 'null': 'True', 'to': "orm['data_manager.Metadata']"}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'opacity': ('django.db.models.fields.FloatField', [], {'default': '0.5', 'null': 'True', 'blank': 'True'}),
            'openlayers_options': ('django.db.models.fields.TextField', [], {'blank': 'True'}),
            'provider': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'to': "orm['data_manager.Provider']", 'null': 'True', 'blank': 'True'}),
            'row_entry_date': ('django.db.models.fields.DateTimeField', [], {'default': 'datetime.datetime.now'}),
            'row_update_date': ('django.db.models.fields.DateTimeField', [], {'null': 'True', 'blank': 'True'}),
            'shareable_url': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'slug_name': ('django.db.models.fields.CharField', [], {'max_length': '100', 'null': 'True', 'blank': 'True'}),
            'source': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'sublayers': ('django.db.models.fields.related.ManyToManyField', [], {'blank': 'True', 'related_name': "'sublayers_rel_+'", 'null': 'True', 'to': "orm['data_manager.Layer']"}),
            'themes': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'to': "orm['data_manager.Theme']", 'null': 'True', 'blank': 'True'}),
            'thumbnail': ('django.db.models.fields.URLField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'topics': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'to': "orm['data_manager.Topic']", 'null': 'True', 'blank': 'True'}),
            'url': ('django.db.models.fields.CharField', [], {'max_length': '2000', 'null': 'True', 'blank': 'True'}),
            'utfurl': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'vector_color': ('django.db.models.fields.CharField', [], {'max_length': '7', 'null': 'True', 'blank': 'True'}),
            'vector_fill': ('django.db.models.fields.FloatField', [], {'null': 'True', 'blank': 'True'}),
            'vector_graphic': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'})
        },
        'data_manager.lookupinfo': {
            'Meta': {'object_name': 'LookupInfo'},
            'color': ('django.db.models.fields.CharField', [], {'max_length': '7', 'null': 'True', 'blank': 'True'}),
            'dashstyle': ('django.db.models.fields.CharField', [], {'default': "'solid'", 'max_length': '11'}),
            'fill': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'graphic': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'value': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'})
        },
        'data_manager.metadata': {
            'Meta': {'object_name': 'Metadata'},
            'abstract': ('django.db.models.fields.TextField', [], {'blank': 'True'}),
            'anytext': ('django.db.models.fields.TextField', [], {'blank': 'True'}),
            'bbox_extent': ('django.db.models.fields.TextField', [], {'blank': 'True'}),
            'data_type': ('django.db.models.fields.CharField', [], {'max_length': '50'}),
            'description_short': ('django.db.models.fields.TextField', [], {'blank': 'True'}),
            'getcap_link': ('django.db.models.fields.TextField', [], {'blank': 'True'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'identifiers': ('django.db.models.fields.TextField', [], {'blank': 'True'}),
            'keywords_funding': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'to': "orm['data_manager.Funding']", 'null': 'True', 'blank': 'True'}),
            'keywords_instrumentation': ('django.db.models.fields.TextField', [], {'blank': 'True'}),
            'keywords_obs': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'to': "orm['data_manager.Observation']", 'null': 'True', 'blank': 'True'}),
            'keywords_other': ('django.db.models.fields.TextField', [], {'blank': 'True'}),
            'keywords_place': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'to': "orm['data_manager.Place']", 'null': 'True', 'blank': 'True'}),
            'keywords_project': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'to': "orm['data_manager.ProjectName']", 'null': 'True', 'blank': 'True'}),
            'keywords_theme': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'to': "orm['data_manager.Theme']", 'null': 'True', 'blank': 'True'}),
            'keywords_topic': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'to': "orm['data_manager.Topic']", 'null': 'True', 'blank': 'True'}),
            'metadata_link': ('django.db.models.fields.TextField', [], {'blank': 'True'}),
            'model_data_type': ('django.db.models.fields.CharField', [], {'max_length': '50'}),
            'publish_date': ('django.db.models.fields.DateTimeField', [], {'null': 'True', 'blank': 'True'}),
            'spatial_resolution': ('django.db.models.fields.TextField', [], {'blank': 'True'}),
            'spatial_type': ('django.db.models.fields.CharField', [], {'max_length': '50'}),
            'thumbnail_product': ('django.db.models.fields.TextField', [], {'blank': 'True'}),
            'time_begin': ('django.db.models.fields.DateTimeField', [], {'null': 'True', 'blank': 'True'}),
            'time_end': ('django.db.models.fields.DateTimeField', [], {'null': 'True', 'blank': 'True'}),
            'time_interval_minutes': ('django.db.models.fields.IntegerField', [], {'null': 'True', 'blank': 'True'}),
            'time_type': ('django.db.models.fields.CharField', [], {'max_length': '50'}),
            'title': ('django.db.models.fields.TextField', [], {'blank': 'True'}),
            'wkt_geometry': ('django.db.models.fields.TextField', [], {'blank': 'True'}),
            'xml': ('django.db.models.fields.TextField', [], {'blank': 'True'})
        },
        'data_manager.observation': {
            'Meta': {'object_name': 'Observation'},
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.TextField', [], {})
        },
        'data_manager.place': {
            'Meta': {'object_name': 'Place'},
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.TextField', [], {})
        },
        'data_manager.projectname': {
            'Meta': {'object_name': 'ProjectName'},
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.TextField', [], {})
        },
        'data_manager.provider': {
            'Meta': {'object_name': 'Provider'},
            'catalog_link': ('django.db.models.fields.CharField', [], {'max_length': '500', 'blank': 'True'}),
            'catalog_name': ('django.db.models.fields.CharField', [], {'max_length': '200', 'blank': 'True'}),
            'contact_email_list': ('django.db.models.fields.CharField', [], {'max_length': '2000', 'blank': 'True'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'links': ('django.db.models.fields.TextField', [], {'blank': 'True'}),
            'metadatatable': ('django.db.models.fields.related.OneToOneField', [], {'blank': 'True', 'related_name': "'provider'", 'unique': 'True', 'null': 'True', 'to': "orm['data_manager.Metadata']"}),
            'row_entry_date': ('django.db.models.fields.DateTimeField', [], {'default': 'datetime.datetime.now'}),
            'row_update_date': ('django.db.models.fields.DateTimeField', [], {'null': 'True', 'blank': 'True'}),
            'source_link': ('django.db.models.fields.CharField', [], {'max_length': '500', 'blank': 'True'}),
            'source_name': ('django.db.models.fields.CharField', [], {'max_length': '200', 'blank': 'True'}),
            'thumbnail_source': ('django.db.models.fields.CharField', [], {'max_length': '500', 'blank': 'True'}),
            'use_constraints': ('django.db.models.fields.CharField', [], {'max_length': '2000', 'blank': 'True'})
        },
        'data_manager.theme': {
            'Meta': {'object_name': 'Theme'},
            'description': ('django.db.models.fields.TextField', [], {'null': 'True', 'blank': 'True'}),
            'display_name': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'factsheet_link': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'factsheet_thumb': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'feature_excerpt': ('django.db.models.fields.TextField', [], {'null': 'True', 'blank': 'True'}),
            'feature_image': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'feature_link': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'header_attrib': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'header_image': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'overview': ('django.db.models.fields.TextField', [], {'null': 'True', 'blank': 'True'}),
            'thumbnail': ('django.db.models.fields.URLField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'})
        },
        'data_manager.topic': {
            'Meta': {'object_name': 'Topic'},
            'description': ('django.db.models.fields.TextField', [], {'null': 'True', 'blank': 'True'}),
            'display_name': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'factsheet_link': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'factsheet_thumb': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'feature_excerpt': ('django.db.models.fields.TextField', [], {'null': 'True', 'blank': 'True'}),
            'feature_image': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'feature_link': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'header_attrib': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'header_image': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'overview': ('django.db.models.fields.TextField', [], {'null': 'True', 'blank': 'True'}),
            'thumbnail': ('django.db.models.fields.URLField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'})
        }
    }

    complete_apps = ['data_manager']