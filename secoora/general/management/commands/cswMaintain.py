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
    providers = configFile.get('data_providers', 'provider_list').split(',')
    #Go through each provider and copy the metadata files of interest into the directory
    #pycsw will process from.
    for provider in providers:
      if logger:
        logger.debug("Provider: %s" % (provider))
      init_dir = configFile.get(provider, 'initial_dir')
      dest_dir = configFile.get(provider, 'destination_dir')
      file_list = configFile.get(provider, 'file_list').split(',')
      for file in file_list:
        src_file_path = "%s%s" % (init_dir, file)
        dest_file_path= "%s%s" % (dest_dir, file)
        if logger:
          logger.debug("Copying file: %s to %s" % (src_file_path, dest_file_path))
        copyfile(src_file_path,dest_file_path)
  except ConfigParser.Error, e:
    if logger:
      logger.exception(e)
  except Exception, e:
    if logger:
      logger.exception(e)
  else:
    #Now let's update the catalog
    cmd = "/usr/local/bin/pycsw-admin.py -c load_records -p %s -f %s" % (dest_dir, PYCSW_CFG_FILE)
    if logger:
      logger.debug("Executing pycsw cmd: %s" (cmd))
    """
    args = shlex.split(cmd)
    try:
        subprocess.check_call(args)
    except subprocess.CalledProcessError as error:
      if logger:
        logger.exception(e)
    """
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


