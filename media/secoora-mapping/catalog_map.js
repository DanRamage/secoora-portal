

function catalog_search_map()
{
  var self = this;
  self.map = null;
  self.polygonOLControl = null;


  self.initialize = function(map_element_id) {
    self.map = new OpenLayers.Map(map_element_id, {
      displayProjection: new OpenLayers.Projection("EPSG:4326"),
      projection: "EPSG:102113"
    });

    esriOcean = new OpenLayers.Layer.XYZ("ESRI Ocean", "http://services.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/${z}/${y}/${x}", {
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

    self.map.addLayers(esriOcean, polygonLayer);


    self.polygonOLControl = new OpenLayers.Control.DrawFeature(polygonLayer,
      OpenLayers.Handler.Polygon,
      {
        featureAdded: self.selectionPolygonAdded,
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
    self.map.addControl(self.polygonOLControl);
    self.polygonOLControl.enableControl(true);
  };

  return(self);
};