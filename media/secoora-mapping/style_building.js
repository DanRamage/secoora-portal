
function ol_gradient_style_builder(options) {
  var self = this;

  //self.start_color = options.start_color || '#ff0000';
  //self.end_color =    options.end_color || '#0000ff';
  //self.gradient_steps = options.steps || 12;
  self.default_colors = [
  '#8b0000','#8e0000','#900001','#920101','#940201','#960201','#980301','#9b0402','#9c0602','#9f0702','#a10902','#a30c02','#a50e02','#a71002','#a91102','#ab1302','#ad1502','#af1702','#b01902','#b21c02','#b41e02','#b62002','#b82102','#b92302','#bb2601','#bd2701','#be2901','#c02b01','#c22d01','#c43001','#c53201','#c63301','#c83501','#ca3700','#cb3a00','#cd3c00','#ce3e00','#cf4000','#d14100','#d24400','#d44600','#d54800','#d64a00','#d84c00','#d94e00','#da5000','#db5200','#dd5400','#de5600','#df5800','#e05b00','#e15d00','#e25f00','#e36100','#e46300','#e56500','#e66700','#e86900','#e96b00','#ea6d00','#ea6f00','#eb7100','#ec7400','#ed7600','#ee7800','#ef7a00','#f07b00','#f17e00','#f18000','#f28200','#f38400','#f48600','#f48900','#f58b00','#f68d00','#f68e00','#f79000','#f89200','#f89500','#f99600','#fa9a00','#fa9c00','#fb9e00','#fb9f00','#fba100','#fca400','#fda700','#fda800','#fdaa00','#fead00','#feae00','#feb100','#ffb300','#ffb500','#ffb700','#ffb900','#ffbb00','#ffbe00','#ffc100','#ffc300','#ffc500','#ffc700','#ffca00','#ffcc00','#ffce00','#ffd000','#ffd200','#ffd500','#ffd600','#ffd800','#ffda00','#ffdd00','#ffdf00','#ffe100','#ffe300','#ffe600','#ffe700','#ffe900','#ffec00','#ffef00','#fff000','#fff300','#fff400','#fff700','#fff900','#fffa00','#fffc00','#00ff00','#04fe09','#09fc11','#0dfa16','#11f91b','#13f71f','#15f622','#18f426','#1af328','#1cf12c','#1df12e','#20ee32','#21ed34','#23eb37','#24ea39','#25e83c','#26e73d','#28e540','#28e542','#2ae245','#2be246','#2cdf49','#2dde4b','#2edd4e','#2edb4f','#2fda52','#30d953','#31d756','#32d658','#33d45b','#33d25d','#34d160','#34cf61','#35ce65','#36cd67','#36ca6a','#37c86e','#38c870','#38c575','#39c477','#3ac27c','#3ac181','#3bbf84','#3cbd8b','#3dba97','#3fb8a0','#41b5ae','#44b3ba','#46b1c1','#49adc9','#4aacce','#4ba9d2','#4da7d5','#4ea5d9','#4fa3dd','#50a0df','#509fe0','#519de3','#519ce4','#529ae6','#5297e8','#5396e9','#5393eb','#5392eb','#5390ed','#538eee','#538cef','#538af0','#5389f1','#5386f2','#5386f2','#5384f3','#5382f4','#537ff5','#537ef5','#527df6','#527af7','#5278f7','#5176f8','#5176f8','#5174f9','#5071f9','#506ffa','#4f6efa','#4f6cfa','#4e6bfb','#4d69fb','#4d66fb','#4c65fc','#4c64fc','#4b62fc','#4a5ffd','#495dfd','#485cfd','#485bfd','#4759fd','#4657fe','#4555fe','#4452fe','#4350fe','#424ffe','#424dfe','#404bff','#3f49ff','#3e47ff','#3c45ff','#3b43ff','#3a41ff','#383fff','#373cff','#363bff','#3438ff','#3336ff','#3133ff','#2f31ff','#2d2fff','#2b2cff','#292aff','#2727ff','#2424ff','#2222ff','#1f1eff','#1b1bff','#1817ff','#1413ff','#0f0dff','#0707ff','#0000ff'
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