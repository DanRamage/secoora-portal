
function ol_gradient_style_builder(options) {
  var self = this;

  //self.start_color = options.start_color || '#ff0000';
  //self.end_color =    options.end_color || '#0000ff';
  //self.gradient_steps = options.steps || 12;

  self.build_gradient = function(start_color, end_color, steps, comparison_property)
  {
    var rules = [];
    var c1 = new ColorMix.Color(start_color);
    var c2 = new ColorMix.Color(end_color);
    ColorMix.setGradient([
      {
        'reference': 0,
        'color': c1
      },
      {
        'reference': steps.length,
        'color': c2
      }
    ]);
    var i;
    for(i = 0; i < steps.length; i += 1)
    {
      var color_val = ColorMix.blend(i);
      var filter_type = OpenLayers.Filter.Comparison.BETWEEN;
      if(i === 0)
      {
        var filter_type = OpenLayers.Filter.Comparison.LESS_THAN;
      }
      else if(i === steps.length - 1)
      {
        var filter_type = OpenLayers.Filter.Comparison.GREATER_THAN;
      }
      rules.push(new OpenLayers.Rule({
          // a rule contains an optional filter
          filter: new OpenLayers.Filter.Comparison({
              type: filter_type,
              property: comparison_property,
              value: steps[i]
          }),
          // if a feature matches the above filter, use this symbolizer
          symbolizer: {
              fillColor: color_val.toString(),
              fillOpacity: 0.7
          }
      }));
    }
    return(rules);
  };
  return self;

};