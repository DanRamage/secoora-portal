function csw_search_model() {
  var self = this;

  self.showResults = ko.observable(false);
  self.results = ko.observableArray([]);
  self.resultsCount = ko.observable(0);
  self.errorMsg = ko.observable("");
  self.mapView = null;

  self.init_map = function(html_map_id)
  {
    self.mapView = catalog_search_map();
    self.mapView.initialize(null, "/secoora_portal/proxy/rest_query/?url=http://129.252.139.68:8000", app.viewModel.process_results);
    self.mapView.olMap.render('map');
    self.mapView.olMap.setCenter(new OpenLayers.LonLat(-73.852, 31.933).transform(
                          new OpenLayers.Projection("EPSG:4326"),
                          new OpenLayers.Projection("EPSG:102113")), 6);

  }

  self.process_results = function(csw_results, textStatus, jqXHR) {
    self.results.removeAll();
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
              $.each(search_result.children, function (k, metadata_part) {
                if (metadata_part.tag == 'dc:title') {
                  result.title = metadata_part.text;
                }
                else if (metadata_part.tag == 'dc:subject') {
                  result.keywords.push(metadata_part.text);
                }
                else if (metadata_part.tag == 'dct:abstract') {
                  result.abstract = metadata_part.text;
                }
                else if (metadata_part.tag == "ows:BoundingBox") {
                  for (var cnt = 0; cnt < metadata_part.children.length; cnt++) {
                    if (result.bounding_box.length) {
                      result.bounding_box += " ";
                    }
                    result.bounding_box += metadata_part.children[cnt].text;
                  }
                }
              });
              self.results.push(result);
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