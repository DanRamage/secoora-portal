function bisect_left(search_value, values_array)
{
  var lo = 0;
  var hi = values_array.length - 1;
  var closest_ndx = -1;
  var middle = Math.round((hi + lo) / 2 + 0.5);
  var found = false;

  //exit with highest or lowest value if outside of range
  if(search_value >= values_array[hi])
  {
    found = true;
    closest_ndx = hi;
  }
  if(search_value <= values_array[lo])
  {
    found = true;
    closest_ndx = lo;
  }

  while(!found)
  {
    if(hi - lo < 3)
    {
      found = true;
      closest_ndx = middle;
      break;
    }
    if(search_value >= values_array[middle])
    {
      lo = middle;
    }
    else if(search_value <= values_array[middle])
    {
      hi = middle;
    }
    middle = Math.round((hi + lo) / 2 + 0.5);
  }
  return(closest_ndx);
}
function layerModel(options, parent) {
    var self = this,
        $descriptionTemp;

    // properties
    self.id = options.id || null;
    self.name = options.name || null;
    self.featureAttributionName = self.name;
    self.url = options.url || null;
    self.arcgislayers = options.arcgis_layers || 0;
    self.type = options.type || null;
    self.utfurl = options.utfurl || false;
    self.legend = options.legend || false;
    self.learn_link = options.learn_link || null;
    self.legendVisibility = ko.observable(false);
    self.legendTitle = options.legend_title || false;
    self.legendType = null;
    self.legendSubTitle = options.legend_subtitle || false;
    self.legendTable = ko.observable(false);
    self.themes = ko.observableArray();
    //self.attributeTitle = options.attributes ? options.attributes.title : self.name;
    self.attributes = options.attributes ? options.attributes.attributes : [];
    self.compress_attributes = options.attributes ? options.attributes.compress_attributes : false;
    self.attributeEvent = options.attributes ? options.attributes.event : [];
    self.lookupField = options.lookups ? options.lookups.field : null;
    self.lookupDetails = options.lookups ? options.lookups.details : [];
    self.color = options.color || "#ee9900";
    self.fillOpacity = options.fill_opacity || 0.0;
    self.defaultOpacity = options.opacity || 0.5;
    self.opacity = ko.observable(self.defaultOpacity);
    self.graphic = options.graphic || null;
    self.status_field = options.status_field || "";

    self.sharedBy = ko.observable(false);
    self.shared = ko.observable(false);

    self.requestTime = ko.observable("");
    self.timeSteps = [];
    self.currentTimeNdx = -1;
    self.closestTime = ko.observable("");

    self.observation_name = options.observation_name || null;
    self.units = options.units || null;
    self.units_display = options.units_display || null;

    //DWR 2015-05-12
    self.layerLoading = ko.observable(false);

    self.restLegend = [];

    //self.layer = null;

    OpenLayers.ProxyHost = "http://129.252.37.120/proxy/rest_query?url="
    //WHen the layer is issued the identify request, if there are results there, this is set to true.
    self.layerDataAvailable = ko.observable(false);

    if(self.type === 'ArcRest')
    {

      var url = self.url.replace('export','/identify');
      var srCode = app.map.getProjection().split(':');


      self.arcfeatureidentify = function()
      {
        //When request is sent, reset the flag.
        self.layerDataAvailable(false);
      };
    }
    self.openlayers_options = null;
    if(options.openlayers_options.length)
    {
      try
      {
        self.openlayers_options = $.parseJSON(unescape(options.openlayers_options));
      }
      catch(err)
      {
        alert(err);
      }
    }


    // set target blank for all links
    if (options.description) {
        $descriptionTemp = $("<div/>", {
            html: options.description
        });
        $descriptionTemp.find('a').each(function() {
            $(this).attr('target', '_blank');
        });
        self.description = $descriptionTemp.text();
    } else {
        self.description = null;
    }
    self.legendType = 'html';
    if(self.legend.length)
    {
      var parseUrl = document.createElement('a');
      parseUrl.href = self.legend;
      //if(parseUrl.search.length)
      if(self.legend.indexOf("GetLegendGraphic") !== -1 || self.legend.indexOf(".png"))
      {
        self.legendType = 'img';
      }

    }    // opacity

    self.getHTMLLegend = function(legendURL)
    {
      self.legendTable('Loading: ' + legendURL);

      $.get('/proxy/get_legend_json?url=' + legendURL, function(data) {
        self.legendTable(data);
      });
    };

    // set overview text for Learn More option
    if (options.overview) {
        self.overview = options.overview;
    } else if (parent && parent.overview) {
        self.overview = parent.overview;
    } else if (self.description) {
        self.overview = self.description;
    } else if (parent && parent.description) {
        self.overview = parent.description;
    } else {
        self.overview = null;
    }

    // set data source and data notes text
    self.data_source = options.data_source || null;
    if (! self.data_source && parent && parent.data_source) {
        self.data_source = parent.data_source;
    }
    self.data_notes = options.data_notes || null;
    if (! self.data_notes && parent && parent.data_notes) {
        self.data_notes = parent.data_notes;
    }

    // set download links
    self.kml = options.kml || null;
    self.data_download = options.data_download || null;
    self.metadata = options.metadata || null;
    self.source = options.source || null;
    self.tiles = options.tiles || null;

    self.opacity.subscribe(function(newOpacity)
    {
      //DWR 2015-05-08 Check to make sure the layer has been created. Currently for WMST layers,
      //we query the server to get the timesteps for the layer before creating it, so when we load
      //a bookmark, the loadCompressedState function that unpacks the bookmark was attempting to
      //set the opacity assuming that the layer exists. Normally this is the case.
      if(self.layer) {
        if (self.layer.CLASS_NAME === "OpenLayers.Layer.Vector") {
          self.layer.styleMap.styles['default'].defaultStyle.strokeOpacity = newOpacity;
          self.layer.styleMap.styles['default'].defaultStyle.graphicOpacity = newOpacity;
          //fill is currently turned off for many of the vector layers
          //the following should not override the zeroed out fill opacity
          //however we do still need to account for shipping lanes (in which styling is handled via lookup)
          if (self.fillOpacity > 0) {
            var newFillOpacity = self.fillOpacity - (self.defaultOpacity - newOpacity);
            self.layer.styleMap.styles['default'].defaultStyle.fillOpacity = newFillOpacity;
          }
          self.layer.redraw();
        }
        else {
          self.layer.setOpacity(newOpacity);
        }
      }
    });

    // is description active
    self.infoActive = ko.observable(false);
    app.viewModel.showOverview.subscribe( function() {
        if ( app.viewModel.showOverview() === false ) {
            self.infoActive(false);
        }
    });
    //DWR 2015-04-20
    self.infoStatus = function()
    {
      //Default is normal info button, black background.
      var info_button_status = "";
      if(self.subLayers.length)
      {
        $.each(self.subLayers, function (nd, layer) {
          if(layer.status_field.length)
          {
            info_button_status = "info_status_layer_issue";
            return;
          }
        });
      }
      //Layer may not have sublayers.
      else if(self.status_field.length)
      {
        info_button_status = "info_status_layer_issue";
      }
      return(info_button_status);
    };
    // is the layer a checkbox layer
    self.isCheckBoxLayer = ko.observable(false);
    if (self.type === 'checkbox') {
        self.isCheckBoxLayer(true);
    }

    // is the layer in the active panel?
    self.active = ko.observable(false);
    // is the layer visible?
    self.visible = ko.observable(false);

    self.activeSublayer = ko.observable(false);
    self.visibleSublayer = ko.observable(false);

    self.subLayers = [];

    // save a ref to the parent, if it exists
    if (parent) {
        self.parent = parent;
        self.fullName = self.parent.name + " (" + self.name + ")";
        if ( ! self.legendTitle ) {
            self.legendTitle = self.parent.legendTitle;
        }
        if ( ! self.legendSubTitle ) {
            self.legendSubTitle = self.parent.legendSubTitle;
        }
    } else {
        self.fullName = self.name;
    }


    self.toggleLegendVisibility = function() {
        var layer = this;
        layer.legendVisibility(!layer.legendVisibility());
    };

    self.hasVisibleSublayers = function() {
        if ( !self.subLayers ) {
            return false;
        }
        var visibleSubLayers = false;
        $.each(self.subLayers, function(i, sublayer) {
            if (sublayer.visible()) {
                visibleSubLayers = true;
            }
        });
        return visibleSubLayers;
    };

    self.deactivateLayer = function() {
        var layer = this;

        //deactivate layer
        self.deactivateBaseLayer();

        //remove related utfgrid layer
        if (layer.utfgrid) {
            self.deactivateUtfGridLayer();
        }
        //remove parent layer
        if (layer.parent) {
            self.deactivateParentLayer();
        }
        //remove sublayer
        if (layer.activeSublayer()) {
            self.deactivateSublayer();
        }
        //DWR
        //Deactivate the queryControl on the layer if it has one.
        if("queryControl" in layer)
        {
          layer.activate_query_controls(false);
          //layer.queryControl.deactivate();
          app.viewModel.attributeDataArray.remove(function(layerData) {
              if(layerData.title == layer.name)
              {
                return(true);
              }
              return(false);
            });

        }

        layer.layer = null;

    };

    // called from deactivateLayer
    self.deactivateBaseLayer = function() {
        var layer = this;
        // remove from active layers
        app.viewModel.activeLayers.remove(layer);

        //remove the key/value pair from aggregatedAttributes
        app.viewModel.removeFromAggregatedAttributes(layer.name);

        layer.active(false);
        layer.visible(false);

        app.setLayerVisibility(layer, false);
        layer.opacity(layer.defaultOpacity);

        if ($.inArray(layer.layer, app.map.layers) !== -1) {
            app.map.removeLayer(layer.layer);
        }
    };

    // called from deactivateLayer
    self.deactivateUtfGridLayer = function() {
        var layer = this;
        //NEED TO CHECK FOR PARENT LAYER HERE TOO...?
        //the following removes this layers utfgrid from the utfcontrol and prevents continued utf attribution on this layer
        app.map.UTFControl.layers.splice($.inArray(layer.utfgrid, app.map.UTFControl.layers), 1);
        app.map.removeLayer(layer.utfgrid);
    };

    // called from deactivateLayer
    self.deactivateParentLayer = function() {
        var layer = this;
        if (layer.parent && layer.parent.isCheckBoxLayer()) { // if layer has a parent and that layer is a checkbox layer
            // see if there are any remaining active sublayers in this checkbox layer
            var stillActive = false;
            $.each(layer.parent.subLayers, function(i, sublayer) {
                if ( sublayer.active() ) {
                    stillActive = true;
                }
            });
            // if there are no remaining active sublayers, then deactivate parent layer
            if (!stillActive) {
                layer.parent.active(false);
                layer.parent.activeSublayer(false);
                layer.parent.visible(false);
                layer.parent.visibleSublayer(false);
            }
            //check to see if any sublayers are still visible
            if (!layer.parent.hasVisibleSublayers()) {
                layer.parent.visible(false);
            }
        } else if (layer.parent) { // if layer has a parent
            // turn off the parent shell layer
            layer.parent.active(false);
            layer.parent.activeSublayer(false);
            layer.parent.visible(false);
            layer.parent.visibleSublayer(false);
        }
    };

    // called from deactivateLayer
    self.deactivateSublayer = function() {
        var layer = this;
        if ($.inArray(layer.activeSublayer().layer, app.map.layers) !== -1) {
            app.map.removeLayer(layer.activeSublayer().layer);
        }
        layer.activeSublayer().deactivateLayer();
        layer.activeSublayer(false);
        layer.visibleSublayer(false);
        if("queryControl" in layer)
        {
          layer.activate_query_controls(false);
          //layer.queryControl.deactivate();
          app.viewModel.attributeDataArray.remove(function(layerData) {
              if(layerData.title == layer.name)
              {
                return(true);
              }
              return(false);
            });

        }

        layer.layer = null;

    };

    self.activateLayer = function(layerVisible)
    {
      //2013-02-20 DWR
      //Added so we can use the topic button to add the layers into the Active tab, but not make them visible.
      var isVisible = typeof(layerVisible) === "undefined" ? true : layerVisible;
      var layer = this;

      if (!layer.active() && layer.type !== 'placeholder')
      {
        //app.addLayerToMap(layer, isVisible);
        //DWR 2015-03-17
        //For WMST layers that have time steps, we need to first query the
        //time steps available for the layer before enabling the layer.
        if(self.type === 'WMST' && self.timeSteps.length === 0)
        {
          self.get_time_increments(function(results)
          {
            self.timeSteps = results['time_steps'];

            self.activateBaseLayer();
            if (layer.parent)
            {
              self.activateParentLayer();
            }
          });
        }
        else
        {
          self.activateBaseLayer();
          // save reference in parent layer
          if (layer.parent) {
            self.activateParentLayer();
          }
        }
        if(self.legendTable() === false && self.legendType !== "img" && self.legend.length)
        {
          self.getHTMLLegend(self.legend);
        }
        //add utfgrid if applicable
        if (layer.utfgrid) {
            self.activateUtfGridLayer();
        }

      }
      //DWR 2015-05-05
      //If the query control is activate and this is the top layer, enable the control.
      /*
      if(self.queryFeatureActive() && app.viewModel.isTopLayer(layer))
      {
        layer.activate_query_controls(true);
        //Disable the query control in the other layers.
      }
      */

    };

    // called from activateLayer
    self.activateBaseLayer = function()
    {
      var layer = this;

      app.addLayerToMap(layer);
      //DWR 2015-03-17
      //For WMST layers that have time steps, we need to provide the initial
      //time value to use.
      if(layer.type === 'WMST' && self.timeSteps.length > 0)
      {
        // save reference in parent layer
        var now_date = new Date();
        var startingEpochDatetime = now_date.getTime();
        var closest_date_ndx = bisect_left(Math.round(startingEpochDatetime / 1000), layer.timeSteps);
        if (closest_date_ndx != -1)
        {
          var closest_date = new Date(layer.timeSteps[closest_date_ndx] * 1000);
          layer.closestTime(app.viewModel.timelineTool.get_wmst_date(closest_date));

          layer.layer.mergeNewParams({'TIME':layer.closestTime()});

        }
      }
      //now that we now longer use the selectfeature control we can simply do the following
      app.viewModel.activeLayers.unshift(layer);

      // set the active flag
      layer.active(true);
      layer.visible(true);
    };

    // called from activateLayer
    self.activateParentLayer = function() {
        var layer = this;
        if (layer.parent.type === 'radio' && layer.parent.activeSublayer()) {
            // only allow one sublayer on at a time
            layer.parent.activeSublayer().deactivateLayer();
        }
        layer.parent.active(true);
        layer.parent.activeSublayer(layer);
        layer.parent.visible(true);
        layer.parent.visibleSublayer(layer);
    };

    // called from activateLayer
    self.activateUtfGridLayer = function() {
        var layer = this;

        app.map.UTFControl.layers.unshift(layer.utfgrid);
    };

    // bound to click handler for layer visibility switching in Active panel
    self.toggleVisible = function() {
        var layer = this;

        if (layer.visible()) { //make invisible
            self.setInvisible(layer);
        } else { //make visible
            self.setVisible(layer);
        }
    };

    self.setVisible = function() {
        var layer = this;

        layer.visible(true);
        if (layer.parent) {
            layer.parent.visible(true);
        }
        app.setLayerVisibility(layer, true);

        //add utfgrid if applicable
        if (layer.utfgrid) {
            app.map.UTFControl.layers.splice($.inArray(this, app.viewModel.activeLayers()), 0, layer.utfgrid);
        }
    };

    self.setInvisible = function() {
        var layer = this;

        layer.visible(false);
        if (layer.parent) {
            // if layer.parent is not a checkbox, set parent to invisible
            if (layer.parent.type !== 'checkbox') {
                layer.parent.visible(false);
            } else { //otherwise layer.parent is checkbox
                //check to see if any sublayers are still visible
                if (!layer.parent.hasVisibleSublayers()) {
                    layer.parent.visible(false);
                }
            }
        }
        app.setLayerVisibility(layer, false);

        app.viewModel.removeFromAggregatedAttributes(layer.name);

        if ($.isEmptyObject(app.viewModel.visibleLayers())) {
            app.viewModel.closeAttribution();
        }

        //remove related utfgrid layer
        if (layer.utfgrid) {
            //the following removes this layers utfgrid from the utfcontrol and prevents continued utf attribution on this layer
            app.map.UTFControl.layers.splice($.inArray(this.utfgrid, app.map.UTFControl.layers), 1);
        }
    };

    self.showSublayers = ko.observable(false);

    //Work around for accordion issue with transitions and tabs.
    self.showPGToolSublayers = ko.observable(false);
    self.togglePGToolLayerActive = function(self,event)
    {
      var layer = this;
      app.viewModel.activeLayer(layer);

      //handle possible dropdown/sublayer behavior
      if (layer.subLayers.length)
      {
        app.viewModel.activeParentLayer(layer);
        if (!layer.activeSublayer())
        { //if layer does not have an active sublayer, then show/hide drop down menu
          if (!layer.showPGToolSublayers()) {
              //show drop-down menu
              layer.showPGToolSublayers(true);
          }
          else {
              //hide drop-down menu
              layer.showPGToolSublayers(false);
          }
        }
        else if ( layer.type === 'checkbox' )
        { //else if layer does have an active sublayer and it's checkbox (not radio)
          if (!layer.showPGToolSublayers()) {
              //show drop-down menu
              layer.showPGToolSublayers(true);
          }
          else {
              //hide drop-down menu
              layer.showPGToolSublayers(false);
          }
        }
        else if ( layer.type === 'radio' )
        { //perhaps same behavior should
          if (!layer.showPGToolSublayers()) {
              //show drop-down menu
              layer.showPGToolSublayers(true);
          }
          else {
              //hide drop-down menu
              layer.showPGToolSublayers(false);
          }
        }
        else
        {
          //turn off layer
          layer.deactivateLayer();
          layer.showPGToolSublayers(false);
        }
        return;
      }

      if (layer.active()) { // if layer is active
          layer.deactivateLayer();
      } else { // otherwise layer is not currently active
          layer.activateLayer();
      }

    };

    self.showSublayers.subscribe(function () {
        setTimeout(function () {
            if ( app.viewModel.activeLayer().subLayers.length > 1 ) {
                //$('.layer').find('.open .layer-menu').jScrollPane();
            }
        });
    });

    // bound to click handler for layer switching
    self.toggleActive = function(self, event) {
        var layer = this;

        // save a ref to the active layer for editing,etc
        app.viewModel.activeLayer(layer);

        //handle possible dropdown/sublayer behavior
        if (layer.subLayers.length) {
            app.viewModel.activeParentLayer(layer);
            if ( app.embeddedMap ) { // if data viewer is mobile app
                $('.carousel').carousel('prev');
                var api = $("#sublayers-div").jScrollPane({}).data('jsp');
                if ( api ) {
                    api.destroy();
                }
                $('#mobile-data-right-button').show();
                $('#mobile-map-right-button').hide();
            }
            else if (!layer.activeSublayer()) { //if layer does not have an active sublayer, then show/hide drop down menu
                if (!layer.showSublayers()) {
                    //show drop-down menu
                    layer.showSublayers(true);
                }
                else {
                    //hide drop-down menu
                    layer.showSublayers(false);
                }
            }
            else if ( layer.type === 'checkbox' ) { //else if layer does have an active sublayer and it's checkbox (not radio)
                if (!layer.showSublayers()) {
                    //show drop-down menu
                    layer.showSublayers(true);
                }
                else {
                    //hide drop-down menu
                    layer.showSublayers(false);
                }
            }
            else if ( layer.type === 'radio' ) { //perhaps same behavior should
                if (!layer.showSublayers()) {
                    //show drop-down menu
                    layer.showSublayers(true);
                }
                else {
                    //hide drop-down menu
                    layer.showSublayers(false);
                }
            }
            else {
                //turn off layer
                layer.deactivateLayer();
                layer.showSublayers(false);
            }
            return;
        }

        // start saving restore state again and remove restore state message from map view
        app.saveStateMode = true;
        app.viewModel.error(null);

        if (layer.active()) { // if layer is active
            layer.deactivateLayer();
        } else { // otherwise layer is not currently active
            layer.activateLayer();
        }
    };


    self.raiseLayer = function(layer, event) {
        var current = app.viewModel.activeLayers.indexOf(layer);
        if (current === 0) {
            // already at top
            return;
        }
        //DWR 2015-05-05
        //Disable any active query controls on the other layers.
        $.each(app.viewModel.activeLayers, function(ndx, lower_layer)
        {
          lower_layer.activate_query_controls(false);
        });
        layer.activate_query_controls(true);

        $(event.target).closest('tr').fadeOut('fast', function() {
            app.viewModel.activeLayers.remove(layer);
            app.viewModel.activeLayers.splice(current - 1, 0, layer);
        });
    };

    self.lowerLayer = function(layer, event) {
        var current = app.viewModel.activeLayers.indexOf(layer);
        if (current === app.viewModel.activeLayers().length) {
            // already at top
            return;
        }
        $(event.target).closest('tr').fadeOut('fast', function() {
            app.viewModel.activeLayers.remove(layer);
            app.viewModel.activeLayers.splice(current + 1, 0, layer);
        });
    };

    self.showingLayerAttribution = ko.observable(true);
    self.toggleLayerAttribution = function() {
        var layerID = '#' + app.viewModel.convertToSlug(self.name);
        if ( self.showingLayerAttribution() ) {
            self.showingLayerAttribution(false);
            $(layerID).css('display', 'none');
        } else {
            self.showingLayerAttribution(true);
            $(layerID).css('display', 'block');
        }
        //update scrollbar
        app.viewModel.updateAggregatedAttributesOverlayScrollbar();
    };

    self.toggleSublayerDescription = function(layer) {
        if ( ! self.infoActive() ) {
            self.showSublayerDescription(self);
        } else if (layer === app.viewModel.activeInfoSublayer()) {
        } else {
            self.showDescription(self);
        }
    };

    self.showSublayerDescription = function(layer) {
        app.viewModel.showOverview(false);
        app.viewModel.activeInfoSublayer(layer);
        layer.infoActive(true);
        layer.parent.infoActive(true);
        app.viewModel.showOverview(true);
        app.viewModel.updateCustomScrollbar('#overview-overlay-text');
        //app.viewModel.updateDropdownScrollbar('#overview-overlay-dropdown');
        app.viewModel.hideMapAttribution();
    };

    // display descriptive text below the map
    self.toggleDescription = function(layer) {
        if ( ! layer.infoActive() ) {
            self.showDescription(layer);
        } else {
            self.hideDescription(layer);
        }
    };

    self.showDescription = function(layer) {
        app.viewModel.showOverview(false);
        app.viewModel.activeInfoSublayer(false);
        app.viewModel.activeInfoLayer(layer);
        self.infoActive(true);
        if (layer.subLayers.length > 0) {
            $('#overview-overlay').height(195);
        } else {
            $('#overview-overlay').height(186);
        }
        app.viewModel.showOverview(true);
        app.viewModel.updateCustomScrollbar('#overview-overlay-text');
        //app.viewModel.updateDropdownScrollbar('#overview-overlay-dropdown');
        app.viewModel.hideMapAttribution();
    };

    self.hideDescription = function(layer) {
        app.viewModel.showOverview(false);
        app.viewModel.activeInfoSublayer(false);
        app.viewModel.showMapAttribution();
    };

    self.toggleDescriptionMenu = function(layer) {
        //console.dir(layer);
    };


    self.showTooltip = function(layer, event) {
        var layerActual;
        $('#layer-popover').hide();
        if (layer.activeSublayer() && layer.activeSublayer().description) {
            layerActual = layer.activeSublayer();
        } else {
            layerActual = layer;
        }
        if (layerActual.description) {
            app.viewModel.layerToolTipText(layerActual.description);
            $('#layer-popover').show().position({
                "my": "right middle",
                "at": "left middle",
                "of": $(event.target).closest(".btn-group")
            });
        }
    };

    // remove the layer dropdrown menu
    self.closeMenu = function(layer, event) {
        $(event.target).closest('.btn-group').removeClass('open');
        layer.showSublayers(false);
    };

    self.get_time_increments = function(callback_function)
    {
      $.ajax({
          async: true,
          url: '/data_manager/get_time_increments/'+ self.id,
          type: 'POST',
          dataType: 'json',
          success: callback_function,
          error: function(result) { }
      });

    };
    //DWR 2015-05-05 Move this out from ArcRest layers since any layer could have a control.
    //Anything added to this list should be a OpenLayers.Control object.
    self.queryControl = [];
    self.activate_query_controls = function(activate_flag)
    {
      $.each(self.queryControl, function(ndx, q_control)
      {
        if(activate_flag)
        {
          q_control.activate();
        }
        else
        {
          q_control.deactivate();
        }
      });
    };
    return self;
} // end layerModel


