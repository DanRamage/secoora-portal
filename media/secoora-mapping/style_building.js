
function ol_gradient_style_builder(options) {
  var self = this;

  //self.start_color = options.start_color || '#ff0000';
  //self.end_color =    options.end_color || '#0000ff';
  //self.gradient_steps = options.steps || 12;
  self.default_colors = [
  '#8b0000','#8e0000','#900001','#930001','#950001','#980001','#9b0001','#9d0002','#a00002','#a20002','#a50002','#a80002','#aa0002','#ad0002','#b00002','#b30002','#b50002','#b80002','#bb0002','#bd0002','#c00002','#c30002','#c60002','#c80002','#cb0002','#ce0002','#d10002','#d30002','#d60002','#d90001','#dc0001','#df0001','#e10001','#e40001','#e70001','#ea0001','#ed0001','#f00001','#f30001','#f50000','#f80000','#fb0000','#fe0000','#ff1200','#ff2100','#ff2c00','#ff3500','#ff3c00','#ff4300','#ff4900','#ff4f00','#ff5400','#ff5a00','#ff5f00','#ff6300','#ff6800','#ff6d00','#ff7100','#ff7500','#ff7900','#ff7e00','#ff8200','#ff8600','#ff8a00','#ff8d00','#ff9100','#ff9500','#ff9900','#ff9d00','#ffa000','#ffa400','#ffa700','#ffab00','#ffaf00','#ffb200','#ffb600','#ffb900','#ffbd00','#ffc000','#ffc400','#ffc700','#ffcb00','#ffce00','#ffd100','#ffd500','#ffd700','#ffd800','#ffd900','#ffda00','#ffdb00','#ffdc00','#ffdd00','#ffde00','#ffdf00','#ffe000','#ffe100','#ffe200','#ffe300','#ffe400','#ffe500','#ffe600','#ffe600','#ffe700','#ffe800','#ffe900','#ffea00','#ffeb00','#ffec00','#ffed00','#ffee00','#ffef00','#fff000','#fff100','#fff200','#fff300','#fff400','#fff500','#fff600','#fff700','#fff700','#fff800','#fff900','#fffa00','#fffb00','#fffc00','#fffd00','#fffe00','#00ff00','#09fc11','#11f91c','#16f523','#1af229','#1eef2f','#20ec33','#23e938','#25e63b','#27e33f','#28e042','#2adc46','#2bd949','#2cd64b','#2dd34e','#2dd051','#2ecd53','#2eca55','#2fc758','#2fc45a','#2fc15c','#2fbe5e','#2fbb60','#2eb862','#2eb564','#2db266','#2daf68','#2cac69','#2ba96b','#2aa66d','#29a36e','#28a070','#269d71','#259a73','#239874','#219576','#1e9277','#1c8f79','#198c7a','#15897c','#10877d','#0a847e','#038180','#008282','#008585','#008787','#008a8a','#008d8d','#009090','#009393','#009696','#009999','#009c9c','#009e9e','#00a1a1','#00a4a4','#00a7a7','#00aaaa','#00adad','#00b0b0','#00b3b3','#00b6b6','#00b9b9','#00bcbc','#00bfbf','#00c2c2','#00c5c5','#00c8c8','#00cbcb','#00cece','#00d1d1','#00d4d4','#00d7d7','#00dada','#00dede','#00e1e1','#00e4e4','#00e7e7','#00eaea','#00eded','#00f0f0','#00f3f3','#00f7f7','#00fafa','#00fdfd','#0cfdff','#1ff8ff','#2af3ff','#32eeff','#39e9ff','#3ee3ff','#43deff','#46d9ff','#4ad4ff','#4ccfff','#4fcaff','#51c5ff','#53c0ff','#54baff','#55b5ff','#56b0ff','#57abff','#57a6ff','#58a1ff','#589cff','#5897ff','#5791ff','#578cff','#5687ff','#5582ff','#547dff','#5377ff','#5172ff','#506dff','#4e67ff','#4b62ff','#495cff','#4657ff','#4351ff','#404bff','#3d45ff','#383eff','#3438ff','#2e30ff','#2828ff','#201fff','#1413ff','#0000ff'
  ];
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
      var rgb_val =  self.default_colors[color_ndx];

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
      color_ndx += Math.floor(color_ndx_step);
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