// Captures SLIDER value

const slider = document.getElementById("canvasSize");
const output = document.getElementById("sliderValue");
output.innerHTML = slider.value;
let currentSize = slider.value;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    currentSize = this.value;
    output.innerHTML = this.value;
};

// Canvas Generator

const canvas = document.querySelector("#canvas"); 
for(let i=0; i < currentSize; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    canvas.appendChild(row);
    for(let i=0; i < slider.value; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.addEventListener('mousedown', painting);
    
        row.appendChild(pixel);
    }
}

// Pixel Painting

let colour = "black";

function painting(e) {
    console.log(e);
    e.target.style.backgroundColor = colour;
}

// Buttons
