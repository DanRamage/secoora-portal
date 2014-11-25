from django.core.management.base import BaseCommand, CommandError
from django.contrib.gis.geos import GEOSGeometry
from optparse import make_option
from data_manager.models import *
from django.db.models import Q
import logging
from settings_local import *
from django.contrib.gis.db import models

logger = logging.getLogger(__name__)


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


class Command(BaseCommand):
  option_list = BaseCommand.option_list  + (
      make_option("--HarvestStagingCSW", dest="harvestStaging", action='store_true', default='false'),
  )

  def handle(self, *args, **options):
    logger.info("Start Logging: %s" % (__name__))

    if options['harvestStaging'] == True:
      harvest_from_staging()

    logger.info("End Logging: %s" % (__name__))