function themeModel(options) {
    var self = this;
    self.name = options.display_name;
    self.id = options.id;
    self.description = options.description;
    self.learn_link = options.learn_link;

    // array of layers
    self.layers = ko.observableArray();

    //add to open themes
    self.setOpenTheme = function() {
        var theme = this;

        // ensure data tab is activated
        $('#dataTab').tab('show');

        if (self.isOpenTheme(theme)) {
            //app.viewModel.activeTheme(null);
            app.viewModel.openThemes.remove(theme);
            app.viewModel.updateScrollBars();
        } else {
            app.viewModel.openThemes.push(theme);
            //setTimeout( app.viewModel.updateScrollBar(), 1000);
            app.viewModel.updateScrollBars();
        }
    };

    //is in openThemes
    self.isOpenTheme = function() {
        var theme = this;
        if (app.viewModel.openThemes.indexOf(theme) !== -1) {
            return true;
        }
        return false;
    };

    //display theme text below the map
    self.setActiveTheme = function() {
        var theme = this;
        app.viewModel.activeTheme(theme);
        app.viewModel.activeThemeName(self.name);
        app.viewModel.themeText(theme.description);
    };

    // is active theme
    self.isActiveTheme = function() {
        var theme = this;
        if (app.viewModel.activeTheme() == theme) {
            return true;
        }
        return false;
    };

    self.pgToolThemeClick = function()
    {
      var theme = this;
      // ensure data tab is activated
      $('#polygonQueryTab').tab('show');

      if (self.isPGToolOpenTheme(theme))
      {
          app.viewModel.openPGToolsThemes.remove(theme);
          app.viewModel.updateScrollBars();
      }
      else
      {
          app.viewModel.openPGToolsThemes.push(theme);
          app.viewModel.updateScrollBars();
      }
    };

    //is in openThemes
    self.isPGToolOpenTheme = function() {
        var theme = this;

        if (app.viewModel.openPGToolsThemes.indexOf(theme) !== -1) {
            return true;
        }
        return false;
    };
    self.hideTooltip = function(theme, event) {
        $('.layer-popover').hide();
    };

    self.layerDataAvailable = ko.observableArray();
    self.restIdentifyControls = [];
    self.outstandingQueries = ko.observable(false);
    self.createIdControls = function()
    {
      self.addIdentifyEntry = function(layer)
      {
        var url = layer.url.replace('export','identify');

        var curControl = null;
        for(var j = 0; j < self.restIdentifyControls.length; j++)
        {
          //Check to see if we already have a control setup for this url, if so, we just add the layer index.
          if(self.restIdentifyControls[j].url === url)
          {
            curControl = self.restIdentifyControls[j];
            break;
          }
        }
        //Url is not already in a control, so we create one.
        if(curControl === null)
        {
          //Control for doing a REST identify for determining if the layer has data in the polygon.
          curControl = new OpenLayers.Control.GSAAPolygonRestIdentify({
            themeModel : self,
            viewModel : app.viewModel,
            proxy: "/proxy/rest_query/?url=",
            url : url,
            sr : srCode[1],
            tolerance : 2
          });
          self.restIdentifyControls.push(curControl);
        }
        //Add the array index to use in the identify.
        //curControl.layerIds.push(layer.arcgislayers);
        curControl.layerModels.push(layer);

      }
      var srCode = app.map.getProjection().split(':');
      for(var i = 0; i < self.layers().length; i++)
      {
        var layer = self.layers()[i];
        if(layer.subLayers.length === 0)
        {
          if(layer.type === "ArcRest")
          {
            this.addIdentifyEntry(layer);
          }
        }
        else
        {
          $.each(layer.subLayers, function(index, subLayer){
            if(subLayer.type === "ArcRest")
            {
              self.addIdentifyEntry(subLayer);
            }
          });
        }
      }
    };

    self.pgAvailableLayerDataCnt = ko.observable(0);
    self.idCntrlQueriesOutstanding = ko.observableArray([]);
    self.doPolygonQuery = function(polygon, feature)
    {
      self.pgAvailableLayerDataCnt(0);
      if(this.restIdentifyControls.length)
      {
        var mapExtent = app.map.getExtent();

        //Used to enable/disable the loading indicators on the theme accordion.
        this.outstandingQueries(true);
        for(var j = 0; j < this.restIdentifyControls.length; j++)
        {
          //if(j === 6)
          //{
            var identifyControl = this.restIdentifyControls[j];
            self.idCntrlQueriesOutstanding.push(identifyControl.url);

            identifyControl.geometry     = polygon;
            identifyControl.geometryType = "esriGeometryPolygon";
            identifyControl.mapExtent    = mapExtent.left + "," + mapExtent.bottom + "," + mapExtent.right + "," + mapExtent.top;
            identifyControl.imageDisplay = app.map.getSize().w + "," + app.map.getSize().h + ",96";
            identifyControl.doQuery(feature);
          //}
        }
      }
    }
    return self;
} // end of themeModel

