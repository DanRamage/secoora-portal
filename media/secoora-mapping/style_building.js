
function ol_gradient_style_builder(options) {
  var self = this;

  //self.start_color = options.start_color || '#ff0000';
  //self.end_color =    options.end_color || '#0000ff';
  //self.gradient_steps = options.steps || 12;
  self.default_colors = ['#8b0000','#960201','#a10a02','#ac1402','#b61f02','#bf2901','#c73301','#ce3e00','#d54900','#dc5300','#e25e00','#e76900','#ec7300','#f17f00','#f58900','#f89500','#fba000','#fdab00','#ffb500','#ffc100','#ffce00','#ffd900','#ffe300','#ffee00','#fff900','#0afc13','#1af328','#23ec37','#29e443','#2edc4e','#32d459','#36cd67','#39c577','#3dba97','#49adc9','#4fa2dd','#5298e7','#538eee','#5386f2','#527cf6','#5072f9','#4e69fb','#4b60fc','#4657fe','#414dfe','#3b42ff','#3438ff','#2a2bff','#1c1cff','#0000ff'];
  self.build_filters = function(lower_bound, upper_bound, number_steps, comparison_property)
  {
    self.default_colors.reverse();
    var rules = [];
    var data_step = (upper_bound - lower_bound) / number_steps;
    var color_ndx_step = self.default_colors.length / number_steps;
    var last_lower;
    var color_ndx = 0;
    for( var ndx = 0; ndx < number_steps; ndx += 1)
    {
      rgb_val =  self.default_colors[color_ndx];

      if(ndx === 0)
      {
        filter = new OpenLayers.Filter.Comparison({
              type: OpenLayers.Filter.Comparison.LESS_THAN,
              property: comparison_property,
              value: lower_bound
          });
        last_lower = lower_bound + data_step;
      }
      else if(ndx < self.default_colors.length - 2)
      {
        filter = new OpenLayers.Filter.Comparison({
              type: OpenLayers.Filter.Comparison.BETWEEN,
              property: comparison_property,
              lowerBoundary: last_lower,
              upperBoundary: last_lower + data_step
          });
        last_lower += data_step;
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
              fillColor: rgb_val,
              fillOpacity: 0.7,
              pointRadius: 10,
              fontSize: "10px",
              fontWeight: "bold"
          }
      }));
      color_ndx += Math.floor(data_step);
      if(color_ndx >= self.default_colors.length)
      {
        color_ndx = self.default_colors.length - 1;
      }

    }
    /*
    $.each(self.default_colors, function(ndx, rgb_val)
    {
      var filter;
      if(ndx === 0)
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
              fillColor: rgb_val,
              fillOpacity: 0.7,
              pointRadius: 10,
              fontSize: "10px",
              fontWeight: "bold"
          }
      }));
    });
    */
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