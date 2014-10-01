function csw_search_model() {
  var self = this;

  self.showResults = ko.observable(false);
  self.results = ko.observableArray([]);
  self.resultsCount = ko.observable(0);
  self.errorMsg = ko.observable("");

  self.process_results = function(csw_results, textStatus, jqXHR) {
    if('tag' in csw_results)
    {
      //Verify the result is a GetRecordsResponse.
      if(csw_results['tag'] == 'csw:GetRecordsResponse')
      {
        /*pyCSW returns results with 2 elements in the children array.
        The first is csw:SearchStatus which seems to only contain a time,
        and then the csw:SearchResults which is what we want.
        The structure of the JSON is:
        [attributes]
          -version
          -xsi:schemaLocation
        tag
        [children]
          -[0]
            -[attributes]
            -tag
          -[1]
            -[attributes] - items such as number of results returned.
            -tag
            -[children]  -THese are the data sets

        */
        $.each(csw_results.children, function(i, child)
        {
          if(child['tag'] == 'csw:SearchResults')
          {
            self.resultsCount(child.attributes.numberOfRecordsReturned);
            //self.results(child.children);
            $.each(child.children, function(j, search_result)
            {
              var result = {
                'title': "",
                'abstract': "",
                'keywords': [],
                'bounding_box': ""
              }
              $.each(search_result.children, function(k, metadata_part)
              {
                if(metadata_part.tag == 'dc:title')
                {
                  result.tite = metadata_part.text;
                }
                else if(metadata_part.tag == 'dc.subject')
                {
                  result.keywords.append(metadata_part.text);
                }
                else if(metadata_part.tag == 'dc:abstract')
                {
                  result.abstract = metadata_part.text;
                }
                else if(metadata_part.tag == "ows:BoundingBox")
                {
                  for(var cnt=0; cnt < metadata_part.children; cnt++)
                  {
                    if(bounding_box.length)
                    {
                      bounding_box += " ";
                    }
                    bounding_box += metadata_part.children[i].text;
                  }
                }
              });
              self.results().push(result);
            });
          }
        });
      }
    }
    else
    {
      self.resultsCount(0);
      self.errorMsg("An error occured while performing the search. Please retry.")
    }
    self.showResults(true);
  }
}