function mapLinksModel() {
    var self = this;

    self.cancel = function() {
        $('#map-links-popover').hide();
    };

    self.getURL = function() {
        //return window.location.href;
        return 'http://129.252.37.120' + app.viewModel.currentURL();
    };

    self.shrinkURL = ko.observable();
    self.shrinkURL.subscribe( function() {
        if (self.shrinkURL()) {
            self.useShortURL();
        } else {
            self.useLongURL();
        }
    });

    self.useLongURL = function() {
        $('#short-url')[0].value = self.getURL();
    };

    self.useShortURL = function() {
        var bitly_login = "ecofletch",
            bitly_api_key = 'R_d02e03290041107b75e3720d7e3c4b95',
            long_url = self.getURL();

        $.getJSON(
            "http://api.bitly.com/v3/shorten?callback=?",
            {
                "format": "json",
                "apiKey": bitly_api_key,
                "login": bitly_login,
                "longUrl": long_url
            },
            function(response)
            {
                $('#short-url')[0].value = response.data.url;
            }
        );
    };

    self.getPortalURL = function() {
        var urlOrigin = window.location.origin,
            urlHash = window.location.hash;
        return urlOrigin + '/visualize/' + urlHash;
    };

    self.setIFrameHTML = function() {
        $('#iframe-html')[0].value = self.getIFrameHTML();
    };

    self.getIFrameHTML = function(bookmarkState) {
        var urlOrigin = window.location.origin,
            urlHash = window.location.hash;
        //console.log(urlOrigin);
        //console.log(urlHash);
        //console.log(app.viewModel.currentURL());
        //app.updateURL();
        //urlHash = app.viewModel.currentURL().replace('visualize/', '')
        if ( bookmarkState ) {
            urlHash = '#'+$.param(bookmarkState);
        }
        if ( !urlOrigin ) {
            urlOrigin = 'http://' + window.location.host;
        }
        var embedURL = urlOrigin + '/embed/map/' + urlHash;
        //console.log(embedURL);
        return '<iframe width="600" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"' +
                                     'src="' + embedURL + '">' + '</iframe>' + '<br />';
        //$('#iframe-html')[0].value = '<iframe width="600" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"' +
        //                             'src="' + embedURL + '">' + '</iframe>' + '<br />';
    };

    self.openIFrameExample = function(info) {
        var windowName = "newMapWindow",
            windowSize = "width=650, height=550";
            mapWindow = window.open('', windowName, windowSize);
        var urlOrigin = window.location.origin;
        if ( !urlOrigin ) {
            urlOrigin = 'http://' + window.location.host;
        }
        var header = '<a href="/visualize"><img src="'+urlOrigin+'/media/marco/img/marco-logo_planner.jpg" style="border: 0px;"/></a>';
        var iframeID = '';
        if (info === 'bookmark') {
            iframeID = '#bookmark-iframe-html';
        } else {
            iframeID = '#iframe-html';
        }
        mapWindow.document.write('<html><body>' + $(iframeID)[0].value + '</body></html>');
        mapWindow.document.title = "Your MARCO Map!";
        mapWindow.document.close();

    };

    return self;
} // end of mapLinks Model

