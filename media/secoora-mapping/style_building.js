
function ol_gradient_style_builder(options) {
  var self = this;

  //self.start_color = options.start_color || '#ff0000';
  //self.end_color =    options.end_color || '#0000ff';
  //self.gradient_steps = options.steps || 12;
  self.default_colors = [
  '#800000','#830000','#870001','#8a0001','#8d0002','#900002','#940002','#970002','#9a0003','#9e0003','#a10003','#a50003','#a80003','#ac0003','#af0003','#b20003','#b60003','#b90003','#bd0003','#c00003','#c40003','#c80003','#cb0002','#cf0002','#d20002','#d60002','#d90002','#dd0002','#e10002','#e40001','#e80001','#ec0001','#ef0001','#f30001','#f70001','#fa0000','#fe0000','#ff1500','#ff2500','#ff3100','#ff3a00','#ff4200','#ff4900','#ff5000','#ff5600','#ff5c00','#ff6200','#ff6700','#ff6d00','#ff7200','#ff7700','#ff7c00','#ff8000','#ff8500','#ff8a00','#ff8e00','#ff9300','#ff9700','#ff9b00','#ffa000','#ffa400','#ffa800','#ffac00','#ffb000','#ffb500','#ffb900','#ffbd00','#ffc100','#ffc500','#ffc900','#ffcd00','#ffd100','#ffd500','#ffd700','#ffd900','#ffda00','#ffdb00','#ffdc00','#ffdd00','#ffde00','#ffdf00','#ffe000','#ffe100','#ffe300','#ffe400','#ffe500','#ffe600','#ffe700','#ffe800','#ffe900','#ffea00','#ffeb00','#ffec00','#ffee00','#ffef00','#fff000','#fff100','#fff200','#fff300','#fff400','#fff500','#fff600','#fff700','#fff900','#fffa00','#fffb00','#fffc00','#fffd00','#fffe00','#ffff00','#fcff00','#f9ff00','#f6ff00','#f2ff00','#efff00','#ecff00','#e9ff00','#e6ff00','#e3ff00','#e0ff00','#ddff00','#d9ff00','#d6ff00','#d3ff00','#d0ff00','#ccff00','#c9ff00','#c6ff00','#c2ff00','#bfff00','#bbff00','#b8ff00','#b4ff00','#b1ff00','#adff00','#a9ff00','#a5ff00','#a2ff00','#9eff00','#9aff00','#96ff00','#91ff00','#8dff00','#89ff00','#84ff00','#80ff00','#80ff15','#81ff23','#82ff2e','#82ff36','#83ff3e','#84ff45','#85ff4b','#85ff51','#86ff57','#86ff5c','#87ff62','#87ff67','#88ff6c','#88ff71','#88ff76','#89ff7b','#89ff7f','#89ff84','#89ff88','#89ff8d','#89ff91','#89ff96','#88ff9a','#88ff9f','#88ffa3','#87ffa8','#87ffac','#86ffb0','#86ffb4','#85ffb9','#84ffbd','#84ffc1','#83ffc5','#82ffca','#81ffce','#80ffd2','#7dfdd3','#7bf9d0','#78f5ce','#75f2cb','#72eec9','#6feac7','#6ce7c4','#69e3c2','#67e0c0','#64dcbd','#61d8bb','#5ed5b9','#5bd1b6','#58ceb4','#55cab2','#52c7af','#4fc3ad','#4dbfab','#4abca8','#47b8a6','#44b5a4','#40b2a1','#3dae9f','#3aab9d','#37a79a','#34a498','#30a096','#2d9d94','#299a91','#25968f','#22938d','#1d908b','#198c88','#148986','#0d8684','#068282','#047f81','#117d85','#197b88','#1f798c','#24778f','#287593','#2b7396','#2e709a','#306e9d','#326ca1','#346aa4','#3667a7','#3765ab','#3863ae','#3960b2','#3a5eb5','#3b5bb9','#3b59bc','#3b56c0','#3b53c3','#3b51c7','#3a4eca','#3a4bce','#3948d1','#3845d5','#3742d8','#353edc','#333bdf','#3137e3','#2f33e6','#2c2fea','#282aed','#2425f1','#1f1ff4','#1918f8','#0f0efb','#0000ff'
  ];
  self.build_legend = function(lower_bound, upper_bound, number_steps)
  {
    self.default_colors.reverse();

    /*
    <table>
      <thead>
        <tr>
          {{units}}
        </tr>
      </thead>
      <tbody>
        {% for legendObj in legend %}
          <tr>
            <td><img border='0', src="data:{{ legendObj.contentType }};base64,{{ legendObj.imageData }}", style='opacity:1'></img></td>
            <td>{{legendObj.label}}</td>
          </tr>
        {% endfor %}
      </tbody>
    </table>
     */
    var legend_html = '';
    self.default_colors.reverse();
    var rules = [];
    var data_step = (upper_bound - lower_bound) / number_steps;
    var color_ndx_step =  Math.floor(self.default_colors.length / number_steps);
    var last_lower = lower_bound;
    var step_marker = 0;
    var steps = [];
    steps.push("<tbody");
    for( var ndx = 0; ndx < self.default_colors.length; ndx += 1)
    {
      var rgb_val = self.default_colors[ndx];
      var color_col = "<td class='legend_color_td' style='background: none repeat scroll 0% 0% " + rgb_val + ";'></td>";
      var step_col = '';
      if(ndx === 0)
      {
        step_col = '<td>' + lower_bound + '</td>';
        last_lower += data_step;
      }
      else if(((ndx % color_ndx_step === 0) && (ndx < self.default_colors.length - 2)) && (ndx % 5 === 0))
      {
        step_col = '<td>' + Math.floor(last_lower + 0.5) + '</td>';
        last_lower += data_step;
      }
      else if (ndx === self.default_colors.length - 1)
      {
        step_col = '<td>' + upper_bound + '</td>';
        last_lower += data_step;
      }
      /*
      if((ndx === 0 || ndx === self.default_colors.length - 1) || (ndx % 5 ===0)) {
        steps.push("<tr>" + color_col + step_col + "</tr>");
      }
      */
    }
    steps.push("</tbody>");
    legend_html = "<table class='legend_table'>" + steps.join("\n") + "</table>";
    return(legend_html);
  };
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
        filter = new OpenLayers.Filter.Function({
          params: {'compare': comparison_property,
          'lower_bound': lower_bound},
          evaluate: function(feature)
          {
            if(this.params.compare in feature.obs) {
              var property = feature.obs[this.params.compare];
              var value = property.value;
              return(value < this.params.lower_bound);
            }
            return(false);
          }
        });
        /*
        filter = new OpenLayers.Filter.Comparison({
              type: OpenLayers.Filter.Comparison.LESS_THAN,
              property: comparison_property,
              value: lower_bound
          });
          */
        last_lower = lower_bound + data_step;
      }
      else if(ndx < self.default_colors.length - 2)
      {
        var next_step = last_lower + data_step;
        filter = new OpenLayers.Filter.Function({
          params: {'compare': comparison_property,
            'lower_bound': last_lower,
            'upper_bound': next_step},
          evaluate: function(feature)
          {
            if(this.params.compare in feature.obs)
            {
              var property = feature.obs[this.params.compare];
              var value = property.value;
              return((value >= this.params.lower_bound) && (value < this.params.upper_bound));
            }
            return(false);
          }
        });

        /*filter = new OpenLayers.Filter.Comparison({
              type: OpenLayers.Filter.Comparison.BETWEEN,
              property: comparison_property,
              lowerBoundary: last_lower,
              upperBoundary: last_lower + data_step
          });*/
        last_lower += data_step;
      }
      else
      {
        filter = new OpenLayers.Filter.Function({
          params: {'compare': comparison_property,
          'upper_bound': next_step},
          evaluate: function(feature)
          {
            if(this.params.compare in feature.obs) {
              var property = feature.obs[this.params.compare];
              var value = property.value;
              return(value > this.params.upper_bound);
            }
            return(false);
          }
        });

        /*
        filter = new OpenLayers.Filter.Comparison({
              type: OpenLayers.Filter.Comparison.GREATER_THAN,
              property: comparison_property,
              value: upper_bound
          });
        */
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