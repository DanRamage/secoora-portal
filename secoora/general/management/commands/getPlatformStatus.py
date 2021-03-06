import sys
sys.path.append('/usr/local/userapps/secoora-portal/xeniatools')

import ConfigParser
import simplejson
import logging.config

from django.core.management.base import BaseCommand, CommandError
from optparse import make_option
from data_manager.models import *
from settings_local import *

from xeniaSQLAlchemy import xeniaAlchemy,platform_status


logger = logging.getLogger(__name__)

def update_status():
  if logger:
    logger.debug("Starting update_status.")

  xeniaDb = xeniaAlchemy(logger=logger)

  if xeniaDb.connectDB(databaseType='postgres',
                        dbUser=XENIA_USER,
                        dbPwd=XENIA_PWD,
                        dbHost=XENIA_HOST,
                        dbName=XENIA_DB):
    if logger:
      logger.debug("Connected to xenia DB")

    for layer in Layer.objects.filter(status_platform_handle__isnull=False)\
                  .all().order_by('name'):
      if logger:
        logger.debug("Layer: %s status platform: %s" % (layer.name, layer.status_platform_handle))
      recs = xeniaDb.session.query(platform_status)\
          .filter(platform_status.platform_handle == layer.status_platform_handle)\
      .all()
      layer_has_status = False
      for status_rec in recs:
        if logger:
          logger.debug("Platform: %s Begin Data: %s Reason: %s" %\
                       (status_rec.platform_handle,
                        status_rec.begin_date,
                        status_rec.reason))
          if status_rec.reason is None or len(status_rec.reason) == 0:
            layer.status_field = "Start of Outage: %s Service temporarily unavailable." % (status_rec.begin_date.strftime("%Y-%m-%d %H:%M"))
          else:
            layer.status_field = "Start of Outage: %s %s" % (status_rec.begin_date.strftime("%Y-%m-%d %H:%M"),status_rec.reason)
          layer.save()
          layer_has_status = True
      if not layer_has_status:
        #Check to see if the layer has an older status, if it does, null it out.
        if layer.status_field is not None and len(layer.status_field):
          if logger:
            logger.debug("Clearing previous status.")
          layer.status_field = None
          layer.save()

    xeniaDb.disconnect()
  else:
    if logger:
      logger.error("Failed to connect to xenia DB")

  if logger:
    logger.debug("Finished update_status.")
  return

class Command(BaseCommand):
  """
  option_list = BaseCommand.option_list  + (
      make_option("--ConfigFile", dest="config_file"),
   )
  """
  def handle(self, *args, **options):
    logger.info("Start Logging: %s" % (__name__))

    update_status()

    logger.info("End Logging: %s" % (__name__))


