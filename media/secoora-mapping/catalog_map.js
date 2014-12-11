

function catalog_search_map()
{
  var self = this;
  self.olMap = null;
  self.polygonOLControl = null;
  self.polygonQueryGeom = [];
  self.cswGetRecs = null;
  self.query_url = null;

  self.onResize = function(percent)
  {
    self.olMap.render('map');
  };
  self.temporalSearch = function(start_date, end_date)
  {
    var date_range = new OpenLayers.Filter.Comparison({
       type: OpenLayers.Filter.Comparison.BETWEEN,
       property: "dc:date",
       lowerBoundary: start_date,
       upperBoundary: end_date
     });
     var options = {
       resultType: "results",
       startPosition: 1,
       maxRecords: 100,
       outputFormat: "application/json",
       Query: {
         ElementSetName: {
           value: "full"
         },
         Constraint: {
           version: "1.1.0",
           Filter: date_range
         }
       }
     };


     self.cswGetRecs = new OpenLayers.Format.CSWGetRecords.v2_0_2(options);
     var xmlOutput = self.cswGetRecs.write();
    $.ajax({
      type: "POST",
      url: self.query_url,
      data: xmlOutput,
      dataType: "json",
      success: self.results_callback
    });

  };
  self.keywordSearch = function(search_term)
  {
    //var goog_parser = parser();
    var parsed = search_term_parser.parse(search_term);
    //var search_term = "";
    //Search filter for keyword as user typed.
    var user_term = new OpenLayers.Filter.Comparison({
       type: OpenLayers.Filter.Comparison.LIKE,
       property: "csw:AnyText",
       value: search_term
     });
    //SEarch term replacing " " with "_".
    var user_term_underscores = new OpenLayers.Filter.Comparison({
       type: OpenLayers.Filter.Comparison.LIKE,
       property: "csw:AnyText",
       value: search_term.replace(" ", "_")
     });

    //User is going to search for sane term such as air temperature and not the
    //vocabulary term of air_temperature. We're going to search for both by taking
    //the input from the user and replacing " " with "_" in a coarse attempt
    //to cover our bases.
    var parent_filter = new OpenLayers.Filter.Logical({
        type: OpenLayers.Filter.Logical.OR,
        filters: [user_term, user_term_underscores]
    });


     var options = {
       resultType: "results",
       startPosition: 1,
       maxRecords: 100,
       outputFormat: "application/xml",
       outputSchema: "http://www.isotc211.org/2005/gmd",
       Query: {
         ElementSetName: {
           value: "full"
         },
         Constraint: {
           version: "1.1.0",
           Filter: parent_filter
         }
       }
     };


     self.cswGetRecs = new OpenLayers.Format.CSWGetRecords.v2_0_2(options);
     var xmlOutput = self.cswGetRecs.write();
     //var protocol = new OpenLayers.Protocol.CSW({
     //    requestsType: "read"
     //   });
    $.ajax({
      type: "POST",
      url: self.query_url,
      data: xmlOutput,
      dataType: "xml",
      success: self.results_callback
    });
  };
  self.selectionBBOXAdded = function(feature)
  {
    var vertices = feature.geometry.getVertices();
    if(self.polygonQueryGeom)
    {
      self.polygonQueryGeom.length = 0;
    }
    else
    {
      self.polygonQueryGeom = [];
    }
    if(vertices.length)
    {
      for(var j = 0; j < vertices.length; j++)
      {
        var point = [];
        point.push(vertices[j].x);
        point.push(vertices[j].y);
        self.polygonQueryGeom.push(point);
      }
      var point = [];
      point.push(vertices[0].x);
      point.push(vertices[0].y);
      //Append the first point last to close the polygon.
      self.polygonQueryGeom.push(point);
    };

    var bounds = new OpenLayers.Bounds(feature.geometry.bounds.left,
      feature.geometry.bounds.bottom,
      feature.geometry.bounds.right,
      feature.geometry.bounds.top);
    bounds.transform(self.olMap.getProjection(),
                      new OpenLayers.Projection("EPSG:4326"));

    //For some reason the lat/lon order is reversed from what we need to send to the getCSW, we
    //reverse them here.
    var bounds4326 = new OpenLayers.Bounds(bounds.toArray(true));

    var filterBoundingBox = new OpenLayers.Filter.Spatial({
       type: OpenLayers.Filter.Spatial.BBOX,
       property: "ows:BoundingBox",
       value: bounds4326
     });

     var options = {
       resultType: "results",
       startPosition: 1,
       maxRecords: 100,
       outputFormat: "application/json",
       //outputSchema: "http://www.isotc211.org/2005/gmd",
       Query: {
         ElementSetName: {
           value: "full"
         },
         Constraint: {
           version: "1.1.0",
           Filter: filterBoundingBox
         }
       }
     };


     self.cswGetRecs = new OpenLayers.Format.CSWGetRecords.v2_0_2(options);
     var xmlOutput = self.cswGetRecs.write();
     var protocol = new OpenLayers.Protocol.CSW({
         requestsType: "read"
        });
    $.ajax({
      type: "POST",
      url: self.query_url,
      data: xmlOutput,
      dataType: "json",
      success: self.results_callback
    });
  };
  self.initialize = function(map_element_id, query_url, results_callback) {

    $(window).resize(self.onResize);
    /*var center_pt = new OpenLayers.LonLat(-79.27, 33.01).transform(
                        new OpenLayers.Projection("EPSG:4326"),
                        new OpenLayers.Projection("EPSG:102113"));*/
    self.olMap = new OpenLayers.Map(null, {
      displayProjection: new OpenLayers.Projection("EPSG:4326"),
      projection: "EPSG:102113"
    });

    var esriOcean = new OpenLayers.Layer.XYZ("ESRI Ocean",
      "http://services.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/${z}/${y}/${x}",
      {
      sphericalMercator: true,
      isBaseLayer: true,
      //numZoomLevels: 13,
      attribution: "Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri"
    });

    //Polygon query tool control
    //Set the style of the select polygon.
    var pgStyle = new OpenLayers.Style({
        //fillColor: '#FFFFFF',
        fillOpacity: 0,
        //strokeColor: '#0000d0',
        strokeOpacity: 0.5,
        strokeWidth: 2
    });

    //Add a vector layer to draw our polygon selection on for use with the "Does layer have data here" ESRI quesry.
    var polygonLayer = new OpenLayers.Layer.Vector("Polygon Layer", {
      styleMap: new OpenLayers.StyleMap({'default': pgStyle})
    });

    self.olMap.addLayers([esriOcean, polygonLayer]);

    self.query_url = query_url;
    self.results_callback = results_callback;

    self.polygonOLControl = new OpenLayers.Control.DrawFeature(polygonLayer,
      OpenLayers.Handler.Polygon,
      {
        featureAdded: self.selectionBBOXAdded,
        callbacks: {
          //We want to check to see if we're drawing a new polygon. If we are, let's get
          //rid of the previous one from the screen.
          point: function (point) {
            //We have a polygon on the screen already, we're getting reading to create a new
            //one, so clear the old one.
            if (self.polygonQueryGeom && self.polygonQueryGeom.length) {
              //Remove the current polygon from the map.
              this.layer.removeAllFeatures();
              //Reset the polygon points array.
              self.polygonQueryGeom.length = 0;
            }
          }

        }

      });
    self.olMap.addControl(self.polygonOLControl);
    self.polygonOLControl.activate(true);
    /*
    self.olMap.setCenter(new OpenLayers.LonLat(-79.27, 33.01).transform(
                        new OpenLayers.Projection("EPSG:4326"),
                        new OpenLayers.Projection("EPSG:102113")), 6);
    */


  };

  return(self);
};

