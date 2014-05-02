from django.core.management.base import BaseCommand, CommandError
from optparse import make_option
from data_manager.models import *
from owslib.wms import WebMapService
from urlparse import urlparse
from datetime import datetime,timedelta
from urllib2 import HTTPError
import logging

logger = logging.getLogger(__name__)


metadataList = ['abstract',
                'keywords',
                'boundingBox',
                'dataUrls']

def buildTimeSteps(**kwargs):
  logger.info("Begin buildTimeSteps")
  for layer in Layer.objects.all().order_by('name'):
    print "Layer: %s start processing" % (layer.name)
    #Make sure we've got a metadata object, and that metadata object has a getCapaabilities link, and
    #we've got a links entry.
    if(layer.metadatatable and
      layer.metadatatable.getcap_link and
      layer.metadatatable.links is not None ):
      #print "%s getCap: %s" % (layer.name, layer.metadatatable.getcap_link)
      #THe get capabilities link is the full link with the POST params. For OWSLib, we need to get
      #just the base url.
      urlParse = urlparse(layer.metadatatable.getcap_link)
      baseUrl = "%s://%s%s" % (urlParse.scheme, urlParse.netloc, urlParse.path)
      logger.debug("Base url: %s" % (baseUrl))
      try:
        wms = WebMapService(baseUrl)
      except HTTPError,e:
        logger.exception(e)
      else:
        linksParts = layer.metadatatable.links.split(',')
        logger.debug("Name: %s" % (linksParts[0]))
        if wms[linksParts[0]].timepositions is not None:
          timeSaveList = []
          #We want to validate we have real dates and not garbage dates or empty data as can be
          #seen in Ruoyings data.
          for time in wms[linksParts[0]].timepositions:
            #print "Time: %s" % (time)
            try:
              timeObj = datetime.strptime(time, "%Y-%m-%dT%H:%M:%SZ")
              timeSaveList.append(time)
            except Exception,e:
              try:
                timeObj = datetime.strptime(time, "%Y-%m-%dT%H:%M:%S.%fZ")
                timeSaveList.append(time)
              except Exception,e:
                logger.error("Layer: %s Invalid date: %s" % (layer.name, time))

          layer.metadatatable.time_steps = ','.join(timeSaveList)
          layer.metadatatable.save()
          del timeSaveList[:]

        else:
          logger.debug("No time records.")

    logger.debug("Layer: %s finished processing" % (layer.name))

  logger.info("End buildTimeSteps")

def updateMetaData(**kwargs):

  logger.info("Begin updateMetaData")
  for layer in Layer.objects.all().order_by('name'):
    logger.debug("Layer: %s start processing" % (layer.name))
    #Make sure we've got a metadata object, and that metadata object has a getCapaabilities link, and
    #we've got a links entry.
    if(layer.metadatatable and
      layer.metadatatable.getcap_link and
      layer.metadatatable.links is not None ):
      #print "%s getCap: %s" % (layer.name, layer.metadatatable.getcap_link)
      #THe get capabilities link is the full link with the POST params. For OWSLib, we need to get
      #just the base url.
      urlParse = urlparse(layer.metadatatable.getcap_link)
      baseUrl = "%s://%s%s" % (urlParse.scheme, urlParse.netloc, urlParse.path)
      logger.debug("Base url: %s" % (baseUrl))
      try:
        wms = WebMapService(baseUrl)
      except HTTPError,e:
        logger.exception(e)
      else:
        linksParts = layer.metadatatable.links.split(',')
        #Verify the layer we have is still in the source.
        if linksParts[0] in wms.contents:
          obs = wms[linksParts[0]]
          logger.debug("Name: %s" % (linksParts[0]))
          if hasattr(obs, 'abstract') and obs.abstract is not None:
            logger.debug("Adding abstract: %s" % (obs.abstract))
            layer.metadatatable.abstract = wms[linksParts[0]].abstract
          if hasattr(obs, 'boundingBox'):
            logger.debug("Adding boundingBox")
            layer.metadatatable.bbox_extent = obs.boundingBox
            layer.metadatatable.wkt_geometry = "POLYGON((%f %f, %f %f))" % (obs.boundingBox[0],obs.boundingBox[1], obs.boundingBox[2], obs.boundingBox[3])
          layer.metadatatable.save()
        else:
          logger.debug("Name: %s no longer exists." % (linksParts[0]))
    logger.info("Layer: %s end processing" % (layer.name))

  logger.info("End updateMetaData")

def buildKeywordsAny():
  print "Start buildKeywordsAny"
  for layer in Layer.objects.all().order_by('name'):
    print "Layer: %s" % (layer.name)
    keywords_any = []
    if(layer.metadatatable):
      if(len(layer.metadatatable.abstract)):
        layer.metadatatable.anytext = '%s;' % (layer.metadatatable.abstract)
      for obsKeyWord in layer.metadatatable.keywords_obs.all():
        keywords_any.append(obsKeyWord.display_name)
      if(len(keywords_any)):
        layer.metadatatable.anytext += ';'.join(keywords_any)
        print layer.metadatatable.anytext
      layer.metadatatable.save()
    else:
      print "No metadata record found."

  print "End buildKeywordsAny"

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

