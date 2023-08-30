// Captures SLIDER value
const slider = document.getElementById("canvasSize");
const output = document.getElementById("sliderValue");
output.innerHTML = slider.value;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
  };