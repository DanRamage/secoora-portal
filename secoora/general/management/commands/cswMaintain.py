from django.core.management.base import BaseCommand, CommandError
from django.contrib.gis.geos import GEOSGeometry
from optparse import make_option
from data_manager.models import *
from django.db.models import Q
import logging
from settings_local import *
from django.contrib.gis.db import models

logger = logging.getLogger(__name__)

PYCSW_CFG_FILE = '/var/www/pycsw/default.cfg'
WAF_DIR = '/usr/local/userapps/secoora-portal/metadata/pycsw/waf'
def harvest_from_staging():
  if logger:
    logger.debug("Starting harvest_from_staging")
  bounding_poly = GEOSGeometry('POLYGON((-90 24.5, -90 37.2, -60.5 37.2, -60.5 24.5, -90 24.5))')
  try:
    #Get rid of the records outside the SECOORA footprint(little bit bigger).
    recs = pycsw_records.objects.using('pycsw_staging').filter(~Q(wkb_geometry__within=bounding_poly))
    for rec in recs:
      if logger:
        logger.debug("Deleting: %s" % (rec.title))
      rec.delete()
  except Exception,e:
    if logger:
      logger.exception(e)
  if logger:
    logger.debug("Finished harvest_from_staging")
  return

def update_metadata(ini_file):
  import os
  import ConfigParser
  from shutil import copyfile
  import shlex
  import subprocess

  if logger:
    logger.debug("Starting update_metadata")

  #Copy metadata of interest into a directory that pycsw will ingest from.
  configFile = ConfigParser.RawConfigParser()
  configFile.read(ini_file)
  #GEt the list of data providers
  try:
    providers = configFile.get('data_providers', 'metadata_info').split(',')
  except ConfigParser.Error, e:
    if logger:
      logger.exception(e)
  else:
    #Go through each provider and copy the metadata files of interest into the directory
    #pycsw will process from.
    waf_dir_list = []
    for provider in providers:
      if logger:
        logger.debug("Provider: %s" % (provider))
      try:
        init_dir = configFile.get(provider, 'initial_dir')
        dest_dir = configFile.get(provider, 'destination_dir')
        file_list = configFile.get(provider, 'file_list').split(',')
      except ConfigParser,e:
        if logger:
          logger.exception(e)
      else:
        #Check if dest dir exists, if not create it.
        if not os.path.exists(dest_dir):
          if logger:
            logger.debug("Creating directory: %s" % (dest_dir))
          os.makedirs(dest_dir)

        #Delete the previous files in the WAF
        """
        for file in os.listdir(dest_dir):
          file_path = os.path.join(dest_dir, file)
          if logger:
            logger.debug("Deleteing file: %s" % (file_path))
          if os.path.isfile(file_path):
              os.unlink(file_path)
        """
        for file in file_list:
          src_file_path = "%s%s" % (init_dir, file)
          dest_file_path= "%s%s" % (dest_dir, file)
          if logger:
            logger.debug("Copying file: %s from %s to %s" % (file, src_file_path, dest_file_path))
          try:
            copyfile(src_file_path,dest_file_path)
          except IOError,e:
            if logger:
              logger.error("Failed to copy file: %s" % (file))
              logger.exception(e)

  #Currently pycsw has no method to update the records, so we clear out the database
  #first before loading the new records.
  try:
    if logger:
      logger.debug("Deleting records in pycsw")
    pycsw_records.objects.using('pycsw_test').all().delete()
  except Exception, e:
    if logger:
      logger.exception(e)
  #Now let's update the catalog
  cmd = "/var/www/pycsw/bin/pycsw-admin.py -c load_records -p %s -f %s -r" % (WAF_DIR, PYCSW_CFG_FILE)
  if logger:
    logger.debug("Executing pycsw cmd: %s" % (cmd))

  args = shlex.split(cmd)
  try:
      subprocess.check_call(args)
  except subprocess.CalledProcessError as error:
    if logger:
      logger.exception(e)

  if logger:
    logger.debug("Finished update_metadata")

  return

class Command(BaseCommand):
  option_list = BaseCommand.option_list  + (
      make_option("--HarvestStagingCSW", dest="harvestStaging", action='store_true', default='false'),
      make_option("--UpdateMetadata", dest="updateMetadata", action='store_true', default='false'),
      make_option("--MetadataIniFile", dest="metadataIniFile"),
  )

  def handle(self, *args, **options):
    logger.info("Start Logging: %s" % (__name__))

    if options['harvestStaging'] == True:
      harvest_from_staging()
    if options['updateMetadata'] == True:
      update_metadata(options['metadataIniFile'])

    logger.info("End Logging: %s" % (__name__))