function obs_data_model()
{
  var self = this;

  self.platform_name = ko.observable("");
  self.platform_desc = ko.observable("");
  self.organization_name = ko.observable("");
  self.obs_array = ko.observableArray([]);

  self.obs_name = ko.observable("");
  /*
  self.obs_value = ko.observable("");
  self.obs_uom = ko.observable("");
  self.obs_time = ko.observable("");
  self.dir_name = ko.observable("");
  self.dir_value = ko.observable("");
  self.dir_uom = ko.observable("");
  self.dir_time = ko.observable("");
  */
  self.active_obs_name = null;
  self.active_obs_uom = ko.observable("");
  self.flot_data = [];
  self.prev_tooltip_point = null;
  self.is_vector = false;
  $('#obs-click-popup').popoverClosable();
  $('#obs-hover-popup').popoverClosable();

  self.set_hover_data = function(observaton_name, data)
  {
    self.obs_name(observaton_name);
    self.organization_name(data.o_name);
    self.platform_name(data.p_name);
    self.platform_desc(data.p_description);
    self.obs_array.removeAll();
    $.each(data.obs, function(key, obs)
    {
      obs['name'] = key;
      self.obs_array.push(obs);
      if(key.indexOf('direction') != -1)
      {
        self.is_vector = true;
      }
    });
    self.active_obs_name = self.obs_array()[0].name;
    /*
    self.obs_value(data.obs_value);
    self.obs_uom(data.obs_uom);
    self.obs_time(data.obs_time);
    if('dir_name' in data)
    {
      self.dir_name(data.dir_name);
      self.dir_value(data.dir_value);
      self.dir_uom(data.dir_uom);
      self.dir_time(data.dir_time);
    }
    */
  };

  self.set_click_data = function(observaton_name, data)
  {

  };
  self.add_plot = function(obs_name, obs_uom, plot_data, plot_div)
  {
    $.plot($("#obs-click-popup " + plot_div), [{data: plot_data, label: obs_name}],
    {
      xaxis: {mode: "time"},
      crosshair: {mode: 'x'   },
      grid: {
        backgroundColor: {colors: ['#fff', '#C3DFE5']},
        borderWidth: 1,
        borderColor: '#A6D1DB',
        hoverable: true
      },
      zoom: {interactive: true},
      pan: {interactive: true},
      legend: {
          backgroundOpacity: 0.3, labelFormatter: function (label, series) {
            return /min|max/.test(series.id) ? null : label;
        }
      },
      colors: ["#eb4b4b", "#4da74d", "#9440ed", 'rgba(50,100,100,1.0)', 'rgba(100,50,100,1.0)', 'rgba(100,100,50,1.0)'] //note - 6 default colors, add more if > 6 needed
      }
    );
    $("#obs-click-popup " + plot_div).bind("plothover", self.plot_hover_handler);

  };
  self.plot_hover_handler = function (event, pos, item)
  {
    if (item)
    {
      var x = new Date(item.datapoint[0]);
      var y = item.datapoint[1];
      if (self.prev_tooltip_point != item.dataIndex)
      {
        $('#tooltip').remove();
        var d = x.format('UTC:mmm dd, h TT');
        self.showToolTip(
          item.pageX
          ,item.pageY
          ,d + ' : ' + (Math.round(y * 100) / 100) + ' ' + self.active_obs_uom());
      }
      self.prev_tooltip_point = item.dataIndex;
    }
    else
    {
      $('#tooltip').remove();
      self.prev_tooltip_point = null;
    }
  };

  self.obs_hover_select = function(event)
  {
    $('#obs-click-popup').hide();
    var feature = event.feature;
    var layer = feature.layer;
    self.set_hover_data(layer.name, feature.attributes);
    var lon_lat = new OpenLayers.LonLat(feature.geometry.x, feature.geometry.y);
    var map_offset = $("#map").offset();
    var view_px = app.map.getViewPortPxFromLonLat(lon_lat);
    $('#obs-hover-popup')
      .show()
      .offset({top: map_offset.top + view_px.y + 5, left: map_offset.left + view_px.x + 5});
  };
  self.obs_hover_unselect = function(event)
  {
    var feature = event.feature;
    $('#obs-hover-popup').hide();
  };
  self.obs_click_select = function(feature)
  {
    var url = "/data_manager/platform_data/" + feature.attributes.p_name;
    var json_data = null;
    $.ajax({
      url: url,
      async: false,
      dataType: 'json',
      success: function(data)
      {
        json_data = data;
        $('#obs-hover-popup').hide();
      }
    });
    var obs_data_list = json_data.features.properties.observations;
    //Find the feature that matches our current observation type.
    var flot_data = [];
    $.each(obs_data_list, function(ndx, obs_data)
    {
      if(obs_data.properties.obsType in feature.attributes.obs)
      {
        if((self.is_vector && obs_data.properties.obsType.indexOf('direction') === -1) ||
          (!self.is_vector))
        {
          $.each(obs_data.properties.time, function (time_ndx, time_val) {
            //Data pairs are time_val for x axis and value for y.
            //Time needs to be javascript date objects.
            time_val = time_val.replace(' ', 'T');
            flot_data.push([new Date(time_val), parseFloat(obs_data.properties.value[time_ndx])]);
          });
          self.active_obs_uom(feature.attributes.obs[obs_data.properties.obsType].uom);

        }
        return;
      }
    });
    var lon_lat = new OpenLayers.LonLat(feature.geometry.x, feature.geometry.y);
    var map_offset = $("#map").offset();
    var view_px = app.map.getViewPortPxFromLonLat(lon_lat);
    $('#obs-click-popup').show().offset({top: map_offset.top + view_px.y + 5, left: map_offset.left + view_px.x + 5});
    self.add_plot(self.active_obs_name, self.active_obs_uom, flot_data, "#plot_area");
  };
  self.showToolTip = function(x,y,contents)
  {
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
  };

  return(self);
}

