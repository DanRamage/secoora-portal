function isoDateToDate(s) {
  // 2010-01-01T00:00:00 or 2010-01-01 00:00:00
  s = s.replace("\n",'');
  var p = s.split(/T| /);
  if (p.length == 2) {
    var ymd = p[0].split('-');
    var hm = p[1].split(':');
    return new Date(Date.UTC(
       ymd[0]
      ,ymd[1] - 1
      ,ymd[2]
      ,hm[0]
      ,hm[1]
    ));
  }
  else {
    return false;
  }
}



function showToolTip(x,y,contents) {
  $('<div id="tooltip">' + contents + '</div>').css({
     position           : 'absolute'
    ,display            : 'none'
    ,top                : y + 10
    ,left               : x + 10
    ,border             : '1px solid #99BBE8'
    ,padding            : '2px'
    ,'background-color' : '#fff'
    ,opacity            : 0.80
    ,'z-index'          : 10000001
  }).appendTo("body").fadeIn(200);
}

$('#div-ts-plot').bind('plothover',function(event,pos,item) {
    if (item) {
      var x = new Date(item.datapoint[0]);
      var y = item.datapoint[1];
      if (prevPoint != item.dataIndex) {
        $('#tooltip').remove();
        //var d = x.format('UTC:mmm dd, yyyy');
        var d = x.format('UTC:mmm dd, h TT');
        // display date from stat calcs if avaialble
        /*
        if (item.series.data[item.dataIndex][2]) {
          d = item.series.data[item.dataIndex][2].format('UTC:mmm dd, h TT');
        }
        // but only show the year if this is the avg line
        if (item.series.id == 'avg') {
          d = x.format('UTC:mmm dd');
        }
	*/
        showToolTip(
           item.pageX
          ,item.pageY
          ,d + ' : ' + (Math.round(y * 100) / 100) + ' ' + item.series.uom);
      }
      prevPoint = item.dataIndex;
    }
    else {
      $('#tooltip').remove();
      prevPoint = null;
    }
  });


