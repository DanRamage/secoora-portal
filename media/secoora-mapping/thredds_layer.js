  /**
  Class: OpenLayers.Layer.WMSTimeOffset
  Extends the WMS base class to handle WMS layers that can take a time parameter. This is meant to be a base class as the time
  parameter can vary from WMS layer types.
  */
  OpenLayers.Layer.WMSTimeOffset = OpenLayers.Class(OpenLayers.Layer.WMS, {

    currentDateTime : undefined,          //Current Date object.
    //currentTime : undefined,          //Current Time object.
    layerInfoPopup : undefined,       //THe timeWidget popup window.

    initialize: function(name, url, params, options) {
      OpenLayers.Layer.WMS.prototype.initialize.apply(this,arguments);
    },

    /**
     * Method: setTimeOffset
     *  The WMSEx object should be extended for layers that have a time offset parameter that can be passed in the WMS query. THis function
     *  should be overloaded in the child object and the appropriate POST/GET parameter applied.
     * Parameters:
        timeObj a Date object with the desired time.
     * Returns:
     */
    setTimeOffset : function(dateObj, timeObj, updateLayer)
    {
      this.currentDate = dateObj;
      this.currentTime = timeObj;
      if(updateLayer)
      {
        this.redraw();
      }
    },
    getCurrentDateTime : function()
    {
      return(currentDateTime);
    },
    setTimeOffset : function(dateObj, updateLayerFlag)
    {
      if(dateObj)
      {
        this.currentDateTime = dateObj;
      }
      if(updateLayerFlag)
      {
        this.redraw();
      }
    }
  });
  /**
  Class: OpenLayers.Layer.WMSThredds
  Extends the WMS base class to handle some new options. Thredds layers can have a forecast/hindcast data, this layer adds the time
  parameter into the WMS query. WE inherit from the WMSEx class as it implements a setTimeOffset() function that will be used to set the
  desired time.
  */
  OpenLayers.Layer.WMSThredds = OpenLayers.Class(OpenLayers.Layer.WMSTimeOffset, {

    curLayerDateTime : undefined,    //The current layer date time offset in the Thredds format. This date/time is in GMT.

    /**
     * Constructor: OpenLayers.Layer.WMS
     * Create a new WMS layer object
     *
     * Example:
     * (code)
     * var wms = new OpenLayers.Layer.WMSEx```("NASA Global Mosaic",
     *                                    "http://wms.jpl.nasa.gov/wms.cgi",
     *                                    {layers: "modis,global_mosaic"});
     * (end)
     *
     * Parameters:
     * name - {String} A name for the layer
     * url - {String} Base url for the WMS
     *                (e.g. http://wms.jpl.nasa.gov/wms.cgi)
     * params - {Object} An object with key/value pairs representing the
     *                   GetMap query string parameters and parameter values.
     * options - {Ojbect} Hashtable of extra options to tag onto the layer
     */
    initialize: function(name, url, params, options) {
      OpenLayers.Layer.WMS.prototype.initialize.apply(this,arguments);
    },
    getCurrentDateTime : function()
    {
      //Take the current Thredds datetime string, convert it into a Date object.
      //this.currentDateTime = Date.parseDate(this.curLayerDateTime, "Y-m-d\\TH:i:s.000\\Z");
      if(this.currentDateTime === undefined)
      {
        this.currentDateTime = new Date();
        var updateInterval;
        //WE can either have a calculated update interval where the user provides how many times an hour the data updates, or the
        //specific update times for the hour are provided.
        if(this.extendedOptions.timeParams.hourlyUpdateInterval)
        {
          if(this.extendedOptions.timeParams.currentTimeOffset)
          {
            //Adjust time by currentTimeOffset.
            var utcTime = this.currentDateTime.getTime();
            this.currentDate.UTC(utcTime + (currentTimeOffset * 60 * 60 * 1000))
          }

          this.currentDateTime = getClosestDateToHourInterval(this.currentDateTime, this.extendedOptions.timeParams.hourlyUpdateInterval);
        }
        else if(this.extendedOptions.timeParams.updateTimes)
        {
          if(this.extendedOptions.timeParams.currentTimeOffset)
          {
            //Adjust time by currentTimeOffset.
            var utcTime = this.currentDateTime.getTime();
            this.currentDate.UTC(utcTime + (currentTimeOffset * 60 * 60 * 1000))
          }
          this.currentDateTime = getClosestDateToUpdateTimes(this.currentDateTime, this.extendedOptions.timeParams.updateTimes);
        }

      }
      return(this.currentDateTime);
    },

    getFullRequestString : function(newParams, altUrl)
    {
      // Do we have a current layer time? If not let's get one based on the current time.
      if(this.curLayerDateTime === undefined)
      {
        this.setTimeOffset(undefined, false);
      }
      newParams['TIME'] = this.curLayerDateTime;
      return OpenLayers.Layer.WMSTimeOffset.prototype.getFullRequestString.apply(this, arguments);

     },

    /**
     * Method: setTimeOffset
     *  Thredds servers use a TIME parameter in the POST query. This function properly populates the desired time and adds the parameter to the query.
     * Parameters:
        dateObj a Date object with the desired date/time.
        updateLayer if true, the layer will request a redraw.
     * Returns:
     */
    setTimeOffset : function(dateObj, updateLayer)
    {
      var layerTimeReq;

      if(dateObj === undefined)
      {
        dateObj = new Date();
        //If we need to use a time offset for the initial time, we make the adjustment.
        if(this.extendedOptions.timeParams.currentTimeOffset)
        {
          //Adjust time by currentTimeOffset.
          var utcTime = dateObj.getTime();
          dateObj.setTime(utcTime - (this.extendedOptions.timeParams.currentTimeOffset * 60 * 60 * 1000))
        }

        //dateObj = dateObj.format("Y-m-d H:i:00");
        dateObj = convertToGMT(dateObj)
        /*
        if(this.extendedOptions.timeParams.hourlyUpdateInterval)
        {
          dateObj = getClosestDateToHourInterval(dateObj, this.extendedOptions.timeParams.hourlyUpdateInterval);
        }
        else if(this.extendedOptions.timeParams.updateTimes)
        {
          dateObj = getClosestDateToUpdateTimes(dateObj, this.extendedOptions.timeParams.updateTimes);
        }
        */
      }
      this.currentDateTime = dateObj;
      layerTimeReq = dateObj.format("Y-m-d\\TH:i:00.000\\Z");
      this.curLayerDateTime = layerTimeReq;
      if(updateLayer)
      {
        this.redraw();
      }
    }
  });

