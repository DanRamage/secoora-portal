
(function() {
var timelineToolModel = function() {
  var self = this;

  self.hindcast_hours = 24;
  self.forecast_hours = 24;

  self.timelineToolActive = ko.observable(false);

  var now = new Date();
  var dateStr = now.getFullYear().toString() + "-" +
                now.getMonth().toString() + "-" +
                now.getDate().toString() + " " +
                now.getHours().toString() + ":" +
                now.getMinutes().toString() + ":00";
  self.currentEpochDatetime = now.getTime();
  self.selectedDatetime = ko.observable(dateStr);

  $("#time-slider-popover").find("#time_slider").slider({
    min: -1 * self.hindcast_hours,
    max: self.forecast_hours,
    step: 1,
    slide: function (event, ui) {

      self.currentEpochDatetime = self.currentEpochDatetime + (ui.value * 3600);
      var new_date = new Date(self.currentEpochDatetime);
      self.selectedDatetime(
                new_date.getFullYear().toString() + "-" +
                new_date.getMonth().toString() + "-" +
                new_date.getDate().toString() + " " +
                new_date.getHours().toString() + ":" +
                new_date.getMinutes().toString() + ":00"
      );
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

app.viewModel.timelineTool = new timelineToolModel();
})();
