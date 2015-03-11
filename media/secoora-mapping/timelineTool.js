
(function() {
var timelineToolModel = function() {
  var self = this;

  self.hindcast_hours = 24;
  self.forecast_hours = 24;

  self.timelineToolActive = ko.observable(false);

  var now = new Date();
  var dateStr = now.getFullYear().toString() + "-" +
                now.getMonth().toString() + "-" +
                now.getDate().toString() + "" +
                now.getHours().toString() + ":" +
                now.getMinutes().toString() + ":00";

  self.selectedDatetime = ko.observable(dateStr);

  self.setRanges = function(hindcast_hours, forecast_hours)
  {
    self.hindcast_hours = hindcast_hours;
    self.forecast_hours = forecast_hours;
  }
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
        $('#time-slider-popover').show().draggable().position({
              "my": "right middle",
              "at": "left middle",
              "of": $("#btn-measure-tool")
          });
      }
    }
    else
    {
      $('#time-slider-popover').hide();
    }
  }
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