/*
  Class: WMSGraphGetFeatureInfo
  Overrides the WMSGetFeatureInfo and sends the returned XML to a data store to be used for graphing.

*/
rcoosmapping.WMSThreddsXMLGetFeatureInfo = OpenLayers.Class(OpenLayers.Control.WMSGetFeatureInfo,
{
  gfiUrl : undefined,
  srsProj : undefined,
  queryLayers : undefined,
  timeParams : undefined,
  obsType : '',
  uomType : '',
  initialize: function(options)
  {
    this.eventListeners =  {getfeatureinfo : this.gfiCallback};
    if(options.vendorParams.obsType)
    {
      this.obsType = options.vendorParams.obsType;
      delete options.vendorParams['obsType'];
    }
    if(options.vendorParams.uomType)
    {
      this.uomType = options.vendorParams.uomType;
      delete options.vendorParams['uomType'];
    }
    if(options.vendorParams)
    {
      if(options.vendorParams.gfiUrl)
      {
        this.gfiUrl = options.vendorParams.gfiUrl;
        delete options.vendorParams['gfiUrl'];
      }
      if(options.vendorParams.srs)
      {
        this.srsProj = options.vendorParams.srs;
        delete options.vendorParams['srs'];
      }
      if(options.vendorParams.query_layers)
      {
        this.queryLayers = options.vendorParams.query_layers;
        delete options.vendorParams['query_layers'];
      }
      if(options.vendorParams.timeParams)
      {
        this.timeParams = {};
        if(options.vendorParams.timeParams.forecastHours)
        {
          this.timeParams.forecastHours = options.vendorParams.timeParams.forecastHours;
        }
        else
        {
          this.timeParams.forecastHours = 24;
        }
        if(options.vendorParams.timeParams.hindcastHours)
        {
          this.timeParams.hindcastHours = options.vendorParams.timeParams.hindcastHours;
        }
        else
        {
          this.timeParams.hindcastHours = 24;
        }
        if(options.vendorParams.timeParams.updateRate)
        {
          this.timeParams.updateRate = options.vendorParams.timeParams.updateRate;
        }
        else
        {
          this.timeParams.updateRate = 3;
        }
        this.timeParams.hindcastHours *= -1;
        delete options.vendorParams['timeParams'];
      }
    }
    OpenLayers.Control.WMSGetFeatureInfo.prototype.initialize.apply(this, arguments);
  },
  gfiCallback : function(event)
  {
    var xmlDoc = new DOMParser().parseFromString(event.request.responseText,"text/xml");
    var threadsXML = new Ext.data.Store({
      reader : new rcoosmapping.data.threadsWMSXMLReader({
        record: 'FeatureInfo',
        fields: [
            {name : 'time' , mapping: 'time'},
            {name : 'value', mapping: 'value'}
          ],
        headerFields: [
            {name : 'obsType' , defaultValue: this.obsType},
            {name : 'uomType' , defaultValue: this.uomType},
            {name : 'latitude' , mapping: 'latitude'},
            {name : 'longitude', mapping: 'longitude'},
            {name : 'type', defaultValue: "MultiPoint"},
            {name : 'geometryType', defaultValue: "MultiPoint"},
        ]
      })
    });
    threadsXML.loadData(xmlDoc);
    var i = 0;
  },
  getClosestDateToHourInterval : function(curDate, updateInterval)
  {
    var hour = parseInt(curDate.format('H'),10);
    var offset = hour % updateInterval;
    var closestDate = curDate;
    if(offset !== 0)
    {
      var offstAdjust = 0;
      var epoch = curDate.format('U');
      var x = Math.round(updateInterval / 2);
      if(offset >= x)
      {
        offstAdjust = updateInterval - offset;
      }
      else
      {
        offstAdjust = offset * -1;
      }
      epoch += (offstAdjust * 60 * 60);
      closestDate = new Date(epoch * 1000);
    }
    return(closestDate);
  },

  buildWMSOptions: function(url, layers, clickPosition, format)
  {
    if(this.gfiUrl)
    {
      url = this.gfiUrl;
    }
    var layerNames = [], styleNames = [];
    for (var i = 0, len = layers.length; i < len; i++) {
        layerNames = layerNames.concat(layers[i].params.LAYERS);
        styleNames = styleNames.concat(this.getStyleNames(layers[i]));
    }
    var firstLayer = layers[0];
    // use the firstLayer's projection if it matches the map projection -
    // this assumes that all layers will be available in this projection
    var projection = this.map.getProjection();
    var layerProj = firstLayer.projection;
    if(this.srsProj)
    {
      //extent.transform(new OpenLayers.Projection(mapConfig.displayProjection),
      //                      new OpenLayers.Projection(mapConfig.projection));

      layerProj = new OpenLayers.Projection(this.srsProj);
    }
    var bbox = this.map.getExtent().transform(this.map.getProjectionObject(), layerProj).toBBOX(null,
                    firstLayer.reverseAxisOrder());

    if (layerProj && layerProj.equals(this.map.getProjectionObject())) {
        projection = layerProj.getCode();
    }
    if(this.timeParams)
    {
      var ct = new Date();
      var fromTime = ct.add(Date.HOUR, this.timeParams.hindcastHours);
      var toTime = ct.add(Date.HOUR, this.timeParams.forecastHours);
      if(this.timeParams.updateRate)
      {
        //var startDate = this.getClosestDateToHourInterval(ct, this.timeParams.updateRate);
        fromTime = this.getClosestDateToHourInterval(fromTime, this.timeParams.updateRate);
        toTime = this.getClosestDateToHourInterval(toTime, this.timeParams.updateRate);
      }

      var timeParam = fromTime.format("Y-m-d\\TH:00:00.000\\Z") + '/' + toTime.format("Y-m-d\\TH:00:00.000\\Z");
      this.vendorParams.TIME = timeParam;
    }
    var params = OpenLayers.Util.extend({
        service: "WMS",
        version: firstLayer.params.VERSION,
        request: "GetFeatureInfo",
        layers: (this.queryLayers ? this.queryLayers : layerNames),
        query_layers: (this.queryLayers ? this.queryLayers : layerNames),
        styles: styleNames,
        bbox: bbox,
        feature_count: this.maxFeatures,
        height: this.map.getSize().h,
        width: this.map.getSize().w,
        format: format,
        info_format: firstLayer.params.INFO_FORMAT || this.infoFormat
    }, (parseFloat(firstLayer.params.VERSION) >= 1.3) ?
        {
            crs: (this.srsProj ? this.srsProj : projection),
            i: parseInt(clickPosition.x),
            j: parseInt(clickPosition.y)
        } :
        {
            srs: (this.srsProj ? this.srsProj : projection),
            x: parseInt(clickPosition.x),
            y: parseInt(clickPosition.y)
        }
    );
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

});
