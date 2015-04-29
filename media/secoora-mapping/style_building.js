
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
      var filter;
      if(i === 0)
      {
        filter = new OpenLayers.Filter.Comparison({
              type: OpenLayers.Filter.Comparison.LESS_THAN,
              property: "${comparison_property}",
              value: steps[i]
          });
      }
      else if(i < steps.length - 2)
      {
        filter = new OpenLayers.Filter.Comparison({
              type: OpenLayers.Filter.Comparison.BETWEEN,
              property: "${comparison_property}",
              lowerBoundary: steps[i],
              upperBoundary: steps[i+1]
          });
      }
      else
      {
        filter = new OpenLayers.Filter.Comparison({
              type: OpenLayers.Filter.Comparison.GREATER_THAN,
              property: "${comparison_property}",
              value: steps[i]
          });
      }
      rules.push(new OpenLayers.Rule({
          // a rule contains an optional filter
          filter: filter,
          // if a feature matches the above filter, use this symbolizer
          symbolizer: {
              fillColor: color_val.toString(),
              fillOpacity: 0.7,
              pointRadius: 7,
              fontSize: "9px"
          }
      }));
    }
    return(rules);
  };
  return self;

};