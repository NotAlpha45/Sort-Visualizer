function slider_maker(
  parent,
  min_value,
  max_value,
  default_value,
  step,
  position,
  style_attributes
) {
  slider = createSlider(min_value, max_value, default_value, step);
  slider.parent(parent);
  slider.position(position[0], position[1]);
  style_attributes.forEach(function (attribute) {
    slider.style(attribute);
  });

  return slider;
}

function translate_components(translation_width) {
  canvas_size[0] = translation_width;
  rect_width = Math.ceil(canvas_size[0] / array_size);
  rect_height_factor = -(canvas_size[1] / highest_val);
}
