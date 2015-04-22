
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
        } else if (layer.type === 'Vector') {
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
        }
        else if (layer.type === 'ArcRest') {

            var url = layer.url.replace('export', layer.arcgislayers + '/query');
            var esriQueryFields = [];
            for(var i = 0; i < layer.attributes.length; i++)
            {
              //esriQueryFields.push(layer.attributes[i].display);
              esriQueryFields.push(layer.attributes[i].field);
            }
            layer.queryControl = new OpenLayers.Control.ArcGisRestQuery(
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
              });
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
            app.map.addControl(layer.queryControl);

        }

        //DWR 2015-03-13
        //Added the WMST(time) as well as attempt to use the params
        //and options.
        else if (layer.type === 'WMS' || layer.type === 'WMST') {

	    //OpenLayers.ProxyHost="\proxy\?url=";

            layer.layer = new OpenLayers.Layer.WMS(
                layer.name,
                layer.url,
                layer.openlayers_options.params,
                layer.openlayers_options.options
            );

/*
	    layer.layer.getURL = function () {
		window.alert("test6");
            }
*/

/*
layer.layer.getFullRequestString = function(newParams, altUrl) {
        var mapProjection = this.map.getProjectionObject();
        var projectionCode = this.projection && this.projection.equals(mapProjection) ?
            this.projection.getCode() :
            mapProjection.getCode();
        //var value = (projectionCode == "none") ? null : projectionCode;
        var value = '4326';
        if (parseFloat(this.params.VERSION) >= 1.3) {
            this.params.CRS = value;
        } else {
            this.params.SRS = value;
        }

        if (typeof this.params.TRANSPARENT == "boolean") {
            newParams.TRANSPARENT = this.params.TRANSPARENT ? "TRUE" : "FALSE";
        }

        return OpenLayers.Layer.Grid.prototype.getFullRequestString.apply(
                                                    this, arguments);
    }
*/

            //2013-02-20 DWR
            //layer.layer.setVisibility(isVisible);
            //app.map.addLayer(layer.layer);

	    //JTC 2015-04-03
	    /*
	    layer.layer.events.register("loadstart", null, function () {
	      app.viewModel.layerloadcounter(app.viewModel.layerloadcounter()+1); //auto-increment for knockout
	    });

	    layer.layer.events.register("loadend", null, function () {
	      app.viewModel.layerloadcounter(app.viewModel.layerloadcounter()-1); //auto-decrement for knockout
	    });

	    layer.layer.events.register("loadcancel", null, function () {
	      app.viewModel.layerloadcounter(app.viewModel.layerloadcounter()-1); //auto-decrement for knockout
	    });
	   */

	    //JTC 2015-03-08 point query



	  /* 
	    layer.queryControl = infoControls = {
            click: new OpenLayers.Control.WMSGetFeatureInfo({
                url: 'http://demo.boundlessgeo.com/geoserver/wms', 
                title: 'Identify features by clicking',
                layers: [water],
                queryVisible: true
            })
        }; 
*/

           //var esriQueryFields = [];
	   //var test3 = "http://129.252.37.120/proxy/rest_query/?url="+layer.url;
	   //var test3 = "http://129.252.37.120/proxy/";
	   var test3 = layer.url;
      	   var currentBBOX = '-101.085752%2C13.163738%2C-67.537218%2C39.37353';

           layer.queryControl = new OpenLayers.Control.WMSGetFeatureInfo(
              {
                eventListeners: {

                  getfeatureinfo : function(evt)
                  {
                	//window.alert("test1");  
                	window.alert(evt.text);  
		  }

                  //This is the handler for the return click data.
/*
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
	
*/

                //},
                },

		//var test3 = "http://129.252.37.120/proxy/rest_query/?url="+layer.url;
		layerUrls : [layer.url],
                //url : 'http://tds.secoora.org/ncWMS/wms?&LAYERS=sabgom%2Fsalt&ELEVATION=-0.013888888888888888&TIME=2015-04-09T00:00:00.000Z/2015-04-10T00:00:00.000Z&TRANSPARENT=true&STYLES=boxfill%2Frainbow&COLORSCALERANGE=19.180286%2C37.85561&NUMCOLORBANDS=250&LOGSCALE=false&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&EXCEPTIONS=application%2Fvnd.ogc.se_inimage&FORMAT=text%2Fxml&SRS=EPSG%3A4326&BBOX=-101.085752%2C13.163738%2C-67.537218%2C39.37353&X=389&Y=97&INFO_FORMAT=text/xml&QUERY_LAYERS=sabgom%2Fsalt&WIDTH=512&HEIGHT=400',
                //url : 'http://tds.secoora.org/ncWMS/wms?&LAYERS=sabgom%2Fsalt&ELEVATION=-0.013888888888888888&TIME=2015-04-09T00:00:00.000Z/2015-04-10T00:00:00.000Z&TRANSPARENT=true&STYLES=boxfill%2Frainbow&COLORSCALERANGE=19.180286%2C37.85561&NUMCOLORBANDS=250&LOGSCALE=false&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&EXCEPTIONS=application%2Fvnd.ogc.se_inimage&FORMAT=text%2Fxml&SRS=EPSG%3A4326&INFO_FORMAT=text/xml&QUERY_LAYERS=sabgom%2Fsalt&WIDTH=512&HEIGHT=400&BBOX=-101.085752%2C13.163738%2C-67.537218%2C39.37353',
                //url : 'http://tds.secoora.org/ncWMS/wms?&LAYERS=sabgom%2Fsalt&ELEVATION=-0.013888888888888888&TIME=2015-04-09T00:00:00.000Z/2015-04-10T00:00:00.000Z&STYLES=boxfill%2Frainbow&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&EXCEPTIONS=application%2Fvnd.ogc.se_inimage&FORMAT=text%2Fxml&SRS=EPSG%3A4326&INFO_FORMAT=text/xml&QUERY_LAYERS=sabgom%2Fsalt&WIDTH=512&HEIGHT=400&BBOX=-101.085752%2C13.163738%2C-67.537218%2C39.37353',
                //url : 'http://tds.secoora.org/ncWMS/wms?ELEVATION=-0.013888888888888888&TIME=2015-04-09T00:00:00.000Z/2015-04-10T00:00:00.000Z&EXCEPTIONS=application%2Fvnd.ogc.se_inimage&FORMAT=text%2Fxml&SRS=EPSG%3A4326&INFO_FORMAT=text/xml&BBOX=-101.085752%2C13.163738%2C-67.537218%2C39.37353',
                //url : 'http://tds.secoora.org/ncWMS/wms?ELEVATION=-0.013888888888888888&TIME=2015-04-09T00:00:00.000Z/2015-04-10T00:00:00.000Z&EXCEPTIONS=application%2Fvnd.ogc.se_inimage&FORMAT=text%2Fxml&INFO_FORMAT=text/xml&BBOX='+currentBBOX,
                url : 'http://tds.secoora.org/ncWMS/wms?ELEVATION=-0.013888888888888888&TIME=2015-04-09T00:00:00.000Z/2015-04-10T00:00:00.000Z&EXCEPTIONS=application%2Fvnd.ogc.se_inimage&FORMAT=text%2Fxml&INFO_FORMAT=text/xml',
                //url : 'http://tds.secoora.org/ncWMS/wms?ELEVATION=-0.013888888888888888&TIME=2015-04-09T00:00:00.000Z/2015-04-10T00:00:00.000Z&EXCEPTIONS=application%2Fvnd.ogc.se_inimage&FORMAT=text%2Fxml&INFO_FORMAT=text/xml&SRS=EPSG%3A4326&BBOX=-101.085752%2C13.163738%2C-67.537218%2C39.37353',
                //url : layer.url+'TIME=2015-04-09T00:00:00.000Z/2015-04-10T00:00:00.000Z&FORMAT=text/xml&INFO_FORMAT=text/xml',
                //url : "http://129.252.37.120/proxy/rest_query/?url="+layer.url,
                //url : test3,
                //url : layer.url,
                //layerid : layer.arcgislayers,
                sr : 102113,
                clickTolerance: 3,
                layers: [layer.layer],
                queryVisible: true,

                //infoFormat: 'text/xml',
                //format: new OpenLayers.Format.XML

                //outFields : esriQueryFields.length ? esriQueryFields.join(',') : '*'
              });
	    
	    /*
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
	    */

            //2013-02-20 DWR
            layer.layer.setVisibility(isVisible);
            app.map.addLayer(layer.layer);
            //2013-02-20 DWR
            //Add the identify control.
            app.map.addControl(layer.queryControl);

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

/*
            layer.layer.events.register("getfeatureinfo", null, function () {
              window.alert("test2"); //auto-decrement for knockout
            });


	    //layer.queryControl.click.activate();
	    layer.layer.click.activate();
*/

        }
        else { //if XYZ with no utfgrid
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

        }
    }
    else if ( layer.utfurl ) { //re-adding utfcontrol for existing utf layers (they are destroyed in layer.deactivateLayer)
        //layer.utfcontrol = app.addUTFControl(layer);
        //app.map.addControl(layer.utfcontrol);
    }
    layer.layer.opacity = layer.opacity();
    layer.layer.setVisibility(true);
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
