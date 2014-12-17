function error_popup_view() {
  var self = this;

  self.popup_title = ko.observable("");
  self.popup_error_message = ko.observable("");

};

function searching_popup_view()
{
  var self = this;
  self.spinner;
  self.popup_id;
  self.spinner_id;

  self.initialize = function(popup_id, spinner_id)
  {
    self.popup_id = popup_id;
    self.spinner_id = spinner_id;
    var opts = {
      lines: 13, // The number of lines to draw
      length: 26, // The length of each line
      width: 7, // The line thickness
      radius: 15, // The radius of the inner circle
      corners: 0.3, // Corner roundness (0..1)
      rotate: 34, // The rotation offset
      direction: 1, // 1: clockwise, -1: counterclockwise
      color: '#000', // #rgb or #rrggbb or array of colors
      speed: 1, // Rounds per second
      trail: 48, // Afterglow percentage
      shadow: false, // Whether to render a shadow
      hwaccel: false, // Whether to use hardware acceleration
      className: 'spinner', // The CSS class to assign to the spinner
      zIndex: 2e9, // The z-index (defaults to 2000000000)
      top: '50%', // Top position relative to parent
      left: '50%' // Left position relative to parent
    };
    var target = document.getElementById(self.spinner_id);
    self.spinner = new Spinner(opts).spin(target);
  };
  self.show = function(show_flag)
  {
    if(show_flag)
    {
      var target = document.getElementById(self.spinner_id);
      self.spinner.spin(target);
      $('#' + self.popup_id).modal("show");
    }
    else
    {
      self.spinner.stop();
      $('#' + self.popup_id).modal("hide");
    }
  };

}

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

  self.loadingIndicator = null;
  self.showResults = ko.observable(false);
  self.results = ko.observableArray([]);
  self.resultsCount = ko.observable(0);
  self.errorMsg = ko.observable("");
  self.mapView = null;
  self.user_keyword = ko.observable("");
  self.error_popup_view = null;
  self.popup_title = ko.observable("");
  self.popup_error_message = ko.observable("");

  self.initialize = function (html_map_id, catalog_url, word_cloud_id, word_cloud_url) {
    self.mapView = catalog_search_map(self);
    //self.mapView.initialize(null, "/secoora_portal/proxy/rest_query/?url=http://129.252.139.68:8000", app.viewModel.process_results);
    //self.mapView.initialize(null, "/secoora_portal/proxy/rest_query/?url=http://129.252.37.192:8000", app.viewModel.process_results);
    self.mapView.initialize(null, catalog_url, app.viewModel.process_results_xml);

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
    self.loadingIndicator = new searching_popup_view();
    self.loadingIndicator.initialize('searching_popup', 'spinner')

  }
  self.backToCatalog = function()
  {
    self.showResults(false);
    self.loadingIndicator.show(false);
    self.user_keyword("");

  }
  self.word_soup_click = function(search_term)
  {
    self.loadingIndicator.show(true);
    self.user_keyword(search_term);
    self.mapView.keywordSearch(self.user_keyword().toLowerCase());
  }
  self.keyword_search_click = function () {
    self.loadingIndicator.show(true);
    self.mapView.keywordSearch(self.user_keyword().toLowerCase());
  }
  self.temporal_search_click = function()
  {
    self.loadingIndicator.show(true);
    var start_string = $("#start_date").val();
    var end_string = $("#end_date").val();
    var start_date = $("#start_date").datepicker('getDate');
    var end_date = $("#end_date").datepicker('getDate');
    if(isNaN(start_date.valueOf()))
    {
      if(self.error_popup_view == null)
      {
        //self.error_popup_view = new error_popup_view();
      }
      self.popup_title("Date Error");
      self.popup_error_message("No Start Date provided.");
      $('#error_popup').modal("show");
      return;
    }

    if(!isNaN(end_date) && start_date > end_date)
    {
      if(self.error_popup_view == null)
      {
        self.error_popup_view = new error_popup_view();
      }
      self.popup_title("Date Error");
      self.popup_error_message("The Start Date is later than the End Date.");
      $('#error_popup').modal("show");
      return;
    }
    self.mapView.temporalSearch(start_string, end_string);
  };
  self.process_results_xml = function (csw_results, textStatus, jqXHR) {
    self.results.removeAll();

    var rec_cnt = $(csw_results).find("csw\\:SearchResults, SearchResults").attr('numberOfRecordsMatched');
    if(rec_cnt != undefined)
    {
      rec_cnt = parseInt(rec_cnt);
      //Have matching records.
      if(rec_cnt > 0)
      {
        var record_tags = $(csw_results).find('gmi\\:MI_Metadata, MI_Metadata');
        if(record_tags != undefined)
        {
          record_tags.each(function(ndx, tag)
          {
            var result = {
              'id': ndx,
              'title': "",
              'abstract': "",
              'keywords': [],
              'bounding_box': "",
              'services': [],
              'contacts' : [],
              'begin_time' : "",
              'end_time' : ""
            }
            var id_rec = $(tag).find("gmd\\:MD_DataIdentification[id='DataIdentification'], MD_DataIdentification[id='DataIdentification']")
            //Get the title.
            result.title = $(id_rec).find("gmd\\:citation, citation")
              .children("gmd\\:CI_Citation, CI_Citation")
              .children("gmd\\:title, title")
              .children("gco\\:CharacterString, CharacterString").text();
            //Contact info
            var contact_tag = $(id_rec).find('gmd\\:citedResponsibleParty, citedResponsibleParty');
            if(contact_tag != undefined)
            {
              $(contact_tag).each(function(c_ndx, c_tag) {
                var contact_name = $(c_tag).find('gmd\\:CI_ResponsibleParty, CI_ResponsibleParty')
                  .children('gmd\\:individualName, individualName')
                  .children('gco\\:CharacterString, CharacterString').text();
                var email = $(c_tag).find('gmd\\:CI_ResponsibleParty, CI_ResponsibleParty')
                  .children('gmd\\:contactInfo, contactInfo')
                  .children('gmd\\:CI_Contact, CI_Contact')
                  .children('gmd\\:address, address')
                  .children('gmd\\:CI_Address, CI_Address')
                  .children('gmd\\:electronicMailAddress, electronicMailAddress')
                  .children('gco\\:CharacterString, CharacterString').text();
                result.contacts.push({'contact_name': contact_name,
                  'email': email});
              });
            }
            //Abstract
            result.abstract = id_rec.find("gmd\\:abstract, abstract")
              .find("gco\\:CharacterString, CharacterString").text();

            //Temporal extent
            var extents_rec = $(id_rec).find('gmd\\:extent, extent')
              .children('gmd\\:EX_Extent[id="boundingExtent"], EX_Extent[id="boundingExtent"]');
            var temporal_rec = $(extents_rec).find('gmd\\:temporalElement, temporalElement')
              .children('gmd\\:EX_TemporalExtent[id="boundingTemporalExtent"], EX_TemporalExtent[id="boundingTemporalExtent"]');
            if(temporal_rec != undefined)
            {
              var date_val = $(temporal_rec).find('gmd\\:extent, extent')
                .children('gml\\:TimePeriod, TimePeriod')
                .children('gml\\:beginPosition, beginPosition').text();
              //Just get the date portion, leaving out time.
              result.begin_time = date_val.slice(0, date_val.indexOf("T"));
              date_val = $(temporal_rec).find('gmd\\:extent, extent')
                .children('gml\\:TimePeriod, TimePeriod')
                .children('gml\\:endPosition, endPosition').text();
              //Just get the date portion, leaving out time.
              result.end_time = date_val.slice(0, date_val.indexOf("T"));
            }
            //BBox
            var bbox_rec = id_rec.find("gmd\\:EX_GeographicBoundingBox[id='boundingGeographicBoundingBox'], EX_GeographicBoundingBox[id='boundingGeographicBoundingBox']");
            if(bbox_rec != undefined)
            {
              var ll_lon = parseFloat(bbox_rec.find("gmd\\:westBoundLongitude, westBoundLongitude").children('gco\\:Decimal, Decimal').text()).toFixed(3);
              var ll_lat = parseFloat(bbox_rec.find("gmd\\:southBoundLatitude, southBoundLatitude").children('gco\\:Decimal, Decimal').text()).toFixed(3);
              var ur_lon = parseFloat(bbox_rec.find("gmd\\:eastBoundLongitude, eastBoundLongitude").children('gco\\:Decimal, Decimal').text()).toFixed(3);
              var ur_lat = parseFloat(bbox_rec.find("gmd\\:northBoundLatitude, northBoundLatitude").children('gco\\:Decimal, Decimal').text()).toFixed(3);
              result.bounding_box = ll_lon + ' ' + ll_lat + ', ' + ur_lon + ' ' + ur_lat;
            }
            //Get the keywords.
            var keywords_tag = $(id_rec).find("gmd\\:descriptiveKeywords, descriptiveKeywords")
              .children("gmd\\:MD_Keywords, MD_Keywords")
              .children("gmd\\:keyword, keyword");
            keywords_tag.each(function(k_ndx, k_tag)
            {
              var keyword = $(k_tag).find("gco\\:CharacterString, CharacterString").text();
              keyword = keyword.replace(/_/g, ' ');
              result.keywords.push(keyword);
            });
            //Now let's loop the services available.
            var services_rec = $(tag).find("gmd\\:identificationInfo, identificationInfo");
            services_rec.each(function(s_ndx, s_rec)
            {
              var protocol = $(s_rec).find('srv\\:SV_ServiceIdentification, SV_ServiceIdentification').attr('id');
              if(protocol != undefined) {
                var url = $(s_rec).find('srv\\:containsOperations, containsOperations')
                  .children('srv\\:SV_OperationMetadata, SV_OperationMetadata')
                  .children('srv\\:connectPoint, connectPoint')
                  .children('gmd\\:CI_OnlineResource, CI_OnlineResource')
                  .children('gmd\\:linkage, linkage')
                  .children('gmd\\:URL, URL').text();
                result.services.push({
                  'url': url,
                  'protocol': protocol
                });
              }
            });
            self.results.push(result);
        });
        }
      }
    }
    else
    {
      rec_cnt = 0;
    }
    self.resultsCount(rec_cnt);
    self.loadingIndicator.show(false);
    self.showResults(true);
    window.scrollTo(0,0);
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
    self.loadingIndicator.show(false);
    self.showResults(true);
  }

}