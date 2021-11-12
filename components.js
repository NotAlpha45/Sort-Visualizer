// Functions for handling all the components in the board.

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

function button_maker(parent, position, label, func, style_attributes) {
  button = createButton(label);
  button.position(position[0], position[1]);

  // Will apply all the attributes mentioned in the style_attributes list accordingly.
  style_attributes.forEach(function (attribute) {
    button.style(attribute);
  });

  button.mousePressed(func);
  button.parent(parent);
}

function element_maker(parent, header_size, text, pos, element_attributes) {
  element = createElement(header_size, text);
  element.parent(parent);
  element.position(pos[0], pos[1]);
  // element.style("font-family: cursive");
  element_attributes.forEach(function (attribute) {
    element.style(attribute);
  });
}

//Creates dropdown list
function dropdown_maker(parent, position, options, default_value, style_attributes) {
  dropdown = createSelect();
  dropdown.position(position[0], position[1]);

  options.forEach(function (option) {
    dropdown.option(option);
  });

  dropdown.selected(default_value);

  style_attributes.forEach(function (attribute) {
    dropdown.style(attribute);
  })

  return dropdown;
}

function checkbox_maker(parent, label, default_val, position, func, style_attributes) {
  checkbox = createCheckbox(label, default_val);
  
  style_attributes.forEach(function (attribute) {
    checkbox.style(attribute);
  })

  checkbox.parent(parent);
  checkbox.position(position[0], position[1]);
  checkbox.mousePressed(func);

  return checkbox;
}

function translate_components(translation_width) {
  canvas_size[0] = translation_width;
  rect_width = (canvas_size[0] - rect_pos_offset) / array_size;
  rect_height_factor = -(canvas_size[1] / highest_val);
}
