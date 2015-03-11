
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
    slide: function (event, ui) {
      //The slider increments in 1 hour movements, for ease of calcs,
      //we use the epoch milliseconds and the add(or subtract) the movement
      //amount of the slider, then convert it to a readable time string.
      var adjusted = self.startingEpochDatetime + (ui.value * 3600000);
      var new_date = new Date(adjusted);
      self.selectedDatetime(
                new_date.getFullYear().toString() + "-" +
                ("0" + new_date.getMonth()).slice(-2) + "-" +
                ("0" + new_date.getDate()).slice(-2) + " " +
                ("0" + new_date.getHours()).slice(-2) + ":" +
                ("0" + new_date.getMinutes()).slice(-2) + ":00"
      );
    },
    stop: function( event, ui ) {
      var layer_ids = [];
      $.each(self.parentViewModel.activeLayers(), function(i, layer) {
        if (layer.has_time_offsets) {
          closest_date = bisect_left(Math.round(self.startingEpochDatetime/1000), layer.timeSteps);
          layer_id.push({'layer_id': layer.id});

        }
      });
      var json_query = {'datetime' : self.selectedDatetime(),
                        'layer_ids': layer_ids};
      /*
      $.ajax({
          async: true,
          url: '/data_manager/get_time_increments/'+ self.id,
          type: 'POST',
          contentType: 'application/json; charset=utf-8',
          data: $.toJSON(myEvent),
          dataType: 'text',
          success: function(result) {
            result;
          },
          error: function(result) {
            result;
          }
      });
      */

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
        var dateStr = new_date.getFullYear().toString() + "-" +
                          new_date.getFullYear().toString() + "-" +
                          ("0" + new_date.getMonth()).slice(-2) + "-" +
                          ("0" + new_date.getDate()).slice(-2) + " " +
                          ("0" + new_date.getHours()).slice(-2) + ":" +
                          ("0" + new_date.getMinutes()).slice(-2) + ":00";
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
