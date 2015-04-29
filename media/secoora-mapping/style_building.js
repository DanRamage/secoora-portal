
function ol_gradient_style_builder(options) {
  var self = this;

  //self.start_color = options.start_color || '#ff0000';
  //self.end_color =    options.end_color || '#0000ff';
  //self.gradient_steps = options.steps || 12;

  self.build_gradient = function(start_color, end_color, steps)
  {
    var c1 = new ColorMix.Color(start_color);
    var c2 = new ColorMix.Color(end_color);
    ColorMix.setGradient([
      {
        'reference': 0,
        'color': c1
      },
      {
        'reference': steps,
        'color': c2
      }
    ]);
    var i;
    for(i = 0; i < steps; i += 1)
    {
      var color_val = ColorMix.blend(i);
    }
  };
  return self;

};