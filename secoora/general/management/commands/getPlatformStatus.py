import sys
sys.path.append('/usr/local/userapps/secoora-portal/xeniatools')

import ConfigParser
import simplejson
import logging.config

from django.core.management.base import BaseCommand, CommandError
from optparse import make_option
from data_manager.models import *

from xeniaSQLAlchemy import xeniaAlchemy,platform_status


logger = logging.getLogger(__name__)

def update_status():

  xeniaDb = xeniaAlchemy()
  if xeniaDb.connectDB(databaseType='postgres',
                        dbUser=XENIA_USER,
                        dbPwd=XENIA_PWD,
                        dbHost=XENIA_HOST,
                        dbName=XENIA_DB):
    if logger:
      logger.debug("Connected to xenia DB")

    platform_handle = "uf.uf_eastcoast.service"
    recs = xeniaDb.session.query(platform_status)\
        .filter(platform_status.platform_handle == platform_handle)\
    .all()
    for status_rec in recs:
      if logger:
        logger.debug("Platform: %s Begin Data: %s Reason: %s" %\
                     (status_rec.platform_handle,
                      status_rec.begin_date,
                      status_rec.reason))
  else:
    if logger:
      logger.error("Failed to connect to xenia DB")

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


