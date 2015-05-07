
function ol_gradient_style_builder(options) {
  var self = this;

  //self.start_color = options.start_color || '#ff0000';
  //self.end_color =    options.end_color || '#0000ff';
  //self.gradient_steps = options.steps || 12;
  self.default_colors = ['#8b0000','#a81002','#c02b01','#d34600','#e46200','#f17d00','#fa9900','#ffb700','#ffd400','#fff100','#17f524','#2be146','#35cd66','#43b3b7','#5297e8','#537ef5','#4d67fb','#424efe','#3033ff','#0000ff'];

  self.build_filters = function(lower_bound, upper_bound, number_steps, comparison_property)
  {
    var rules = [];
    var step = (upper_bound - lower_bound) / self.default_colors.length;
    var last_lower;
    $.each(self.default_colors, function(ndx, rgb_val)
    {
      var filter;
      var color_val = self.default_colors[ndx];
      if(i === 0)
      {
        filter = new OpenLayers.Filter.Comparison({
              type: OpenLayers.Filter.Comparison.LESS_THAN,
              property: comparison_property,
              value: lower_bound
          });
        last_lower = lower_bound + step;
      }
      else if(ndx < self.default_colors.length - 2)
      {
        filter = new OpenLayers.Filter.Comparison({
              type: OpenLayers.Filter.Comparison.BETWEEN,
              property: comparison_property,
              lowerBoundary: last_lower,
              upperBoundary: last_lower + step
          });
        last_lower += step;
      }
      else
      {
        filter = new OpenLayers.Filter.Comparison({
              type: OpenLayers.Filter.Comparison.GREATER_THAN,
              property: comparison_property,
              value: upper_bound
          });
      }
      rules.push(new OpenLayers.Rule({
          // a rule contains an optional filter
          filter: filter,
          // if a feature matches the above filter, use this symbolizer
          symbolizer: {
              fillColor: color_val,
              fillOpacity: 0.7,
              pointRadius: 10,
              fontSize: "9px"
          }
      }));
    });
    return(rules);
  };

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
              property: comparison_property,
              value: steps[i]
          });
      }
      else if(i < steps.length - 2)
      {
        filter = new OpenLayers.Filter.Comparison({
              type: OpenLayers.Filter.Comparison.BETWEEN,
              property: comparison_property,
              lowerBoundary: steps[i],
              upperBoundary: steps[i+1]
          });
      }
      else
      {
        filter = new OpenLayers.Filter.Comparison({
              type: OpenLayers.Filter.Comparison.GREATER_THAN,
              property: comparison_property,
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
              pointRadius: 10,
              fontSize: "9px"
          }
      }));
    }
    return(rules);
  };
  return self;

};