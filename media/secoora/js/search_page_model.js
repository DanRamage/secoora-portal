function error_popup_view() {
  var self = this;

  self.popup_title = ko.observable("");
  self.popup_error_message = ko.observable("");
};

function search_page_model() {
  var self = this;

  self.service_display_name = {
    'http': {'name': 'HTTP',
             'help_text': 'A URL to the data source.'},
    'OPeNDAP:OPeNDAP': {'name' : 'OPeNDAP',
                        'help_text': 'Open-source Project for a Network Data Access Protocol", is a data transport architecture and protocol widely used by earth scientists.'},
    'OGC:WMS': {'name': 'WMS',
                'help_text': 'Web Map Service (WMS) is a standard protocol for serving georeferenced map images over the Internet that are generated by a map server using data from a GIS database.'},
    'UNIDATA:NCSS': {'name': 'NCSS',
                     'help_text': 'The NetCDF Subset Service is a web service for subsetting CDM scientific datasets.'},
    'file': {'name': 'File',
             'help_text': 'A file for downloading.'
             },
    'OGC:SOS': {'name': 'SOS',
                'help_text': 'The Sensor Observation Service is a web service to query real-time sensor data and sensor data time series and is part of the Sensor Web.'},
    'OGC:WCS': {'name': 'WCS',
                'help_text': 'Provides access to coverage data in forms that are useful for client-side rendering, as input into scientific models, and for other clients.'},
    'WWW:LINK': {'name': 'Link',
                 'help_text': 'A web image thumbnail URL.'}
  };

  self.showResults = ko.observable(false);
  self.results = ko.observableArray([]);
  self.resultsCount = ko.observable(0);
  self.errorMsg = ko.observable("");
  self.mapView = null;
  self.user_keyword = ko.observable("");
  self.error_popup_view = null;

  self.initialize = function (html_map_id, catalog_url, word_cloud_id, word_cloud_url) {
    self.mapView = catalog_search_map();
    //self.mapView.initialize(null, "/secoora_portal/proxy/rest_query/?url=http://129.252.139.68:8000", app.viewModel.process_results);
    //self.mapView.initialize(null, "/secoora_portal/proxy/rest_query/?url=http://129.252.37.192:8000", app.viewModel.process_results);
    self.mapView.initialize(null, catalog_url, app.viewModel.process_results);

    self.mapView.olMap.render(html_map_id);

    self.mapView.olMap.setCenter(new OpenLayers.LonLat(-79.27, 33.01).transform(
      new OpenLayers.Projection("EPSG:4326"),
      new OpenLayers.Projection("EPSG:102113")), 5);

    $.fn.tagcloud.defaults = {
      size: {start: 14, end: 18, unit: 'pt'},
      color: {start: '#cde', end: '#f52'}
    };

    //Pull in the menu and the footer from the HTML files. We do this to try and avoid getting mired in CF crap.
    $("#" + word_cloud_id).load(word_cloud_url,
                          function(){
                            $('#tagcloud a').tagcloud();
                          });

    $('#date_range .input-daterange').datepicker({
          format: "yyyy-mm-dd",
          autoclose: true
        });
    // I can't figure out any other way to reset the data in the control which remains
    // even when you reload the page.
    //$("#start_date").val("");
    //$("#end_date").val("");


  }
  self.backToCatalog = function()
  {
    self.showResults(false);
  }
  self.keyword_search_click = function () {
    self.mapView.keywordSearch(self.user_keyword().toLowerCase());
  }
  self.temporal_search_click = function()
  {
    var start_string = $("#start_date").val();
    var end_string = $("#end_date").val();
    var start_date = $("#start_date").datepicker('getDate');
    var end_date = $("#end_date").datepicker('getDate');
    if(isNaN(start_date.valueOf()))
    {
      if(self.error_popup_view == null)
      {
        self.error_popup_view = new error_popup_view();
      }
      self.error_popup_view.popup_title("Date Error");
      self.error_popup_view.popup_error_message("No start date provided.");
    }

    if(!isNaN(end_date) && start_date > end_date)
    {
      if(self.error_popup_view == null)
      {
        self.error_popup_view = new error_popup_view();
      }
      self.error_popup_view.popup_title("Date Error");
      self.error_popup_view.popup_error_message("The start is later than the end date.");
      $('#error_popup').show();
    }
    self.mapView.temporalSearch(start_string, end_string);
  }
  self.process_results = function (csw_results, textStatus, jqXHR) {
    self.results.removeAll();
    if ('tag' in csw_results) {
      //Verify the result is a GetRecordsResponse.
      if (csw_results['tag'] == 'csw:GetRecordsResponse') {
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
        $.each(csw_results.children, function (i, child) {
          if (child['tag'] == 'csw:SearchResults') {
            self.resultsCount(child.attributes.numberOfRecordsReturned);
            if ('children' in child) {
              $.each(child.children, function (j, search_result) {
                var result = {
                  'title': "",
                  'abstract': "",
                  'keywords': [],
                  'bounding_box': "",
                  'services': []
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
                  else if(metadata_part.tag == "dct:references")
                  {
                    var protocol = metadata_part.attributes.scheme;
                    if(metadata_part.attributes.scheme in self.service_display_name)
                    {
                      protocol = self.service_display_name[metadata_part.attributes.scheme].name;
                    }
                    if(protocol != "None")
                    {
                      result.services.push({'url': metadata_part.text,
                        'protocol': protocol});
                    }
                  }
                });
                self.results.push(result);
              });
            }
          }
        });
      }
    }
    else {
      self.resultsCount(0);
      self.errorMsg("An error occured while performing the search. Please retry.")
    }
    self.showResults(true);
  }

}