let currentColour = 0;
let currentTool = 1;

// Buttons

const colourBtn = document.querySelector("#colourSelector");
const pencilBtn = document.querySelector("#pencilBtn");
const rubberBtn = document.querySelector("#rubberBtn");
const clearBtn = document.querySelector("#clearBtn");

// Colour Selector

const coloursList = ["black", "firebrick", "orange", "mediumseagreen", "greenyellow", "lightseagreen", "cornflowerblue", "slateblue", "darkviolet", "deeppink", "saddlebrown", "gainsboro", "darkgray", "goldenrod", "pink", "darkorchid", "mediumslateblue", "cyan", "navy", "teal", "limegreen", "gold", "tomato"];

colourBtn.onclick = () => {
    if(currentTool === 1) { 
        if(currentColour === (coloursList.length - 1)) {
            currentColour = 0;
        } else { currentColour++; };
        colourBtn.style.backgroundColor = coloursList[currentColour];
    };
}

// Pencil

pencilBtn.onclick = () => {
    if(currentTool = 2) {
        currentTool = 1;
        rubberBtn.classList.remove("active");
        pencilBtn.classList.add("active");
    } else if(currentTool = 0) {
        currentTool = 1;
        pencilBtn.classList.add("active");
    } else if(currentTool = 1) { currentTool = 1; };
}

// Rubber

rubberBtn.onclick = () => {
    if(currentTool = 1) {
        currentTool = 2;
        rubberBtn.classList.add("active");
        pencilBtn.classList.remove("active");
    } else if(currentTool = 0) {
        currentTool = 2;
        rubberBtn.classList.add("active");
    } else if(currentTool = 2) { currentTool = 2; };
}

// Clear All

clearBtn.onclick = () => {
    clearBtn.classList.add("active");
    setTimeout(() => {
        clearBtn.classList.remove("active");
    }, 500);
    const canvasPixels = document.querySelectorAll(".pixel");
    let pixels = canvasPixels.length;
    for(let i = 0; i < pixels; i++) {
        canvasPixels[i].style.backgroundColor = "white";
    };
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
    canvas.innerHTML = '';
    canvasGen();
};

// Canvas Generator

function canvasGen() {
    const canvas = document.querySelector("#canvas"); 
    for(let i=0; i < currentSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        canvas.appendChild(row);
        for(let i=0; i < slider.value; i++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.style.backgroundColor = "white";
            pixel.addEventListener('mousedown', painting);
    
            row.appendChild(pixel);
        }
    };
};

canvasGen();

// Pixel Painting

function painting(e) {
    if(currentTool == 1) {
        e.target.style.backgroundColor = coloursList[currentColour];
    } if(currentTool == 2) {
        e.target.style.backgroundColor = "white";
    }
    
}


