
import sys
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
  print "Building Keywords Any\n"
  for layer in Layer.objects.all().order_by('name'):
    print "Layer: name\n"

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
  def handle(self, *args, **options):
    options = BaseCommand.option_list  + (
        make_option("--ObsTypeFile", dest="obsTypeFile"),
        make_option("--InitialJSONFile", dest="initialJsonFile"),
        make_option("--BuildKeywordsAny", dest="buildKeywordsAny") )

    modelData = []
    if(options.obsTypeFile):
      buildObsEntries(options.obsTypeFile, modelData)
    if(options.buildKeywordsAny):
      buildKeywordsAny()

    try:
      outFile = open(options.initialJsonFile, 'w')
    except IOError,e:
      traceback.print_exc(e)
    else:
      outFile.write(json.dumps(modelData, sort_keys=True, indent=4))
      outFile.close()

'''
if __name__ == '__main__':
  main()
'''