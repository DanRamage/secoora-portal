
from django.core.management.base import BaseCommand, CommandError
from optparse import make_option
import simplejson as json
import traceback
from data_manager.models import *


def buildObsEntries(filename, modelData):
  try:
    obsTypeFile = open(filename, 'rU')
  except IOError,e:
    traceback.print_exc(e)
  else:
    pk = 1
    for obs in obsTypeFile:
      name = obs.strip()
      modelData.append(
        {
          "pk": pk,
          "model": "data_manager.observation",
          "fields": {
          'name' : name,
          'display_name' : name.replace('_', ' ').title()
          }
        }
      )
      pk += 1
    obsTypeFile.close()

def buildKeywordsAny():
  print "Building Keywords Any"
  for layer in Layer.objects.all().order_by('name'):
    print "Layer: %s" % (layer.name)
    keywords_any = []
    if(layer.metadatatable):
      for obsKeyWord in layer.metadatatable.keywords_obs.all():
        keywords_any.append(obsKeyWord.display_name)
      if(len(keywords_any)):
        layer.metadatatable.anytext = ';'.join(keywords_any)
        print layer.metadatatable.anytext
        layer.metadatatable.save()
    else:
      print "No metadata record found."

#def main():
class Command(BaseCommand):
  '''
  parser = optparse.OptionParser()
  parser.add_option("-o", "--ObsTypeFile", dest="obsTypeFile",
                    help="" )
  parser.add_option("-i", "--InitialJSONFile", dest="initialJsonFile",
                    help="" )
  parser.add_option('b', '--BuildKeywordsAny', dest="buildKeywordsAny")
  (options, args) = parser.parse_args()
  '''
  option_list = BaseCommand.option_list  + (
      make_option("--ObsTypeFile", dest="obsTypeFile"),
      make_option("--InitialJSONFile", dest="initialJsonFile"),
      make_option("--BuildKeywordsAny", dest="buildKeywordsAny", action='store_true', default='false'), )

  def handle(self, *args, **options):

    modelData = []
    if(options['obsTypeFile']):
      buildObsEntries(options['obsTypeFile'], modelData)
    if(options['buildKeywordsAny']):
      buildKeywordsAny()

    if(len(modelData)):
      try:
        outFile = open(options['initialJsonFile'], 'w')
      except IOError,e:
        traceback.print_exc(e)
      else:
        outFile.write(json.dumps(modelData, sort_keys=True, indent=4))
        outFile.close()

'''
if __name__ == '__main__':
  main()
'''