app.init = function () {
    //to turn basemap indicator off (hide the plus sign)
    //see email from Matt on 7/26 2:24pm with list of controls
    var map = new OpenLayers.Map(null, {
        //allOverlays: true,
        displayProjection: new OpenLayers.Projection("EPSG:4326"),
        projection: "EPSG:900913"
    });

    esriOcean = new OpenLayers.Layer.XYZ("ESRI Ocean", "http://services.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/${z}/${y}/${x}", {
        sphericalMercator: true,
        isBaseLayer: true,
        //numZoomLevels: 13,
        attribution: "Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri"
    });

    openStreetMap = new OpenLayers.Layer.OSM("Open Street Map", "http://a.tile.openstreetmap.org/${z}/${x}/${y}.png", {
        sphericalMercator: true,
        isBaseLayer: true,
        //numZoomLevels: 13
    });

    googleStreet = new OpenLayers.Layer.Google("Google Streets", {
        sphericalMercator: true,
        isBaseLayer: true,
        //numZoomLevels: 13
    });
    googleTerrain = new OpenLayers.Layer.Google("Google Physical", {
        type: google.maps.MapTypeId.TERRAIN,
        sphericalMercator: true,
        isBaseLayer: true,
        //numZoomLevels: 13
    });
    googleSatellite = new OpenLayers.Layer.Google("Google Satellite", {
        type: google.maps.MapTypeId.SATELLITE,
        sphericalMercator: true,
        isBaseLayer: true,
        //numZoomLevels: 13
    });

    /*var bingHybrid = new OpenLayers.Layer.Bing( {
        name: "Bing Hybrid",
        key: "AvD-cuulbvBqwFDQGNB1gCXDEH4S6sEkS7Yw9r79gOyCvd2hBvQYPaRBem8cpkjv",
        type: "AerialWithLabels",
        sphericalMercator: true,
        isBaseLayer: true,
        numZoomLevels: 13
    });*/

    // need api key from http://bingmapsportal.com/
    /*var bingHybrid = new OpenLayers.Layer.Bing({
        name: "Bing Hybrid",
        key: "AvD-cuulbvBqwFDQGNB1gCXDEH4S6sEkS7Yw9r79gOyCvd2hBvQYPaRBem8cpkjv",
        type: "AerialWithLabels"
    });*/

    nauticalCharts = new OpenLayers.Layer.WMS("Nautical Charts", "http://egisws02.nos.noaa.gov/ArcGIS/services/RNC/NOAA_RNC/ImageServer/WMSServer",
        {
            layers: 'null'
        },
        {
            isBaseLayer: true,
            //numZoomLevels: 13,
            projection: "EPSG:102113"
        }
    );

    //northIcon = new OpenLayers.Layer.Image({url: })

    map.addLayers([esriOcean, openStreetMap, googleStreet, googleTerrain, googleSatellite, nauticalCharts]);

    //map.addLayers([esriOcean]);
    esriOcean.setZIndex(100);

    map.addControl(new SimpleLayerSwitcher());

    //Scale Bar
    scalebar = new OpenLayers.Control.ScaleLine();

    /*var scalebar = new OpenLayers.Control.ScaleBar( {
        displaySystem: "english,metric",
        minWidth: 100, //default
        maxWidth: 150, //default
        divisions: 2, //default
        subdivisions: 2, //default
        showMinorMeasures: false //default
    });*/
    map.addControl(scalebar);

    map.zoomBox = new OpenLayers.Control.ZoomBox( {
        //enables zooming to a given extent on the map by holding down shift key while dragging the mouse
    });

    map.addControl(map.zoomBox);

    map.addControl(new OpenLayers.Control.MousePosition({
      numDigits: 3
      }));

    // only allow onetime zooming with box
    map.events.register("zoomend", null, function () {
        if (map.zoomBox.active) {
            app.viewModel.deactivateZoomBox();
        }
    });

    // map.addControl(new OpenLayers.Control.MousePosition({
    //     element: document.getElementById('pos')
    // }));

    map.events.register("moveend", null, function () {
        // update the url when we move
        app.updateUrl();
    });

    /*
    // callback functions for vector attribution (SelectFeature Control)
    var report = function(e) {
        var layer = e.feature.layer.layerModel;

        if ( layer.attributes.length ) {
            var attrs = layer.attributes,
                title = layer.name,
                text = [];
            app.viewModel.attributeTitle(title);
            for (var i=0; i<attrs.length; i++) {
                if ( e.feature.data[attrs[i].field] ) {
                    text.push({'display': attrs[i].display, 'data': e.feature.data[attrs[i].field]});
                }
            }
            app.viewModel.attributeData(text);
        }
    };
    */
    /*
    var clearout = function(e) {
        //document.getElementById("output").innerHTML = "";
        app.viewModel.attributeTitle(false);
        app.viewModel.attributeData(false);
    };
    */

    ////////////////////////////////////////////////////////////////////////////////
    // ADD Polygon query tool control
    app.viewModel.polygonQueryTool.initializeMapControl(map);
    // Add measure tool control.
    app.viewModel.measurementTool.initializeMapControl(map);


    //Add the N icon
    //var compassIcon = new OpenLayers.CompassIcon('/media/marco-proto/assets/img/north-arrow.png', {h: 64, w: 64});
    //map.addControl(compassIcon);

    //////////////////////////////////////////////////////////////////////////////////////////

    app.map = map;

    app.map.attributes = [];
    //app.map.clickOutput = { time: 0, attributes: [] };
    app.map.clickOutput = { time: 0, attributes: {} };

    /*
    //UTF Attribution
    map.UTFControl = new OpenLayers.Control.UTFGrid({
        //attributes: layer.attributes,
        layers: [],
        //events: {fallThrough: true},
        handlerMode: 'click',
        callback: function(infoLookup, lonlat, xy) {
            app.map.utfGridClickHandling(infoLookup);
        }
    });
    map.addControl(map.UTFControl);

    app.map.utfGridClickHandling = function(infoLookup) {
        for (var idx in infoLookup) {
            $.each(app.viewModel.visibleLayers(), function (layer_index, potential_layer) {
              if (potential_layer.type !== 'Vector') {
                var new_attributes,
                    info = infoLookup[idx],
                    date = new Date(),
                    newTime = date.getTime();
                if (info && info.data) {
                    console.log('utfcontrol click');
                    var newmsg = '',
                        hasAllAttributes = true,
                        parentHasAllAttributes = false;
                    // if info.data has all the attributes we're looking for
                    // we'll accept this layer as the attribution layer
                    //if ( ! potential_layer.attributes.length ) {
                    hasAllAttributes = false;
                    //}
                    $.each(potential_layer.attributes, function (attr_index, attr_obj) {
                        if ( attr_obj.field in info.data ) {
                            hasAllAttributes = true;
                        }
                    });
                    if ( !hasAllAttributes && potential_layer.parent) {
                        parentHasAllAttributes = true;
                        if ( ! potential_layer.parent.attributes.length ) {
                            parentHasAllAttributes = false;
                        }
                        $.each(potential_layer.parent.attributes, function (attr_index, attr_obj) {
                            if ( !(attr_obj.field in info.data) ) {
                                parentHasAllAttributes = false;
                            }
                        });
                    }
                    if (hasAllAttributes) {
                        new_attributes = potential_layer.attributes;
                    } else if (parentHasAllAttributes) {
                        new_attributes = potential_layer.parent.attributes;
                    }
                    if (new_attributes) {
                        var attribute_objs = [];
                        $.each(new_attributes, function(index, obj) {
                            if ( potential_layer.compress_attributes ) {
                                var display = obj.display + ': ' + info.data[obj.field];
                                attribute_objs.push({'display': display, 'data': ''});
                            } else {
                                //**** SPECIAL CASE FOR ENDANGERED WHALE DATA
                                var value = info.data[obj.field];
                                if (value === 999999) {
                                    attribute_objs.push({'display': obj.display, 'data': 'No Survey Effort'});
                                } else {
                                    try {
                                        //set the precision and add any necessary commas
                                        value = value.toFixed(obj.precision).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                    }
                                    catch (e) {
                                        //keep on keeping on
                                    }
                                    attribute_objs.push({'display': obj.display, 'data': value});
                                }

                            }
                        });
                        var title = potential_layer.name,
                            text = attribute_objs;
                        if ( title === 'OCS Lease Blocks' ) {
                            text = app.viewModel.getOCSAttributes(title, info.data);
                        } else if ( title === 'Sea Turtles' ) {
                            text = app.viewModel.getSeaTurtleAttributes(title, info.data);
                        } else if ( title === 'Toothed Mammals (All Seasons)' ) {
                            text = app.viewModel.getToothedMammalAttributes(title, info.data);
                        } else if ( title === 'Wind Speed' ) {
                            text = app.viewModel.getWindSpeedAttributes(title, info.data);
                        }
                        if (newTime - app.map.clickOutput.time > 500) {
                            app.map.clickOutput.attributes = {};
                            app.map.clickOutput.time = newTime;
                            app.map.clickOutput.attributes[title] = text;
                        } else {
                            if ( text[0].data || text[0].display) {
                                app.map.clickOutput.attributes[title] = text;
                            }
                        }
                        app.viewModel.aggregatedAttributes(app.map.clickOutput.attributes);
                    }
                }
              }
            });
        }
    }; //end utfGridClickHandling
    */
    /*
    app.map.events.register("featureclick", null, function(e) {
        var layer = e.feature.layer.layerModel || e.feature.layer.scenarioModel;
        var date = new Date();
        var newTime = date.getTime();
        var text = [],
            title = layer.name;

        if ( layer.scenarioAttributes && layer.scenarioAttributes.length ) {
            var attrs = layer.scenarioAttributes;
            for (var i=0; i<attrs.length; i++) {
                text.push({'display': attrs[i].title, 'data': attrs[i].data});
            }
        } else if ( layer.attributes.length ) {
            var attrs = layer.attributes;

            for (var i=0; i<attrs.length; i++) {
                if ( e.feature.data[attrs[i].field] ) {
                    text.push({'display': attrs[i].display, 'data': e.feature.data[attrs[i].field]});
                }
            }
        } else if ( layer.name === 'Selected OCS Blocks' ) {
            text = app.viewModel.getOCSAttributes(title, e.feature.attributes);
        }

        if (newTime - app.map.clickOutput.time > 300) {
            app.map.clickOutput.attributes = {};
            app.map.clickOutput.time = newTime;
        }
        app.map.clickOutput.attributes[title] = text;
        app.viewModel.aggregatedAttributes(app.map.clickOutput.attributes);

    });
    */
    /*
    app.map.events.register("nofeatureclick", null, function(e) {
        var date = new Date();
        var newTime = date.getTime();
        if (newTime - app.map.clickOutput.time > 300) {
            app.viewModel.closeAttribution();
        }
    });
    */
    app.markers = new OpenLayers.Layer.Markers( "Markers" );
    var size = new OpenLayers.Size(16,25);
    var offset = new OpenLayers.Pixel(-(size.w/2), -size.h);
    //var icon = new OpenLayers.Icon('/media/marco-proto/assets/img/red-pin.png', size, offset);
    app.markers.icon = new OpenLayers.Icon('/media/marco-proto/assets/img/red-pin.png', size, offset);
    app.map.addLayer(app.markers);

    //place the marker on click events
    app.map.events.register("click", app.map , function(e){
        app.marker = new OpenLayers.Marker(app.map.getLonLatFromViewPortPx(e.xy), app.markers.icon);
        app.marker.map = app.map;
        app.viewModel.updateMarker();
    });


    // increment counter for WMS loads

    //var layerloadcounter = 0; 

    //map.events.register("loadstart", null, function () {
    //  layerloadcounter++;
    //});



};