function viewModel() {
    var self = this;

    //self.modernBrowser = ko.observable( !($.browser.msie && $.browser.version < 9.0) );
    self.modernBrowser = ko.observable(true);
    // list of active layermodels
    self.activeLayers = ko.observableArray();

    // list of visible layermodels in same order as activeLayers
    self.visibleLayers = ko.computed(function() {
        return $.map(self.activeLayers(), function(layer) {
            if (layer.visible()) {
                return layer;
            }
        });
    });

    self.visibleLayers.subscribe( function() {
        self.updateAttributeLayers();
        $.each(self.activeLayers(), function(i, layer) {
            //Delete any query results from the array.
            app.viewModel.attributeDataArray.remove(function(layerData) {
                if(layerData.title == layer.name)
                {
                  return(true);
                }
                return(false);
              });
        });

    });

    self.attributeLayers = ko.observable();

    self.featureAttribution = ko.observable(true);
    self.enableFeatureAttribution = function() {
        self.aggregatedAttributes(false);
        self.featureAttribution(true);
    };
    self.disableFeatureAttribution = function() {
        self.featureAttribution(false);
        app.markers.clearMarkers();
    };

    self.showFeatureAttribution = ko.observable(false);

    self.featureAttribution.subscribe( function() {
        self.showFeatureAttribution( self.featureAttribution() && !($.isEmptyObject(self.aggregatedAttributes())) );
    });

    self.updateAttributeLayers = function() {
        var attributeLayersList = [];
        if (self.scenarios && self.scenarios.scenarioFormModel && self.scenarios.scenarioFormModel.isLeaseblockLayerVisible()) {
            attributeLayersList.push(self.scenarios.leaseblockLayer().layerModel);
        }

        $.each(self.visibleLayers(), function(index, layer) {
            attributeLayersList.push(layer);
        });
        self.attributeLayers(attributeLayersList);
    };

    // boolean flag determining whether or not to show layer panel
    self.showLayers = ko.observable(true);

    self.showLayersText = ko.computed(function() {
        if (self.showLayers()) return "Hide Layers";
        else return "Show Layers";
    });

    // toggle layer panel visibility
    self.toggleLayers = function() {
        self.showLayers(!self.showLayers());
        app.map.render('map');
        if (self.showLayers()) app.map.render('map'); //doing this again seems to prevent the vector wandering effect
        app.updateUrl();
        //if toggling layers during default pageguide, then correct step 4 position
        //self.correctTourPosition();
        //throws client-side error in pageguide.js for some reason...
    };

    // reference to open themes in data accordion
    self.openThemes = ko.observableArray();

    self.openThemes.subscribe( function() {
        app.updateUrl();
    });
    //Themes open in the Polygon Tools query.
    self.openPGToolsThemes = ko.observableArray();



    self.getOpenThemeIDs = function() {
        return $.map(self.openThemes(), function(theme) {
            return theme.id;
        });
    };

    // reference to active theme model/name for display text
    self.activeTheme = ko.observable();
    self.activeThemeName = ko.observable();

    // list of theme models
    self.themes = ko.observableArray();

    // last clicked layer for editing, etc
    self.activeLayer = ko.observable();
    self.activeParentLayer = ko.observable();

    self.featureRequested = ko.observable(false);
    //Layer Feature Identify
    self.queryFeatureActive = ko.observable(false);
    //Button handler for the identify feature function.
    self.queryFeature = function(self, event)
    {
      //Disable the measurement tool if it is enabled.
      self.measurementTool.enableControl(false);
      //Disable the polygon query tool.
      self.polygonQueryTool.enableControl(false);

      //Toggle the state.
      if(self.queryFeatureActive() === false)
      {
        self.queryFeatureActive(true);
        //Activate the Identify tab.
        //$('#identifyTab').tab('show');
      }
      else
      {
        self.queryFeatureActive(false);
      }
      var layers = self.visibleLayers();
      $.each(layers, function(index, layer) {
        if("queryControl" in layer)
        {
          if(self.queryFeatureActive() && self.isTopLayer(layer))
          {
            layer.activate_query_controls(true);
          }
          else
          {
            layer.activate_query_controls(false);
          }
          //if(self.queryFeatureActive() && app.viewModel.activeLayers.indexOf(layer) === 0))
          /*
          if(self.queryFeatureActive())
          {
            layer.queryControl.activate();
          }
          else
          {
            layer.queryControl.deactivate();
          }
          */
        }
      });

    };
    //////////////////////////////////////////////////////
    //POlygon selection tool click handler.
    self.polygonIdentify = function(self, event)
    {
      //Switch to the query tab.
      $('#polygonQueryTab').tab('show');

      //Disable the measurement tool if it is enabled.
      self.measurementTool.enableControl(false);
      //Enable the polygon query tool.
      self.polygonQueryTool.polygonIdentify(event);
      //If the query feature is active, deactivate it.
      self.queryFeatureActive(false);
      var layers = self.visibleLayers();
      $.each(layers, function(index, layer) {
        if("queryControl" in layer)
        {
          layer.activate_query_controls(false);
          //layer.queryControl.deactivate();
        }
      });
    };
    //Measure tool click handler.
    self.measureToolClick = function(event)
    {
      //If the polygonQueryTool is enabled, disable it.
      self.polygonQueryTool.enableControl(false);
      //Pass the event off to the measurementTool object.
      self.measurementTool.measureToolClick(event);
      //Go through our other controls: Identify and Polygon Query and disable them if there are on.

      //If the query feature is active, deactivate it.
      self.queryFeatureActive(false);
      var layers = self.visibleLayers();
      $.each(layers, function(index, layer) {
        if("queryControl" in layer)
        {
          layer.activate_query_controls(false);
          //layer.queryControl.deactivate();
        }
      });
    };

    self.timelineToolClick = function(event)
    {
      self.timelineTool.timelineToolClick(event);
    };

    //////////////////////////////////////////////////////////////

    // determines visibility of description overlay
    self.showDescription = ko.observable();
    // determines visibility of expanded description overlay
    self.showOverview = ko.observable();

    // theme text currently on display
    self.themeText = ko.observable();

    // index for filter autocomplete and lookups
    self.layerIndex = {};
    self.layerSearchIndex = {};

    self.bookmarkEmail = ko.observable();

    self.mapLinks = new mapLinksModel();

    // text for tooltip popup
    self.layerToolTipText = ko.observable();

    // descriptive text below the map
    self.activeInfoLayer = ko.observable(false);
    self.activeInfoSublayer = ko.observable(false);

    // attribute data
    //Each visible layer gets queried, we use this array to store the individual layer results.
    self.attributeDataArray = ko.observableArray();
    //WHenever a change is made to the attributeDataArray, update the scroll bars for the tabs and sort the data in the attributeDataArray.
    self.attributeDataArray.subscribe( function() {
      self.attributeDataArray().sort(function(left, right) {
        return(left.title == right.title ? 0 : (left.title < right.title ? -1 : 1));
      });
      self.updateScrollBars();
    });

    self.aggregatedAttributes = ko.observable(false);
    self.aggregatedAttributesWidth = ko.observable('280px');
    self.aggregatedAttributes.subscribe( function() {
        self.updateAggregatedAttributesOverlayWidthAndScrollbar();
        self.showFeatureAttribution( self.featureAttribution() && !($.isEmptyObject(self.aggregatedAttributes())) );
    });
    self.removeFromAggregatedAttributes = function(layerName) {
        delete app.viewModel.aggregatedAttributes()[layerName];
        //if there are no more attributes left to display, then remove the overlay altogether
        if ($.isEmptyObject(self.aggregatedAttributes())) {
            self.closeAttribution();
        } else {
            //because the subscription on aggregatedAttributes is not triggered by this delete process
            self.updateAggregatedAttributesOverlayWidthAndScrollbar();
            //self.updateCustomScrollbar('#aggregated-attribute-content');
        }
    };
    self.updateAggregatedAttributesOverlayWidthAndScrollbar = function() {
        setTimeout( function() {
            var overlayWidth = (document.getElementById('aggregated-attribute-overlay-test').clientWidth+50),
                width = overlayWidth < 380 ? overlayWidth : 380;
            //console.log('setting overlay width to ' + width);
            self.aggregatedAttributesWidth(width + 'px');
            self.updateCustomScrollbar('#aggregated-attribute-content');
        }, 500);
    };
    self.updateAggregatedAttributesOverlayScrollbar = function() {
        self.updateCustomScrollbar('#aggregated-attribute-content');
    };

    // title for print view
    self.mapTitle = ko.observable();

    self.closeAttribution = function() {
        self.aggregatedAttributes(false);
        app.markers.clearMarkers();
    };

    self.updateMarker = function(lonlat) {
        app.markers.clearMarkers();
        app.marker = new OpenLayers.Marker(lonlat, app.markers.icon);
        app.marker.map = app.map;
        //app.marker.display(true);
        if (app.marker && !$.isEmptyObject(self.aggregatedAttributes()) && self.featureAttribution()) {
            app.markers.addMarker(app.marker);
            app.map.setLayerIndex(app.markers, 99);
        }
    };

    // hide tours for smaller screens
    self.hideTours = ko.observable(false);

    // set the error type
    // can be one of:
    //  restoreState
    self.error = ko.observable();
    self.clearError = function() {
        self.error(null);
    };

    self.showLogo = ko.observable(true);
    self.hideLogo = function() {
        self.showLogo(false);
    };

    self.isFullScreen = ko.observable(false);

    self.fullScreenWithLayers = function() {
        return self.isFullScreen() && self.showLayers();
    };

    // show the map?
    self.showMapPanel = ko.observable(true);

    //show/hide the list of basemaps
    self.showBasemaps = function(self, event) {
        var $layerSwitcher = $('#SimpleLayerSwitcher_30'),
            $button = $('#basemaps'); //$(event.target).closest('.btn');
        if ($layerSwitcher.is(":visible")) {
            $layerSwitcher.hide();
        } else {
            $layerSwitcher.show();
        }
    };

    // zoom with box
    self.zoomBoxIn = function (self, event) {
        var $button = $(event.target).closest('.btn');
        self.zoomBox($button);
    };
    self.zoomBoxOut = function (self, event) {
        var $button = $(event.target).closest('.btn');
        self.zoomBox($button, true);
    };
    self.zoomBox = function  ($button, out) {
        // out is a boolean to specify whether we are zooming in or out
        // true: zoom out
        // not present/false zoom in
        if ($button.hasClass('active')) {
            self.deactivateZoomBox();
        } else {
            $button.addClass('active');
            $button.siblings('.btn-zoom').removeClass('active');
            if (out) {
                app.map.zoomBox.out = true;
            } else {
                app.map.zoomBox.out = false;
            }
            app.map.zoomBox.activate();
            $('#map').addClass('zoomBox');

        }
    };
    self.deactivateZoomBox = function ($button) {
        var $button = $button || $('.btn-zoom');
        app.map.zoomBox.deactivate();
        $button.removeClass('active');
        $('#map').removeClass('zoomBox');
    };

    // is the legend panel visible?
    self.showLegend = ko.observable(false);
    self.showLegend.subscribe(function (newVal) {
        self.updateScrollBars();
        if (self.printing.enabled()) {
            self.printing.showLegend(newVal);
        }

        //app.reCenterMap();

    });

    self.activeLegendLayers = ko.computed(function() {
        var layers = $.map(self.visibleLayers(), function(layer) {
            if (layer.legend || layer.legendTitle) {
                return layer;
            }
        });

        // remove any layers with duplicate legend titles
        var seen = {};
        for (i = 0; i < layers.length; i++) {
            var title = layers[i].legendTitle ? layers[i].legendTitle : layers[i].name;
            if (seen[title]) {
                layers.splice(i, 1);
                i--;
            } else {
                seen[title] = true;
            }
        }
        return layers;
    });

    self.legendButtonText = ko.computed(function() {
        if (self.showLegend()) return "Hide Legend";
        else return "Show Legend";
    });

    // is the legend panel visible?
    self.showEmbeddedLegend = ko.observable(false);
    /*self.showEmbeddedLegend.subscribe(function (newVal) {
        self.updateScrollBars();
        if (self.printing.enabled()) {
            self.printing.showLegend(newVal);
        }
    });*/

    // toggle embedded legend (on embedded maps)
    self.toggleEmbeddedLegend = function() {
        self.showEmbeddedLegend( !self.showEmbeddedLegend() );
        var legendScrollpane = $('#embedded-legend').data('jsp');
        if (legendScrollpane === undefined) {
            $('#embedded-legend').jScrollPane();
        } else {
            legendScrollpane.reinitialise();
        }
    };

    // toggle legend panel visibility
    self.toggleLegend = function() {
        self.showLegend(!self.showLegend());
        if (!self.showLegend()) {
            app.map.render('map');
        } else {
            //update the legend scrollbar
            //$('#legend-content').data('jsp').reinitialise();
            self.updateScrollBars();
        }

        //app.map.render('map');
        //if toggling legend during default pageguide, then correct step 4 position
        self.correctTourPosition();
    };

    // determine whether app is offering legends
    self.hasActiveLegends = ko.computed(function() {
        var hasLegends = false;
        $.each(self.visibleLayers(), function(index, layer) {
            if (layer.legend || layer.legendTitle) {
                hasLegends = true;
            }
        });
        return hasLegends;
    });

    // close error-overlay
    self.closeAlert = function(self, event) {
        app.viewModel.error(null);
        $('#fullscreen-error-overlay').hide();
    };

    self.updateAllScrollBars = function() {
        self.updateScrollBars();
        if (self.scenarios) {
            self.scenarios.updateDesignsScrollBar();
        }
    };

    //update jScrollPane scrollbar
    self.updateScrollBars = function() {

        if ( ! app.embeddedMap ) {
            var dataScrollpane = $('#data-accordion').data('jsp');
            if (dataScrollpane === undefined) {
                $('#data-accordion').jScrollPane();
            } else {
                dataScrollpane.reinitialise();
            }

            var activeScrollpane = $('#active').data('jsp');
            if (activeScrollpane === undefined) {
                $('#active').jScrollPane();
            } else {
                activeScrollpane.reinitialise();
            }

            var idScrollpane = $('#identify-feature').data('jsp');
            if (idScrollpane === undefined) {
                $('#identify-feature').jScrollPane();
            } else {
                idScrollpane.reinitialise();
            }
            /*
            var idScrollpane = $('#polygon-query').data('jsp');
            if (idScrollpane === undefined) {
                $('#polygon-query').jScrollPane();
            } else {
                idScrollpane.reinitialise();
            }
            */
            var legendScrollpane = $('#legend-content').data('jsp');
            if (legendScrollpane === undefined) {
                $('#legend-content').jScrollPane();
            } else {
                setTimeout(function() {legendScrollpane.reinitialise();},100);
            }
        }

    };

    // expand data description overlay
    self.expandDescription = function(self, event) {
        if ( ! self.showOverview() ) {
            self.showOverview(true);
            self.updateCustomScrollbar('#overview-overlay-text');
        } else {
            self.showOverview(false);
        }
    };

    self.scrollBarElements = [];

    self.updateCustomScrollbar = function(elem) {
        if (app.viewModel.scrollBarElements.indexOf(elem) == -1) {
            app.viewModel.scrollBarElements.push(elem);
            $(elem).mCustomScrollbar({
                scrollInertia:250,
                mouseWheel: 6
            });
        }
        //$(elem).mCustomScrollbar("update");
        //$(elem).mCustomScrollbar("scrollTo", "top");
        setTimeout( function() {
            $(elem).mCustomScrollbar("update");
            $(elem).mCustomScrollbar("scrollTo", "top");
        }, 500);
    };

    // close layer description
    self.closeDescription = function() {
        //self.showDescription(false);
        app.viewModel.showOverview(false);
        if ( ! app.pageguide.tourIsActive ) {
            app.viewModel.showMapAttribution();
        }
    };

    self.activateOverviewDropdown = function(model, event) {
        var $btnGroup = $(event.target).closest('.btn-group');
        if ( $btnGroup.hasClass('open') ) {
            $btnGroup.removeClass('open');
        } else {
            //$('#overview-dropdown-button').dropdown('toggle');
            $btnGroup.addClass('open');
            if (app.viewModel.scrollBarElements.indexOf('#overview-overlay-dropdown') == -1) {
                app.viewModel.scrollBarElements.push('#overview-overlay-dropdown');
                $('#overview-overlay-dropdown').mCustomScrollbar({
                    scrollInertia:250,
                    mouseWheel: 6
                });
            }
            //debugger;
            //setTimeout( $('#overview-overlay-dropdown').mCustomScrollbar("update"), 1000);
            $('#overview-overlay-dropdown').mCustomScrollbar("update");
        }
    };

    self.getOverviewText = function() {
        //activeInfoSublayer() ? activeInfoSublayer().overview : activeInfoLayer().overview
        if ( self.activeInfoSublayer() ) {
            if ( self.activeInfoSublayer().overview === null ) {
                return '';
            } else {
                return self.activeInfoSublayer().overview;
            }
        }
        else if (self.activeInfoLayer() ) {
            if ( self.activeInfoLayer().overview === null ) {
                return '';
            } else {
                return self.activeInfoLayer().overview;
            }
        }
        else {
            return '';
        }
    };
    // DWR 2015-04-20
    self.layerHasStatus = function()
    {
      var has_status = false;
      if ( self.activeInfoSublayer() )
      {
        if(self.activeInfoSublayer().status_field.length)
        {
          has_status = true;
        }
      }
      else if(self.activeInfoLayer() )
      {
        if(self.activeInfoLayer().status_field.length)
        {
          has_status = true;
        }
      }
      return(has_status);
    };
    self.getLayerOverviewStatus = function()
    {
      var status_field = null;
      if ( self.activeInfoSublayer() )
      {
        if(self.activeInfoSublayer().status_field.length)
        {
          status_field = self.activeInfoSublayer().status_field;
        }
      }
      else if(self.activeInfoLayer() )
      {
        if(self.activeInfoLayer().status_field.length)
        {
          status_field = self.activeInfoLayer().status_field;
        }
      }
      return(status_field);
    };
    self.getLayerTime = function()
    {
      if ( self.activeInfoSublayer() )
      {
        if(self.activeInfoSublayer().closestTime().length)
        {
          return(self.activeInfoSublayer().closestTime());
        }
      }
      else if(self.activeInfoLayer() )
      {
        if(self.activeInfoLayer().closestTime().length)
        {
          return(self.activeInfoLayer().closestTime());
          //return(self.activeInfoSublayer().closestTime());
        }
      }
      return("");
    };
    self.activeKmlLink = function() {
        if ( self.activeInfoSublayer() ) {
            return self.activeInfoSublayer().kml;
        } else if (self.activeInfoLayer() ) {
            return self.activeInfoLayer().kml;
        } else {
            return false;
        }
    };

    self.activeDataLink = function() {
        //activeInfoLayer().data_download
        if ( self.activeInfoSublayer() ) {
            return self.activeInfoSublayer().data_download;
        } else if (self.activeInfoLayer() ) {
            return self.activeInfoLayer().data_download;
        } else {
            return false;
        }
    };

    self.activeMetadataLink = function() {
        //activeInfoLayer().metadata
        if ( self.activeInfoSublayer() ) {
            return self.activeInfoSublayer().metadata;
        } else if (self.activeInfoLayer() ) {
            return self.activeInfoLayer().metadata;
        } else {
            return false;
        }
    };

    self.activeSourceLink = function() {
        //activeInfoLayer().source
        if ( self.activeInfoSublayer() ) {
            return self.activeInfoSublayer().source;
        } else if (self.activeInfoLayer() ) {
            return self.activeInfoLayer().source;
        } else {
            return false;
        }
    };

    self.activeTilesLink = function() {
        //activeInfoLayer().source
        if ( self.activeInfoSublayer() ) {
            return self.activeInfoSublayer().tiles;
        } else if (self.activeInfoLayer() ) {
            return self.activeInfoLayer().tiles;
        } else {
            return false;
        }
    };

    //assigned in app.updateUrl (in state.js)
    self.currentURL = ko.observable();


    // show bookmark stuff
    self.showBookmarks = function(self, event) {
        var $button = $(event.target).closest('.btn'),
            $popover = $('#bookmark-popover');

        if ($popover.is(":visible")) {
            $popover.hide();
        } else {
            self.bookmarks.newBookmarkName(null);
            //TODO: move all this into bookmarks model
            // hide the popover if already visible
            $popover.show().position({
                "my": "right middle",
                "at": "left middle",
                "of": $button,
                offset: "-10px 0px"
            });
            self.bookmarks.updateBookmarkScrollBar();
        }
    };

    //show Map Links
    /*
    self.showMapLinks = function(self, event) {
        var $button = $(event.target).closest('.btn'),
            $popover = $('#map-links-popover');

        if ($popover.is(":visible")) {
            $popover.hide();
        } else {
            self.resetMapLinks();
            $popover.show().position({
                "my": "top",
                "at": "top",
                "of": $('#map'),
                offset: "0px 10px"
            });
        }
    };
    */

    self.resetMapLinks = function() {
        self.mapLinks.shrinkURL(false);
        $('#short-url').text = self.mapLinks.getURL();
        self.mapLinks.setIFrameHTML();
    };

    self.selectedLayer = ko.observable();

    self.showOpacity = function(layer, event) {
        var $button = $(event.target).closest('a'),
            $popover = $('#opacity-popover');

        self.selectedLayer(layer);

        if ($button.hasClass('active')) {
            self.hideOpacity();
        } else {
            $popover.show().position({
                "my": "center top",
                "at": "center bottom",
                "of": $button,
                "offset": "0px 10px"
            });
            $button.addClass('active');
        }
    };

    self.hideOpacity = function(self, event) {
        $('#opacity-popover').hide();
        $('.opacity-button.active').removeClass('active');
        app.updateUrl();
    };

    /*
    DWR 2015-03-09
    Time slider functions.
     */
    self.showTimeSlider = function(layer, event)
    {
      var $button = $(event.target).closest('a');
      self.selectedLayer(layer);
      var $popover = $('#time-slider-popover');
      //$popover.find("#time_selected").val("");
      if ($button.hasClass('active'))
      {
          //layer.timeSteps.length = 0;
          self.hideTimeSlider();
      }
      else
      {
          layer.get_time_increments(function(results)
          {
            layer.timeSteps = results['time_steps'];
            //self.selectedLayer().timeSteps = results['time_steps'];
            $( "#time_slider").slider({
              min: 0,
              max: layer.timeSteps.length - 1,
              step: 1,
              slide: function( event, ui ) {
                layer.currentTimeNdx = ui.value;
                var val = layer.timeSteps[ui.value];
                layer.requestTime(val);

              }
            });
            if(layer.requestTime().length)
            {
              //Get the index of our last selected time so we can then
              //set the slider position.
              layer.currentTimeNdx = layer.timeSteps.indexOf(layer.requestTime());
              $( "#time_slider").slider("option", "value", layer.currentTimeNdx);
            }

            $popover.show().position({
                "my": "center top",
                "at": "center bottom",
                "of": $button,
                "offset": "0px 10px"
            });
            $button.addClass('active');
          })
      }
    };
    self.hideTimeSlider = function(self, event)
    {
      $('#time-slider-popover').hide();
      $('.time-slider-button.active').removeClass('active');
    };
    $("#time_slider").on( "slide", function( event, ui )
      {

      });
    self.hideTooltip = function() {
        $('#layer-popover').hide();
    };

    // show coords info in pointer
    self.showPointerInfo = ko.observable(false);
    self.togglePointerInfo = function() {
        self.showPointerInfo(!self.showPointerInfo());
    };

    // get layer by id
    self.getLayerById = function(id) {
        for (var x=0; x<self.themes().length; x++) {
            var layer_list = $.grep(self.themes()[x].layers(), function(layer) { return layer.id === id; });
            if (layer_list.length > 0) {
                return layer_list[0];
            }
        }
        return false;
    };

    // handle the search form
    self.searchTerm = ko.observable();
    self.layerSearch = function() {
        var found = self.layerSearchIndex[self.searchTerm()];
        //self.activeTheme(theme);
        self.openThemes.push(found.theme);
        found.layer.activateLayer();
    };
    self.keySearch = function(_, event) {

        if (event.which === 13) {
            self.searchTerm($('.typeahead .active').text());
            self.layerSearch();
        }
        $('ul.typeahead').on('click', 'li', function () {
            self.searchTerm($('.typeahead .active').text());
            self.layerSearch();
            //search($(this).text());
        });
    };

    // do this stuff when the active layers change
    self.activeLayers.subscribe(function() {
        // initial index
        var index = 300;
        app.state.activeLayers = [];

        //self.showLegend(false);
        $.each(self.activeLayers(), function(i, layer) {
            // set the zindex on the openlayers layer
            // layers at the beginning of activeLayers
            // are above those that are at the end
            // also save the layer state
            app.setLayerZIndex(layer, index);
            index--;
            //If the layer is the first visible layer, enable the identify control.
            if(self.queryFeatureActive() && i === 0)
            {
              layer.activate_query_controls(true);
            }
            else
            {
              layer.activate_query_controls(false);
            }

        });

        // re-ordering map layers by z value
        app.map.layers.sort(function(a, b) {
            return a.getZIndex() - b.getZIndex();
        });

        //update the legend scrollbar
        //setTimeout(function() {$('#legend-content').data('jsp').reinitialise();}, 200);
        setTimeout(function() { app.viewModel.updateScrollBars(); }, 200);

        // update the url hash
        app.updateUrl();


    });

    self.deactivateAllLayers = function() {
        //$.each(self.activeLayers(), function (index, layer) {
        var numActiveLayers = self.activeLayers().length;
        for (var i=0; i < numActiveLayers; i++) {
            self.activeLayers()[0].deactivateLayer();
        }
    };

    self.closeAllThemes = function() {
        var numOpenThemes = self.openThemes().length;
        for (var i=0; i< numOpenThemes; i++) {
            self.openThemes.remove(self.openThemes()[0]);
        }
        self.updateScrollBars();
    };

    // do this stuff when the visible layers change
    /*self.visibleLayers.subscribe(function() {
        if (!self.hasActiveLegends()) {
            self.showLegend(false);
        }
    });*/

    /* DESIGNS */

    self.showCreateButton = ko.observable(true);

    /* Wind Design */
    self.showWindDesignWizard = ko.observable(false);
    self.windDesignStep1 = ko.observable(false);
    self.windDesignStep2 = ko.observable(false);
    self.windDesignStep3 = ko.observable(false);

    self.startWindDesignWizard = function() {
        self.showCreateButton(false);
        self.showWindDesignWizard(true);
        self.showWindDesignStep1();
    };

    self.showWindDesignStep1 = function() {
        self.windDesignStep1(true);
        $('#wind-design-breadcrumb-step-1').addClass('active');
        self.windDesignStep2(false);
        $('#wind-design-breadcrumb-step-2').removeClass('active');
        self.windDesignStep3(false);
        $('#wind-design-breadcrumb-step-3').removeClass('active');
    };

    self.showWindDesignStep2 = function() {
        self.windDesignStep1(false);
        $('#wind-design-breadcrumb-step-1').removeClass('active');
        self.windDesignStep2(true);
        $('#wind-design-breadcrumb-step-2').addClass('active');
        self.windDesignStep3(false);
        $('#wind-design-breadcrumb-step-3').removeClass('active');
    };

    self.showWindDesignStep3 = function() {
        self.windDesignStep1(false);
        $('#wind-design-breadcrumb-step-1').removeClass('active');
        self.windDesignStep2(false);
        $('#wind-design-breadcrumb-step-2').removeClass('active');
        self.windDesignStep3(true);
        $('#wind-design-breadcrumb-step-3').addClass('active');
    };
    /* END Wind Design */

    self.startDefaultTour = function() {
        if ( $.pageguide('isOpen') ) { // activated when 'tour' is clicked
            // close the pageguide
            app.pageguide.togglingTours = true;
            $.pageguide('close');
        } else {
            //save state
            app.pageguide.state = app.getState();
            app.saveStateMode = false;
        }

        //show the data layers panel
        app.viewModel.showLayers(true);

        //ensure pageguide is managing the default guide
        $.pageguide(defaultGuide, defaultGuideOverrides);

        //adding delay to ensure the message will load
        setTimeout( function() { $.pageguide('open'); }, 700 );
        //$('#help-tab').click();

        app.pageguide.togglingTours = false;
    };

    self.stepTwoOfBasicTour = function() {
        $('.pageguide-fwd')[0].click();
    };

    self.startDataTour = function() {
        //ensure the pageguide is closed
        if ( $.pageguide('isOpen') ) { // activated when 'tour' is clicked
            // close the pageguide
            app.pageguide.togglingTours = true;
            $.pageguide('close');
        } else {
            //save state
            app.pageguide.state = app.getState();
            app.saveStateMode = false;
        }

        //show the data layers panel
        app.viewModel.showLayers(true);

        //switch pageguide from default guide to data guide
        $.pageguide(dataGuide, dataGuideOverrides);

        //show the data tab, close all themes and deactivate all layers, and open the Admin theme
        app.viewModel.closeAllThemes();
        app.viewModel.deactivateAllLayers();
        app.viewModel.themes()[0].setOpenTheme();
        app.setMapPosition(-81.03, 30.65, 7);
        $('#dataTab').tab('show');

        //start the tour
        setTimeout( function() { $.pageguide('open'); }, 700 );

        app.pageguide.togglingTours = false;
    };

    self.startActiveTour = function() {
        //ensure the pageguide is closed
        if ( $.pageguide('isOpen') ) { // activated when 'tour' is clicked
            // close the pageguide
            app.pageguide.togglingTours = true;
            $.pageguide('close');
        } else {
            //save state
            app.pageguide.state = app.getState();
            app.saveStateMode = false;
        }

        //show the data layers panel
        app.viewModel.showLayers(true);

        //switch pageguide from default guide to active guide
        $.pageguide(activeGuide, activeGuideOverrides);

        //show the active tab, close all themes and deactivate all layers, activate a couple layers
        //app.viewModel.closeAllThemes();
        app.viewModel.deactivateAllLayers();
        //activate desired layers
        for (var i=0; i < app.viewModel.themes()[0].layers().length; i++) {
            if ( app.viewModel.themes()[0].layers()[i].name === 'OCS Lease Blocks' ) { //might be more robust if indexOf were used
                app.viewModel.themes()[0].layers()[i].activateLayer();
            }
        }
        for (var i=0; i < app.viewModel.themes()[0].layers().length; i++) {
            if ( app.viewModel.themes()[0].layers()[i].name === 'Marine Protected Areas (NonNMFS)' ) { //might be more robust if indexOf were used
                app.viewModel.themes()[0].layers()[i].activateLayer();
            }
        }
        app.setMapPosition(-79.65, 32.33, 7);
        $('#activeTab').tab('show');

        //start the tour
        setTimeout( function() { $.pageguide('open'); }, 700 );

        app.pageguide.togglingTours = false;
    };

    //if toggling legend or layers panel during default pageguide, then correct step 4 position
    self.correctTourPosition = function() {
        if ( $.pageguide('isOpen') ) {
            if ($.pageguide().guide().id === 'default-guide') {
                $.pageguide('showStep', $.pageguide().guide().steps.length-1);
            }
        }
    };

    self.showMapAttribution = function() {
        $('.olControlScaleBar').show();
        $('.olControlAttribution').show();
    };
    self.hideMapAttribution = function() {
        $('.olControlScaleBar').hide();
        $('.olControlAttribution').hide();
    };

    self.convertToSlug = function(orig) {
        return orig
            .toLowerCase()
            .replace(/[^\w ]+/g,'')
            .replace(/ +/g,'-');
    };

    /* REGISTRATION */
    self.username = ko.observable();
    self.usernameError = ko.observable(false);
    self.password1 = ko.observable("");
    self.password2 = ko.observable("");
    self.passwordWarning = ko.observable(false);
    self.passwordError = ko.observable(false);
    self.passwordSuccess = ko.observable(false);
    self.inactiveError = ko.observable(false);

    self.verifyLogin = function(form) {
        var username = $(form.username).val(),
            password = $(form.password).val();
        if (username && password) {
            $.ajax({
                async: false,
                url: '/marco_profile/verify_password',
                data: { username: username, password: password },
                type: 'POST',
                dataType: 'json',
                success: function(result) {
                    if (result.verified === 'inactive') {
                        self.inactiveError(true);
                    } else if (result.verified === true) {
                        self.passwordError(false);
                    } else {
                        self.passwordError(true);
                    }
                },
                error: function(result) { }
            });
            if (self.passwordError() || self.inactiveError()) {
                return false;
            } else {
                self.bookmarks.getBookmarks();
                return true;
            }
        }
        return false;
    };
    self.turnOffInactiveError = function() {
        self.inactiveError(false);
    };

    self.verifyPassword = function(form) {
        var username = $(form.username).val(),
            old_password = $(form.old_password).val();
        self.password1($(form.new_password1).val());
        self.password2($(form.new_password2).val());
        self.checkPassword();
        if ( ! self.passwordWarning() ) {
            if (username && old_password) {
                $.ajax({
                    async: false,
                    url: '/marco_profile/verify_password',
                    data: { username: username, password: old_password },
                    type: 'POST',
                    dataType: 'json',
                    success: function(result) {
                        if (result.verified === true) {
                            self.passwordError(false);
                        } else {
                            self.passwordError(true);
                        }
                    },
                    error: function(result) { }
                });
                if (self.passwordError()) {
                    return false;
                } else {
                    return true;
                }
            }
        }
        return false;
    };
    self.turnOffPasswordError = function() {
        self.passwordError(false);
    };


    self.checkPassword = function() {
        if (self.password1() && self.password2() && self.password1() !== self.password2()) {
            self.passwordWarning(true);
            self.passwordSuccess(false);
        } else if (self.password1() && self.password2() && self.password1() === self.password2()) {
            self.passwordWarning(false);
            self.passwordSuccess(true);
        } else {
            self.passwordWarning(false);
            self.passwordSuccess(false);
        }
        return true;
    };

    self.checkUsername = function() {
        if (self.username()) {
            $.ajax({
                url: '/marco_profile/duplicate_username',
                data: { username: self.username() },
                method: 'GET',
                dataType: 'json',
                success: function(result) {
                    if (result.duplicate === true) {
                        self.usernameError(true);
                    } else {
                        self.usernameError(false);
                    }
                },
                error: function(result) { }
            });
        }
    };
    self.turnOffUsernameError = function() {
        self.usernameError(false);
    };

    self.layerloadcounter = ko.observable(0);

    self.clickedLayerName = ko.observable("");
    self.clickedLayerData = ko.observable("");
    $('#kml-popup').popoverClosable();
    self.kmlClick = function(feature)
    {
      self.clickedLayerName(this.name);
      self.clickedLayerData(feature.attributes.description);
      $('#kml-popup').show().draggable().position({
              "my": "left top",
              "at": "left middle",
              "of": $("#map-panel")
          });
    };
    self.isTopLayer = function(layer) {
        return self.activeLayers.indexOf(layer) === 0;
    };

    self.isBottomLayer = function(layer) {
        return self.activeLayers.indexOf(layer) === self.activeLayers().length - 1;
    };

    //Model that handles the point observations from
    self.observation_hover_model = new obs_data_model();

    return self;
} //end viewModel

app.viewModel = new viewModel();
