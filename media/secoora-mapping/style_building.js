
function ol_gradient_style_builder(options) {
  var self = this;

  //self.start_color = options.start_color || '#ff0000';
  //self.end_color =    options.end_color || '#0000ff';
  //self.gradient_steps = options.steps || 12;
  self.default_colors = [
  '#8b0000','#8e0000','#910001','#940001','#970001','#9a0001','#9d0002','#a00002','#a30002','#a60002','#aa0002','#ad0002','#b00002','#b30002','#b60002','#b90002','#bc0002','#c00002','#c30002','#c60002','#c90002','#cd0002','#d00002','#d30002','#d60002','#da0001','#dd0001','#e00001','#e30001','#e70001','#ea0001','#ed0001','#f10001','#f40000','#f70000','#fb0000','#fe0000','#ff1500','#ff2500','#ff3100','#ff3a00','#ff4200','#ff4900','#ff5000','#ff5600','#ff5c00','#ff6200','#ff6700','#ff6d00','#ff7200','#ff7700','#ff7c00','#ff8000','#ff8500','#ff8a00','#ff8e00','#ff9300','#ff9700','#ff9b00','#ffa000','#ffa400','#ffa800','#ffac00','#ffb000','#ffb500','#ffb900','#ffbd00','#ffc100','#ffc500','#ffc900','#ffcd00','#ffd100','#ffd500','#ffd700','#ffd900','#ffda00','#ffdb00','#ffdc00','#ffdd00','#ffde00','#ffdf00','#ffe000','#ffe100','#ffe300','#ffe400','#ffe500','#ffe600','#ffe700','#ffe800','#ffe900','#ffea00','#ffeb00','#ffec00','#ffee00','#ffef00','#fff000','#fff100','#fff200','#fff300','#fff400','#fff500','#fff600','#fff700','#fff900','#fffa00','#fffb00','#fffc00','#fffd00','#fffe00','#feff00','#faff00','#f6ff00','#f2ff00','#eeff00','#eaff00','#e5ff00','#e1ff00','#ddff00','#d8ff00','#d4ff00','#cfff00','#cbff00','#c6ff00','#c1ff00','#bdff00','#b8ff00','#b3ff00','#aeff00','#a9ff00','#a4ff00','#9eff00','#99ff00','#93ff00','#8dff00','#87ff00','#81ff00','#7aff00','#73ff00','#6cff00','#64ff00','#5bff00','#52ff00','#47ff00','#3aff00','#29ff00','#09ff00','#09fc11','#12f81d','#18f425','#1cf12c','#1fed32','#22e937','#25e63b','#27e240','#29de43','#2adb47','#2bd74a','#2cd44e','#2dd051','#2ecd53','#2ec956','#2fc559','#2fc25b','#2fbe5e','#2fbb60','#2eb762','#2eb465','#2db067','#2cad69','#2baa6b','#2aa66d','#29a36f','#279f70','#259c72','#239974','#219576','#1e9277','#1b8f79','#178b7b','#13887c','#0c857e','#04817f','#008282','#008585','#008888','#008c8c','#008f8f','#009292','#009696','#009999','#009d9d','#00a0a0','#00a3a3','#00a7a7','#00aaaa','#00aeae','#00b1b1','#00b5b5','#00b8b8','#00bbbb','#00bfbf','#00c3c3','#00c6c6','#00caca','#00cdcd','#00d1d1','#00d4d4','#00d8d8','#00dbdb','#00dfdf','#00e3e3','#00e6e6','#00eaea','#00eeee','#00f1f1','#00f5f5','#00f9f9','#00fcfc','#0cfdff','#21f7ff','#2df1ff','#36ebff','#3de5ff','#42dfff','#46d9ff','#4ad3ff','#4dcdff','#50c7ff','#52c1ff','#54bbff','#55b5ff','#56afff','#57a9ff','#57a3ff','#589dff','#5897ff','#5791ff','#578bff','#5685ff','#557fff','#5379ff','#5173ff','#506dff','#4d66ff','#4b60ff','#4859ff','#4553ff','#414cff','#3d45ff','#383dff','#3235ff','#2b2dff','#2322ff','#1716ff','#0000ff'
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