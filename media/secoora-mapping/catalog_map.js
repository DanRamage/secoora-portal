

function catalog_search_map()
{
  var self = this;
  self.olMap = null;
  self.polygonOLControl = null;
  self.cswGetRecs = null;

  self.onResize = function(percent)
  {
    self.olMap.render('map');
  };

  self.selectionBBOXAdded = function(feature)
  {
    var bounds = new OpenLayers.Bounds(feature.geometry.bounds.left,
      feature.geometry.bounds.bottom,
      feature.geometry.bounds.right,
      feature.geometry.bounds.top);
    var bounds4326 = bounds.transform(self.olMap.getProjection(),
                                      new OpenLayers.Projection("EPSG:4326"));




    var filterBoundingBox = new OpenLayers.Filter.Comparison({
       type: OpenLayers.Filter.Spatial.BBOX,
       property: "ows:BoundingBox",
       value: bounds4326
     });

     var options = {
       resultType: "results",
       startPosition: 1,
       maxRecords: 50,
       outputFormat: "application/xml",
       outputSchema: "http://www.isotc211.org/2005/gmd",
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
    $.ajax({
      type: "POST",
      url: "/proxy/rest_query/?url=http://129.252.139.68:8000",
      data: xmlOutput,
      success: function(data, textStatus, jqXHR)
      {
        var retData = self.cswGetRecs.read(jqXHR.responseText);
        var i = 0;
      },
      dataType: "xml"
      });


  };
  self.initialize = function(map_element_id) {

    $(window).resize(self.onResize);

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

    //self.map.setCenter(new OpenLayers.LonLat(-73.852, 31.933).transform(
    //                    new OpenLayers.Projection("EPSG:4326"),
    //                    new OpenLayers.Projection("EPSG:102113")), 6);

  };

  return(self);
};

var mapView = catalog_search_map();
$( document ).ready(function()
{
  mapView.initialize();
  mapView.olMap.render('map');
  mapView.olMap.setCenter(new OpenLayers.LonLat(-73.852, 31.933).transform(
                        new OpenLayers.Projection("EPSG:4326"),
                        new OpenLayers.Projection("EPSG:102113")), 6);

});
