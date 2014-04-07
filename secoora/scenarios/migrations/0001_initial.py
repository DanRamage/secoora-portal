# encoding: utf-8
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models

class Migration(SchemaMigration):

    def forwards(self, orm):
        
        # Adding model 'Scenario'
        db.create_table('scenarios_scenario', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('user', self.gf('django.db.models.fields.related.ForeignKey')(related_name='scenarios_scenario_related', to=orm['auth.User'])),
            ('name', self.gf('django.db.models.fields.CharField')(max_length='255')),
            ('date_created', self.gf('django.db.models.fields.DateTimeField')(auto_now_add=True, blank=True)),
            ('date_modified', self.gf('django.db.models.fields.DateTimeField')(auto_now=True, blank=True)),
            ('content_type', self.gf('django.db.models.fields.related.ForeignKey')(blank=True, related_name='scenarios_scenario_related', null=True, to=orm['contenttypes.ContentType'])),
            ('object_id', self.gf('django.db.models.fields.PositiveIntegerField')(null=True, blank=True)),
            ('input_dist_shore', self.gf('django.db.models.fields.FloatField')()),
            ('input_dist_port', self.gf('django.db.models.fields.FloatField')()),
            ('input_min_depth', self.gf('django.db.models.fields.FloatField')()),
            ('input_max_depth', self.gf('django.db.models.fields.FloatField')()),
            ('description', self.gf('django.db.models.fields.TextField')(null=True, blank=True)),
            ('output_geom', self.gf('django.contrib.gis.db.models.fields.MultiPolygonField')(srid=99996, null=True, blank=True)),
            ('output_mapcalc', self.gf('django.db.models.fields.CharField')(max_length=360, null=True, blank=True)),
            ('output_area', self.gf('django.db.models.fields.FloatField')(null=True, blank=True)),
            ('geometry_final', self.gf('django.contrib.gis.db.models.fields.MultiPolygonField')(srid=99996, null=True, blank=True)),
        ))
        db.send_create_signal('scenarios', ['Scenario'])

        # Adding M2M table for field sharing_groups on 'Scenario'
        db.create_table('scenarios_scenario_sharing_groups', (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('scenario', models.ForeignKey(orm['scenarios.scenario'], null=False)),
            ('group', models.ForeignKey(orm['auth.group'], null=False))
        ))
        db.create_unique('scenarios_scenario_sharing_groups', ['scenario_id', 'group_id'])

        # Adding M2M table for field input_objectives on 'Scenario'
        db.create_table('scenarios_scenario_input_objectives', (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('scenario', models.ForeignKey(orm['scenarios.scenario'], null=False)),
            ('objective', models.ForeignKey(orm['scenarios.objective'], null=False))
        ))
        db.create_unique('scenarios_scenario_input_objectives', ['scenario_id', 'objective_id'])

        # Adding M2M table for field input_parameters on 'Scenario'
        db.create_table('scenarios_scenario_input_parameters', (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('scenario', models.ForeignKey(orm['scenarios.scenario'], null=False)),
            ('parameter', models.ForeignKey(orm['scenarios.parameter'], null=False))
        ))
        db.create_unique('scenarios_scenario_input_parameters', ['scenario_id', 'parameter_id'])

        # Adding model 'Objective'
        db.create_table('scenarios_objective', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(max_length=70)),
            ('color', self.gf('django.db.models.fields.CharField')(default='778B1A55', max_length=8)),
        ))
        db.send_create_signal('scenarios', ['Objective'])

        # Adding model 'Parameter'
        db.create_table('scenarios_parameter', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(max_length=70)),
        ))
        db.send_create_signal('scenarios', ['Parameter'])

        # Adding M2M table for field objectives on 'Parameter'
        db.create_table('scenarios_parameter_objectives', (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('parameter', models.ForeignKey(orm['scenarios.parameter'], null=False)),
            ('objective', models.ForeignKey(orm['scenarios.objective'], null=False))
        ))
        db.create_unique('scenarios_parameter_objectives', ['parameter_id', 'objective_id'])


    def backwards(self, orm):
        
        # Deleting model 'Scenario'
        db.delete_table('scenarios_scenario')

        # Removing M2M table for field sharing_groups on 'Scenario'
        db.delete_table('scenarios_scenario_sharing_groups')

        # Removing M2M table for field input_objectives on 'Scenario'
        db.delete_table('scenarios_scenario_input_objectives')

        # Removing M2M table for field input_parameters on 'Scenario'
        db.delete_table('scenarios_scenario_input_parameters')

        # Deleting model 'Objective'
        db.delete_table('scenarios_objective')

        # Deleting model 'Parameter'
        db.delete_table('scenarios_parameter')

        # Removing M2M table for field objectives on 'Parameter'
        db.delete_table('scenarios_parameter_objectives')


    models = {
        'auth.group': {
            'Meta': {'object_name': 'Group'},
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'unique': 'True', 'max_length': '80'}),
            'permissions': ('django.db.models.fields.related.ManyToManyField', [], {'to': "orm['auth.Permission']", 'symmetrical': 'False', 'blank': 'True'})
        },
        'auth.permission': {
            'Meta': {'ordering': "('content_type__app_label', 'content_type__model', 'codename')", 'unique_together': "(('content_type', 'codename'),)", 'object_name': 'Permission'},
            'codename': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'content_type': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['contenttypes.ContentType']"}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '50'})
        },
        'auth.user': {
            'Meta': {'object_name': 'User'},
            'date_joined': ('django.db.models.fields.DateTimeField', [], {'default': 'datetime.datetime(2012, 4, 6, 10, 46, 48, 439000)'}),
            'email': ('django.db.models.fields.EmailField', [], {'max_length': '75', 'blank': 'True'}),
            'first_name': ('django.db.models.fields.CharField', [], {'max_length': '30', 'blank': 'True'}),
            'groups': ('django.db.models.fields.related.ManyToManyField', [], {'to': "orm['auth.Group']", 'symmetrical': 'False', 'blank': 'True'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'is_active': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'is_staff': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'is_superuser': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'last_login': ('django.db.models.fields.DateTimeField', [], {'default': 'datetime.datetime(2012, 4, 6, 10, 46, 48, 439000)'}),
            'last_name': ('django.db.models.fields.CharField', [], {'max_length': '30', 'blank': 'True'}),
            'password': ('django.db.models.fields.CharField', [], {'max_length': '128'}),
            'user_permissions': ('django.db.models.fields.related.ManyToManyField', [], {'to': "orm['auth.Permission']", 'symmetrical': 'False', 'blank': 'True'}),
            'username': ('django.db.models.fields.CharField', [], {'unique': 'True', 'max_length': '30'})
        },
        'contenttypes.contenttype': {
            'Meta': {'ordering': "('name',)", 'unique_together': "(('app_label', 'model'),)", 'object_name': 'ContentType', 'db_table': "'django_content_type'"},
            'app_label': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'model': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '100'})
        },
        'scenarios.objective': {
            'Meta': {'object_name': 'Objective'},
            'color': ('django.db.models.fields.CharField', [], {'default': "'778B1A55'", 'max_length': '8'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '70'})
        },
        'scenarios.parameter': {
            'Meta': {'object_name': 'Parameter'},
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '70'}),
            'objectives': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'to': "orm['scenarios.Objective']", 'null': 'True', 'blank': 'True'})
        },
        'scenarios.scenario': {
            'Meta': {'object_name': 'Scenario'},
            'content_type': ('django.db.models.fields.related.ForeignKey', [], {'blank': 'True', 'related_name': "'scenarios_scenario_related'", 'null': 'True', 'to': "orm['contenttypes.ContentType']"}),
            'date_created': ('django.db.models.fields.DateTimeField', [], {'auto_now_add': 'True', 'blank': 'True'}),
            'date_modified': ('django.db.models.fields.DateTimeField', [], {'auto_now': 'True', 'blank': 'True'}),
            'description': ('django.db.models.fields.TextField', [], {'null': 'True', 'blank': 'True'}),
            'geometry_final': ('django.contrib.gis.db.models.fields.MultiPolygonField', [], {'srid': '99996', 'null': 'True', 'blank': 'True'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'input_dist_port': ('django.db.models.fields.FloatField', [], {}),
            'input_dist_shore': ('django.db.models.fields.FloatField', [], {}),
            'input_max_depth': ('django.db.models.fields.FloatField', [], {}),
            'input_min_depth': ('django.db.models.fields.FloatField', [], {}),
            'input_objectives': ('django.db.models.fields.related.ManyToManyField', [], {'to': "orm['scenarios.Objective']", 'symmetrical': 'False'}),
            'input_parameters': ('django.db.models.fields.related.ManyToManyField', [], {'to': "orm['scenarios.Parameter']", 'symmetrical': 'False'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': "'255'"}),
            'object_id': ('django.db.models.fields.PositiveIntegerField', [], {'null': 'True', 'blank': 'True'}),
            'output_area': ('django.db.models.fields.FloatField', [], {'null': 'True', 'blank': 'True'}),
            'output_geom': ('django.contrib.gis.db.models.fields.MultiPolygonField', [], {'srid': '99996', 'null': 'True', 'blank': 'True'}),
            'output_mapcalc': ('django.db.models.fields.CharField', [], {'max_length': '360', 'null': 'True', 'blank': 'True'}),
            'sharing_groups': ('django.db.models.fields.related.ManyToManyField', [], {'blank': 'True', 'related_name': "'scenarios_scenario_related'", 'null': 'True', 'symmetrical': 'False', 'to': "orm['auth.Group']"}),
            'user': ('django.db.models.fields.related.ForeignKey', [], {'related_name': "'scenarios_scenario_related'", 'to': "orm['auth.User']"})
        }
    }

    complete_apps = ['scenarios']