app.addLayerToMap = function(layer, isVisible) {
    //2013-02-20 DWR
    //Added so we can use the topic button to add the layers into the Active tab, but not make them visible.
    var layerVisible = typeof(isVisible) === "undefined" ? true : isVisible;

    if (!layer.layer) {
        var opts = {
            displayInLayerSwitcher: false
        };

        /***BEGIN TEMPORARY FIX FOR CORALS LAYER IN IE8***/
        if ( $.browser.msie && $.browser.version < 9.0 && layer.name === "Coldwater Corals" ) {
        //if ( layer.name === "Coldwater Corals" ) {
            layer.type = 'XYZ';
            layer.url = 'https://s3.amazonaws.com/marco-public-2d/Conservation/CoralTiles/${z}/${x}/${y}.png';
            layer.utfurl = '/media/data_manager/utfgrid/coldwater_corals/${z}/${x}/${y}.json';
        }
        /***END TEMPORARY FIX FOR CORALS LAYER IN IE8***/

        if (layer.utfurl || (layer.parent && layer.parent.utfurl)) {
            layer.utfgrid = new OpenLayers.Layer.UTFGrid({
                layerModel: layer,
                url: layer.utfurl ? layer.utfurl : layer.parent.utfurl,
                sphericalMercator: true,
                //events: {fallThrough: true},
                utfgridResolution: 4, // default is 2
                displayInLayerSwitcher: false,
                useJSONP: false
            });
            //layer.utfgrid.projection = new OpenLayers.Projection("EPSG:4326");
            //2013-02-20 DWR
            layer.layer.setVisibility(isVisible);
            app.map.addLayer(layer.utfgrid);
            layer.layer = new OpenLayers.Layer.XYZ(
                layer.name,
                layer.url,
                $.extend({}, opts,
                    {
                        sphericalMercator: true,
                        isBaseLayer: false //previously set automatically when allOverlays was set to true, must now be set manually
                    }
                )
            );
            //2013-02-20 DWR
            layer.layer.setVisibility(isVisible);
            app.map.addLayer(layer.layer);
        }
        else if (layer.type === 'Vector')
        {
          layer.layer = new OpenLayers.Layer.Vector(
            layer.name,
            {
              projection: layer.openlayers_options.projection,
              strategies: layer.openlayers_options.strategies,
              protocol: layer.openlayers_options.protocol
            }
          );
          layer.layer.setVisibility(isVisible);
          app.map.addLayer(layer.layer);
          /*
            var styleMap = new OpenLayers.StyleMap( {
                fillColor: layer.color,
                fillOpacity: layer.fillOpacity,
                //strokeDashStyle: "dash",
                //strokeOpacity: 1,
                strokeColor: layer.color,
                strokeOpacity: layer.defaultOpacity,
                //strokeLinecap: "square",
                //http://dev.openlayers.org/apidocs/files/OpenLayers/Feature/Vector-js.html
                //title: 'testing'
                pointRadius: 2,
                externalGraphic: layer.graphic,
                graphicWidth: 8,
                graphicHeight: 8,
                graphicOpacity: layer.defaultOpacity
            });
            if (layer.lookupField) {
                var mylookup = {};
                $.each(layer.lookupDetails, function(index, details) {
                    var fillOp = 0.5;
                    //the following are special cases for Shipping Lanes that ensure suitable attribution with proper display
                    if (details.value === 'Precautionary Area') {
                        fillOp = 0.0;
                    } else if (details.value === 'Shipping Safety Fairway') {
                        fillOp = 0.0;
                    } else if (details.value === 'Traffic Lane') {
                        fillOp = 0.0;
                    }
                    mylookup[details.value] = { strokeColor: details.color,
                                                strokeDashstyle: details.dashstyle,
                                                fill: details.fill,
                                                fillColor: details.color,
                                                fillOpacity: fillOp,
                                                externalGraphic: details.graphic };
                });
                styleMap.addUniqueValueRules("default", layer.lookupField, mylookup);
                //styleMap.addUniqueValueRules("select", layer.lookupField, mylookup);
            }
            layer.layer = new OpenLayers.Layer.Vector(
                layer.name,
                {
                    projection: new OpenLayers.Projection('EPSG:102113'),
                    displayInLayerSwitcher: false,
                    strategies: [new OpenLayers.Strategy.Fixed()],
                    protocol: new OpenLayers.Protocol.HTTP({
                        url: layer.url,
                        format: new OpenLayers.Format.GeoJSON()
                    }),
                    styleMap: styleMap,
                    layerModel: layer
                }
            );
            //2013-02-20 DWR
            layer.layer.setVisibility(isVisible);
            //app.addVectorAttribution(layer);
            app.map.addLayer(layer.layer);
            //selectFeatureControl = app.map.getControlsByClass("OpenLayers.Control.SelectFeature")[0];
            if (layer.attributes.length) {
                app.map.vectorList.unshift(layer.layer);
                app.map.selectFeatureControl.setLayer(app.map.vectorList);
            }
          */
        }
        else if (layer.type === 'ArcRest') {

            var url = layer.url.replace('export', layer.arcgislayers + '/query');
            var esriQueryFields = [];
            for(var i = 0; i < layer.attributes.length; i++)
            {
              //esriQueryFields.push(layer.attributes[i].display);
              esriQueryFields.push(layer.attributes[i].field);
            }
            //layer.queryControl = new OpenLayers.Control.ArcGisRestQuery(
              layer.queryControl.push(new OpenLayers.Control.ArcGisRestQuery(
              {
                eventListeners: {
                  arcfeaturequery : function()
                  {
                    //Show the identify tab.
                    $('#identifyTab').tab('show');
                    app.viewModel.featureRequested(true);
                    //Another query started, so clear last results.
                    app.viewModel.attributeDataArray.remove(function(layerData) {
                      if(layerData.title == layer.name)
                      {
                        return(true);
                      }
                      return(false);
                    });
                    //Add a loading placeholder.
                    app.viewModel.attributeDataArray.push({title : layer.name, attributes: [{'display' : '',
                                  'data' : 'Querying...'}]});
                  },
                  //THis is the handler for the return click data.
                  resultarrived : function(responseText, xy)
                  {
                    app.viewModel.featureRequested(false);
                    app.viewModel.attributeDataArray.remove(function(layerData) {
                      if(layerData.title == layer.name)
                      {
                        return(true);
                      }
                      return(false);
                    });

                    var jsonFormat = new OpenLayers.Format.JSON();
                    var returnJSON = jsonFormat.read(responseText.text);
                    //Activate the Identify tab.
                    $('#identifyTab').tab('show');

                    var layerDataObj = {title : layer.name, attributes: []};
                    if('features' in returnJSON && returnJSON['features'].length)
                    {
                      var attributeObjs = layerDataObj.attributes;
                      $.each(returnJSON['features'], function(index, feature)
                      {
                        if(index == 0)
                        {
                          var attributeList = feature['attributes'];
                          if('fields' in returnJSON)
                          {
                            $.each(returnJSON['fields'], function(fieldNdx, field)
                            {
                              attributeObjs.push({'display' : field.alias,
                                                  'data' : attributeList[field.name]});
                            });
                          }
                          else if('fieldAliases' in returnJSON)
                          {
                            $.each(returnJSON['fieldAliases'], function(fieldNdx, field)
                            {
                              attributeObjs.push({'display' : (field != "null") ? field : fieldNdx,
                                                  'data' : attributeList[fieldNdx]});
                            });

                          }
                          return;
                        }
                      });
                    }
                    else if( 'error' in returnJSON)
                    {
                      layerDataObj.attributes.push({'display' : 'Error',
                                          'data' : returnJSON['error']['message']});
                    }
                    else
                    {
                      layerDataObj.attributes.push({'display' : '',
                                          'data' : 'No records found.'});

                    }
                    app.viewModel.attributeDataArray.push(layerDataObj);
                    app.viewModel.updateScrollBars();
                  }

                },
                url : url,
                layerid : layer.arcgislayers,
                sr : 102113,
                clickTolerance: 3,
                outFields : esriQueryFields.length ? esriQueryFields.join(',') : '*'
              })
            );
            layer.layer = new OpenLayers.Layer.ArcGIS93Rest(
                layer.name,
                layer.url,
                {
                    layers: "show:"+layer.arcgislayers,
                    srs: 'EPSG:102113',
                    transparent: true
                },
                {
                    isBaseLayer: false
                }
            );

            //2013-02-20 DWR
            layer.layer.setVisibility(isVisible);
            app.map.addLayer(layer.layer);
            //2013-02-20 DWR
            //Add the identify control.
            app.map.addControl(layer.queryControl[0]);

        }

        //DWR 2015-03-13
        //Added the WMST(time) as well as attempt to use the params
        //and options.
        else if (layer.type === 'WMS' || layer.type === 'WMST') {


            layer.layer = new OpenLayers.Layer.WMS(
                layer.name,
                layer.url,
                layer.openlayers_options.params,
                layer.openlayers_options.options
            );



//JTC 2015-04-23

    /**
     * Method: buildWMSOptions
     * Build an object with the relevant WMS options for the GetFeatureInfo request
     *
     * Parameters:
     * url - {String} The url to be used for sending the request
     * layers - {Array(<OpenLayers.Layer.WMS)} An array of layers
     * clickPosition - {<OpenLayers.Pixel>} The position on the map where the mouse
     *     event occurred.
     * format - {String} The format from the corresponding GetMap request
     */

	    //JTC 2015-03-08 point query

      	   //var currentBBOX = '-101.085752%2C13.163738%2C-67.537218%2C39.37353';

           //layer.queryControl = new OpenLayers.Control.WMSGetFeatureInfo(
            layer.queryControl.push(new OpenLayers.Control.WMSGetFeatureInfo(
              {
                eventListeners: {

                  getfeatureinfo : function(evt)
                  {

                    //JTC 2015-04-27
                    $('#ts-popup').popoverClosable();

                    app.viewModel.clickedLayerName(layer.name);
                    //self.clickedLayerData(feature.attributes.description);
                    $('#ts-popup').show().draggable().position({
                      "my": "left top",
                      "at": "left middle",
                      "of": $("#map-panel")
                    });


                    //window.alert("test1");
                    //window.alert(evt.text);

                    //window.alert(layer.closestTime());

                    /*
                     var d1 = [];
                     for (var i = 0; i < 14; i += 0.5) {
                     d1.push([i, Math.sin(i)]);
                     }

                     var d2 = [[0, 3], [4, 8], [8, 5], [9, 13]];

                     // A null signifies separate line segments

                     var d3 = [[0, 12], [7, 12], null, [7, 2.5], [12, 2.5]];

                     $.plot("#div-ts-plot", [ d1, d2, d3 ]);

                     // Add the Flot version string to the footer

                     //$("#footer").prepend("Flot " + $.plot.version + " &ndash; ");

                     */

                    var d = {
                      //url   : url
                      //,title : title
                      //,year  : year
                      data: []
                      //,points: { show: true, symbol: "circle" }
                    };

                    var now_cross = {
                      data: [], points: { show: true, symbol: "cross" }
                    };

                    //WMS xpath processing
                    _.each($(evt.text).find('FeatureInfo'), function (o) {
                      var a = $(o).find('time').text();
                      var b = $(o).find('value').text();
                      if ($.isNumeric(b)) {
                        //console.log(a+':'+b);
                        d.data.push([isoDateToDate(a), b]);
                      }
                    });

                    //d.data.push([isoDateToDate(a),b]);
                    //d.data.push([isoDateToDate('2014-04-01T02:00:00'),'32.1']);
                    //d.data.push([isoDateToDate('2014-04-01T04:00:00'),'33.1']);
                    //d.data.push([ data: [isoDateToDate('2015-04-30T06:00:00'),'31.1'], points: { symbol: "cross" } ]);

                    //d.data.push(data: generate(7, 1.1), points: { symbol: "cross" });

                    //works d.data.push([ isoDateToDate('2015-04-30T06:00:00'),'31.1' ]);

                    var plotData = [];

                    now_cross.data.push([isoDateToDate('2015-04-30T06:00:00'), '31.1']);

                    plotData = plotData.concat(d);
                    plotData = plotData.concat(now_cross);
                    //plotData.push([ data: [isoDateToDate('2015-04-30T06:00:00'),'31.1'], points: { symbol: "cross" } ]);
                    //plotData.push([ data: [isoDateToDate('2015-04-30T06:00:00'),'31.1']]);

                    $.plot(
                      $('#div-ts-plot')
                      , plotData
                      , {
                        xaxis: {mode: "time"}, crosshair: {mode: 'x'   }, grid: {
                          backgroundColor: {colors: ['#fff', '#C3DFE5']}, borderWidth: 1, borderColor: '#A6D1DB', hoverable: true
                        }, zoom: {interactive: true}, pan: {interactive: true}, legend: {
                          backgroundOpacity: 0.3, labelFormatter: function (label, series) {
                            return /min|max/.test(series.id) ? null : label;
                          }
                        }
                        // repeat 1st color to get outer edges of filled area the same color
                        //,colors : ['rgba(237,194,64,0.50)','rgba(237,194,64,0.50)',"#afd8f8","#cb4b4b","#4da74d","#9440ed"]
                        , colors: ["#eb4b4b", "#4da74d", "#9440ed", 'rgba(50,100,100,1.0)', 'rgba(100,50,100,1.0)', 'rgba(100,100,50,1.0)'] //note - 6 default colors, add more if > 6 needed
                      }
                    );



		              }
                  //This is the handler for the return click data.
                },

		            layerUrls : [layer.url],
                //url : 'http://tds.secoora.org/ncWMS/wms?ELEVATION=-0.013888888888888888&EXCEPTIONS=application%2Fvnd.ogc.se_inimage&FORMAT=text%2Fxml&INFO_FORMAT=text/xml',
                url : 'http://tds.secoora.org/ncWMS/wms?EXCEPTIONS=application%2Fvnd.ogc.se_inimage&FORMAT=text%2Fxml&INFO_FORMAT=text/xml',

                //sr : 102113,
                clickTolerance: 3,
                layers: [layer.layer],
                queryVisible: true,

                //infoFormat: 'text/xml',
                //format: new OpenLayers.Format.XML

                //outFields : esriQueryFields.length ? esriQueryFields.join(',') : '*'

                //onSelect: app.viewModel.tsClick,
                //scope: layer
              }));

    layer.queryControl[0].buildWMSOptions = function(url, layers, clickPosition, format) {
    //OpenLayers.Control.WMSGetFeatureInfo.buildWMSOptions = function(url, layers, clickPosition, format) {

        //buildWMSOptions: function(url, layers, clickPosition, format) {
            var layerNames = [], styleNames = [];
            for (var i = 0, len = layers.length; i < len; i++) {
                if (layers[i].params.LAYERS != null) {
                    layerNames = layerNames.concat(layers[i].params.LAYERS);
                    styleNames = styleNames.concat(this.getStyleNames(layers[i]));
                }
            }
            var firstLayer = layers[0];
            // use the firstLayer's projection if it matches the map projection -
            // this assumes that all layers will be available in this projection
            //var projection = this.map.getProjection();
            var projection = 'EPSG:4326';
            var layerProj = firstLayer.projection;
            if (layerProj && layerProj.equals(this.map.getProjectionObject())) {
                projection = layerProj.getCode();
            }

            projection = 'EPSG:4326';

          //var now = '2015-04-23T02:01:00.000Z';

          var now = layer.closestTime();

          var start_date = isoDateToDate(now);
          //start_date.setHours(start_date.getHours() - start_date.getTimezoneOffset()/60);
          //var start_date = $.extend( true, {}, now );
          //var end_date = now;
          start_date.setDate(start_date.getDate() - 2);

          var closest_start_wmst;
          var closest_date_ndx = bisect_left(Math.round(start_date.getTime()/1000), layer.timeSteps);
          if(closest_date_ndx != -1)
          {
            var closest_date = new Date(layer.timeSteps[closest_date_ndx] * 1000);
            closest_start_wmst = app.viewModel.timelineTool.get_wmst_date(closest_date);
      	  }

          //window.alert(start_date.toISOString());
          //window.alert(closest_start_wmst);

          var end_date = isoDateToDate(now);
          //end_date.setHours(end_date.getHours() - end_date.getTimezoneOffset()/60);
          end_date.setDate(end_date.getDate() + 2);

          var closest_end_wmst;
          var closest_date_ndx = bisect_left(Math.round(end_date.getTime()/1000), layer.timeSteps);
          if(closest_date_ndx != -1)
          {
            var closest_date = new Date(layer.timeSteps[closest_date_ndx] * 1000);
            closest_end_wmst = app.viewModel.timelineTool.get_wmst_date(closest_date);
          }


          //window.alert(closest_end_wmst);
          //window.alert(end_date.toISOString());
          //window.alert(start_date.toISOString()+'/'+end_date.toISOString());


            var params = OpenLayers.Util.extend({
                service: "WMS",
                version: firstLayer.params.VERSION,
                request: "GetFeatureInfo",
                exceptions: firstLayer.params.EXCEPTIONS,
                //bbox: this.map.getExtent().toBBOX(null,
                //    firstLayer.reverseAxisOrder()),
                //bbox: '-101.085752,13.163738,-67.537218,39.37353',

                bbox: this.map.getExtent().transform(this.map.getProjection(),
                      new OpenLayers.Projection("EPSG:4326")),

                //time: '2015-04-09T00:00:00.000Z/2015-04-10T00:00:00.000Z',
                //time: start_date.toISOString()+'/'+end_date.toISOString(),
                time: closest_start_wmst+'/'+closest_end_wmst,

                feature_count: this.maxFeatures,
                height: this.map.getSize().h,
                width: this.map.getSize().w,
                format: format,
                info_format: firstLayer.params.INFO_FORMAT || this.infoFormat
            }, (parseFloat(firstLayer.params.VERSION) >= 1.3) ?
                {
                    crs: projection,
                    i: parseInt(clickPosition.x),
                    j: parseInt(clickPosition.y)
                } :
                {
                    srs: projection,
                    x: parseInt(clickPosition.x),
                    y: parseInt(clickPosition.y)
                }
            );
            if (layerNames.length != 0) {
                params = OpenLayers.Util.extend({
                    layers: layerNames,
                    query_layers: layerNames,
                    styles: styleNames
                }, params);
            }
            OpenLayers.Util.applyDefaults(params, this.vendorParams);
            return {
                url: url,
                params: OpenLayers.Util.upperCaseObject(params),
                callback: function(request) {
                    this.handleResponse(clickPosition, request, url);
                },
                scope: this
            };
        }


            //2013-02-20 DWR
            layer.layer.setVisibility(isVisible);
            app.map.addLayer(layer.layer);

            //2013-02-20 DWR
            //Add the identify control.
            app.map.addControl(layer.queryControl[0]);

            //JTC 2015-04-03
            layer.layer.events.register("loadstart", null, function () {
              app.viewModel.layerloadcounter(app.viewModel.layerloadcounter()+1); //auto-increment for knockout
            });

            layer.layer.events.register("loadend", null, function () {
              app.viewModel.layerloadcounter(app.viewModel.layerloadcounter()-1); //auto-decrement for knockout
            });

            layer.layer.events.register("loadcancel", null, function () {
              app.viewModel.layerloadcounter(app.viewModel.layerloadcounter()-1); //auto-decrement for knockout
            });

        }
        else if(layer.type === 'KML')
        {
          var strategies;
          if(layer.openlayers_options.strategies === "Fixed")
          {
            strategies = new OpenLayers.Strategy.Fixed();
          }
          layer.layer = new OpenLayers.Layer.Vector(
            layer.name,
            {
              projection: layer.openlayers_options.projection,
              strategies: [strategies],
              protocol: new OpenLayers.Protocol.HTTP(
                {
                  url: layer.openlayers_options.protocol.url,
                  format: new OpenLayers.Format.KML(
                      layer.openlayers_options.protocol.format
                    )
                })
            }
          );
          layer.layer.setVisibility(isVisible);
          app.map.addLayer(layer.layer);
          //Create the select feature control.
          //layer.queryControl = new OpenLayers.Control.SelectFeature([layer.layer],
          layer.queryControl.push(new OpenLayers.Control.SelectFeature([layer.layer],
            {
              onSelect: app.viewModel.kmlClick,
              scope: layer
            }));
          app.map.addControl(layer.queryControl[0]);

        }
        else if(layer.type === 'GeoJSON')
        {
          //new OpenLayers.Projection("EPSG:900913")), 2);
          var style_map;
          var strategies;
          if('legend' in layer.openlayers_options)
          {
            var legend_info = layer.openlayers_options.legend;
            var style_bldr = new ol_gradient_style_builder()
            //var rules = style_bldr.build_gradient('#0000ff', '#ff0000', layer.openlayers_options.steps, 'obs_value');
            var rules = style_bldr.build_filters(legend_info.min_range,
              legend_info.max_range,
              legend_info.number_steps,
              'obs_value');
            var style = new OpenLayers.Style(
                {
                    strokeWidth: '${strokeFunction}',
                    strokeOpacity: 0.1,
                    //pointRadius: '${radiusfunction}',
                    label: "${obs_value}",
                    fontColor: "#2d8998"
                },
                {
                  context: {
                      strokeFunction: function(feature) {
                          var count = feature.attributes.count;
                          var stk = Math.max(0.1 * count, 1);
                          return stk;
                      },
                      radiusfunction: function(feature) {
                          var count = feature.attributes.count;
                          var radius = Math.max(0.60 * count, 7);
                          return radius;
                      }
                  },
                  rules: rules
              });
            style_map = new OpenLayers.StyleMap(style);
            strategies = [new OpenLayers.Strategy.Fixed()];
          }
          else
          {
            style_map = new OpenLayers.StyleMap({
                  'default': new OpenLayers.Style({
                      strokeWidth: '${strokeFunction}',
                      strokeOpacity: 0.5,
                      strokeColor: "#88aaaa",
                      fillColor: "#99CC55",
                      fillOpacity: 0.5,
                      pointRadius: '${radiusfunction}',
                      label: "${count}",
                      fontColor: "#ffffff"
                  }, {
                      context: {
                          strokeFunction: function(feature) {
                              var count = feature.attributes.count;
                              var stk = Math.max(0.1 * count, 1);
                              return stk;
                          },
                          radiusfunction: function(feature) {
                              var count = feature.attributes.count;
                              var radius = Math.max(0.60 * count, 7);
                              return radius;
                          }
                      }
                  })
              });
            strategies = [new OpenLayers.Strategy.Fixed(), new OpenLayers.Strategy.Cluster({distance: 25})];
          }
          layer.layer = new OpenLayers.Layer.Vector(layer.name, {
              projection: "EPSG:4326",
              protocol: new OpenLayers.Protocol.HTTP({
                  url: layer.openlayers_options.geojson,
                  format: new OpenLayers.Format.GeoJSON()
              }),
              strategies: strategies,
              styleMap: style_map
          });
          app.map.addLayer(layer.layer);

          //Add hover handler if used
          var hoverCtrl = new OpenLayers.Control.SelectFeature(layer.layer, {
              hover: true,
              highlightOnly: true,
              renderIntent: "temporary",
              toggle: true,
              //onSelect: app.viewModel.obs_hover_select,
              //onUnselect: app.viewModel.obs_hover_unselect,
              eventListeners: {
                featurehighlighted: app.viewModel.observation_hover_model.obs_hover_select,
                featureunhighlighted: app.viewModel.observation_hover_model.obs_hover_unselect
              }
          });
          //Used so hover control does not handle the click events.
          hoverCtrl.handlers["feature"].stopClick = false;
          hoverCtrl.handlers["feature"].stopDown = false;

          var clickCtrl = new OpenLayers.Control.SelectFeature(layer.layer, {
              onSelect: app.viewModel.observation_hover_model.obs_click_select,
              scope: layer
          });
          app.map.addControl(hoverCtrl);
          app.map.addControl(clickCtrl);
          layer.queryControl.push(hoverCtrl);
          layer.queryControl.push(clickCtrl);
        }
        else if(layer.type === 'WindGeoJSON')
        {
          if('legend' in layer.openlayers_options) {
            var legend_info = layer.openlayers_options.legend;
            var style_bldr = new ol_gradient_style_builder()
            //var rules = style_bldr.build_gradient('#0000ff', '#ff0000', layer.openlayers_options.steps, 'obs_value');
            var rules = style_bldr.build_filters(legend_info.min_range,
              legend_info.max_range,
              legend_info.number_steps,
              'obs_value');
            var style = new OpenLayers.Style(
              {
                strokeWidth: '${strokeFunction}',
                strokeOpacity: 0.1,
                //pointRadius: '${radiusfunction}',
                label: "${obs_value}",
                fontColor: "#2d8998"
              },
              {
                context: {
                  strokeFunction: function (feature) {
                    var count = feature.attributes.count;
                    var stk = Math.max(0.1 * count, 1);
                    return stk;
                  },
                  radiusfunction: function (feature) {
                    var count = feature.attributes.count;
                    var radius = Math.max(0.60 * count, 7);
                    return radius;
                  }
                },
                rules: rules
              });
            style_map = new OpenLayers.StyleMap(style);
          }
          strategies = [new OpenLayers.Strategy.Fixed()];
          var url = layer.openlayers_options.geojson;
          layer.layer = new OpenLayers.Layer.Vector(layer.name, {
              projection: "EPSG:4326",
              protocol: new OpenLayers.Protocol.HTTP({
                  url: layer.openlayers_options.geojson,
                  format: new OpenLayers.Format.GeoJSON()
              }),
              strategies: strategies,
              styleMap: style_map
          });
          layer.layer.events.on({"loadend": function(e)
          {
            var features = []
            $.each(e.response.features, function(feat_ndx, feat)
            {
              var ft = feat.clone();

              var speed = ft.attributes.obs_value;
              var angle = ft.attributes.dir_value;
              var feat_geom = ft.geometry;

              var xp = feat_geom.x;
              var yp = feat_geom.y;
              var line = new OpenLayers.Geometry.LineString([new OpenLayers.Geometry.Point(xp, yp-speed/20 - 12*map.resolution), new OpenLayers.Geometry.Point(xp, yp)]);

              var ftGeomColl = new OpenLayers.Geometry.Collection();
              ftGeomColl.addComponent(line);
              ftGeomColl.addComponent(feat_geom);

              ft.geometry = ftGeomColl;
              ft.geometry.rotate(angle, feat_geom);

              features.push(ft);

            });
            this.removeAllFeatures();
            this.addFeatures(features);
          }});
          app.map.addLayer(layer.layer);

          /*
          $.ajax({
            url: url,
            async: false,
            dataType: 'json',
            success: function (data) {
              var features = [];
              $.each(data.features, function(feat_ndx, feat)
              {
                var ptGeom = new OpenLayers.Geometry.Point(feat.geometry.coordinates[0],feat.geometry.coordinates[1]);
                var ft = new OpenLayers.Feature.Vector();
                //ft.geometry = ptGeom;
                ft.attributes = feat.properties;
                var speed = feat.properties.obs_value;
                var angle = feat.properties.dir_value;

                var xp = ptGeom.x;
                var yp = ptGeom.y;
                var line = new OpenLayers.Geometry.LineString([new OpenLayers.Geometry.Point(xp, yp-speed/20 - 12*map.resolution), new OpenLayers.Geometry.Point(xp, yp)]);

                var ftGeomColl = new OpenLayers.Geometry.Collection();
                ftGeomColl.addComponent(line);
                ftGeomColl.addComponent(ptGeom);

                ft.geometry = ftGeomColl;
                ft.geometry.rotate(angle, ft.geometry);
                features.push(ft);

              });
              var strategies = [new OpenLayers.Strategy.Fixed()];
              layer.layer = new OpenLayers.Layer.Vector(layer.name, {
                  projection: "EPSG:4326",
                  strategies: strategies
                  //styleMap: style_map
              });
              layer.layer.addFeatures(features);

              layer.layer.opacity = layer.opacity();
              layer.layer.setVisibility(true);
              app.map.addLayer(layer.layer);

            }
          });
          */
        }

        /*else { //if XYZ with no utfgrid
            // adding layer to the map for the first time
            layer.layer = new OpenLayers.Layer.XYZ(layer.name,
                //layer.type === 'XYZ' ? layer.url : layer.url + '.png',
                layer.url,
                $.extend({}, opts,
                    {
                        sphericalMercator: true,
                        isBaseLayer: false //previously set automatically when allOverlays was set to true, must now be set manually
                    }
                )
            );

            //2013-02-20 DWR
            layer.layer.setVisibility(isVisible);
            app.map.addLayer(layer.layer);

        }*/
    }
    else if ( layer.utfurl ) { //re-adding utfcontrol for existing utf layers (they are destroyed in layer.deactivateLayer)
        //layer.utfcontrol = app.addUTFControl(layer);
        //app.map.addControl(layer.utfcontrol);
    }
    if(layer.layer)
    {
      layer.layer.opacity = layer.opacity();
      layer.layer.setVisibility(true);
    }
};

app.setLayerVisibility = function(layer, visibility) {
    // if layer is in openlayers, hide it
    if (layer.layer) {
        layer.layer.setVisibility(visibility);
    }
};

app.setLayerZIndex = function(layer, index) {
    layer.layer.setZIndex(index);
};


app.reCenterMap = function () {
    app.map.setCenter(new OpenLayers.LonLat(app.state.x, app.state.y).transform(
        new OpenLayers.Projection("EPSG:4326"), new OpenLayers.Projection("EPSG:900913")), 7)
}

// block mousehweel when over overlay
$("#overview-overlay-text").hover(
    // mouseenter
    function () {
        var controls = app.map.getControlsByClass('OpenLayers.Control.Navigation');
        for(var i = 0; i < controls.length; ++i) {
            controls[i].disableZoomWheel();
        }

    },
    function () {
        var controls = app.map.getControlsByClass('OpenLayers.Control.Navigation');
        for(var i = 0; i < controls.length; ++i) {
            controls[i].enableZoomWheel();
        }
    }
)

