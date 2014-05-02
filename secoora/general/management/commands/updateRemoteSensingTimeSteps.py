import sys
sys.path.append('../../../../xeniatools')

from django.core.management.base import BaseCommand, CommandError
from optparse import make_option
from data_manager.models import *
import logging

logger = logging.getLogger(__name__)

from xeniaSQLAlchemy import timestamp_lkp,product_type



class Command(BaseCommand):
  option_list = BaseCommand.option_list  + (
      make_option("--UpdateTimeSteps", dest="updateTimeSteps", action='store_true', default='false'),
      make_option("--UpdateMetadata", dest="updateMetadata", action='store_true', default='false'),
      make_option("--BuildKeywordsAny", dest="buildKeywordsAny", action='store_true', default='false'), )

  def handle(self, *args, **options):
    logger.info("Start Logging: %s" % (__name__))

    if(options['updateTimeSteps'] == True):
      buildTimeSteps()
    if(options['updateMetadata'] == True):
      updateMetaData()

    logger.info("End Logging: %s" % (__name__))
