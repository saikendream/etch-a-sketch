let currentColour = 0;
let currentTool = 1;

// Buttons

// Colour Selector

const coloursList = ["black", "firebrick", "gold", "mediumseagreen", "greenyellow", "lightseagreen", "cornflowerblue"];

const colourBtn = document.querySelector("#colourSelector");
colourBtn.onclick = () => {
    if(currentColour === coloursList.length) {
        currentColour = 0;
    } else { currentColour++; };
    colourBtn.style.backgroundColor = coloursList[currentColour];
}

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
};

// Pixel Painting

function painting(e) {
    console.log(e);
    e.target.style.backgroundColor = coloursList[currentColour];
}


