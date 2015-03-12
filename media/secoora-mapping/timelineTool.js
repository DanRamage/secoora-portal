
(function() {
var timelineToolModel = function(viewModel) {
  var self = this;

  self.parentViewModel = viewModel;
  self.hindcast_hours = 24;
  self.forecast_hours = 24;

  self.timelineToolActive = ko.observable(false);

  self.selectedDatetime = ko.observable("");
  self.startingEpochDatetime = -1;

  $("#time-slider-popover").find("#time_slider").slider({
    min: -1 * self.hindcast_hours,
    max: self.forecast_hours,
    step: 1,
    //Slide handler updates the time display, no queries are done in this handler.
    slide: function (event, ui) {
      //The slider increments in 1 hour movements, for ease of calcs,
      //we use the epoch milliseconds and the add(or subtract) the movement
      //amount of the slider, then convert it to a readable time string.
      var adjusted = self.startingEpochDatetime + (ui.value * 3600000);
      var new_date = new Date(adjusted);
      self.selectedDatetime(
                new_date.getUTCFullYear().toString() + "-" +
                ("0" + new_date.getUTCMonth()).slice(-2) + "-" +
                ("0" + new_date.getUTCDate()).slice(-2) + " " +
                ("0" + new_date.getUTCHours()).slice(-2) + ":" +
                ("0" + new_date.getUTCMinutes()).slice(-2) + ":00"
      );
    },
    //When the user stops moving the thumbtrack, the active layers are then queried.
    stop: function( event, ui ) {
      $.each(self.parentViewModel.activeLayers(), function(i, layer) {
        if (layer.has_time_offsets) {
          var closest_date_ndx = bisect_left(Math.round(self.startingEpochDatetime/1000), layer.timeSteps);
          if(closest_date_ndx != -1)
          {
            var closest_date = new Date(layer.timeSteps[closest_date_ndx] * 1000);
            var wms_t = closest_date.getUTCFullYear().toString() + "-" +
                        ("0" + closest_date.getUTCMonth()).slice(-2) + "-" +
                        ("0" + closest_date.getUTCDate()).slice(-2) + "T" +
                        ("0" + closest_date.getUTCHours()).slice(-2) + ":" +
                        ("0" + closest_date.getUTCMinutes()).slice(-2) + ":00.000Z"

            layer.layer.mergeNewParams({'TIME':wms_t,
                                        'salt': Math.random()});

          }
        }
      });
    }
  });


  self.setRanges = function(hindcast_hours, forecast_hours)
  {
    self.hindcast_hours = hindcast_hours;
    self.forecast_hours = forecast_hours;
  };
  self.timelineToolClick = function(event)
  {
    //Toggle the state.
    if(self.timelineToolActive() === false)
    {
      self.enableControl(true);
    }
    else
    {
      self.enableControl(false);
    }
  };
  self.enableControl = function(enable)
  {
    if(enable)
    {
      self.timelineToolActive(true);
      self.showTimelinePopup(true);
    }
    else
    {
      self.timelineToolActive(false);
      self.showTimelinePopup(false);
    }
  };
  self.showTimelinePopup = function(show)
  {
    if(show)
    {
      if(!$('#time-slider-popover').is(":visible"))
      {
        var new_date = new Date();
        var dateStr = new_date.getUTCFullYear().toString() + "-" +
                          new_date.getUTCFullYear().toString() + "-" +
                          ("0" + new_date.getUTCMonth()).slice(-2) + "-" +
                          ("0" + new_date.getUTCDate()).slice(-2) + " " +
                          ("0" + new_date.getUTCHours()).slice(-2) + ":" +
                          ("0" + new_date.getUTCMinutes()).slice(-2) + ":00";
        self.startingEpochDatetime = new_date.getTime();
        self.selectedDatetime(dateStr);
        $('#time-slider-popover').width($("#map-panel").width());
        $('#time-slider-popover').show().draggable().position({
              "my": "left bottom",
              "at": "left bottom",
              "of": $("#map-panel")
          });
        $('#time-slider-popover').width($("#map-panel").width() * 0.9);
      }
    }
    else
    {
      $('#time-slider-popover').hide();
    }
  };
  self.handleSlider = function(event)
  {
  };
  self.closeWindow = function(event)
  {
    self.showTimelinePopup(false);
  };

};

app.viewModel.timelineTool = new timelineToolModel(app.viewModel);
})();
