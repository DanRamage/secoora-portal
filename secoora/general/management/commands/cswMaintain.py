from django.core.management.base import BaseCommand, CommandError
from django.contrib.gis.geos import GEOSGeometry
from optparse import make_option
from data_manager.models import *
import logging
from settings_local import *
from django.contrib.gis.db import models

logger = logging.getLogger(__name__)


def harvest_from_staging():
  bounding_poly = GEOSGeometry('POLYGON((-90 24.5, -90 37.2, -60.5 37.2, -60.5 24.5, -90 24.5))')
  try:
    recs = pycsw_records.objects.using('pycsw_staging').filter(wkb_geometry__within=bounding_poly)

    for rec in recs:
      if logger:
        logger.debug(rec.title)
  except Exception,e:
    if logger:
      logger.exception(e)
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


