const container = document.querySelector(".container");
const rowContainer = document.querySelector(".row-container");
let isRainbowMode = false;
function createGrid(size)
    {
        for (i = 0; i < size; i++)
        {
                const row = document.createElement("div");
                console.log(3);
                row.classList.add("row");
                rowContainer.appendChild(row);
                for (j = 0; j < size; j++) {
                    const square = document.createElement("div");
                    square.classList.add("grid-square");
                    row.appendChild(square);
                }    
        }
    };
const clearGrid = () => {
    while(rowContainer.firstChild) {
        rowContainer.removeChild(rowContainer.firstChild);
    }
}
const buildRgbVal = (r, b, g) => {
    return "rgb(" + r + "," + g + "," + b +")";
}
createGrid(16);
addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("grid-square"))
        {
            if (isRainbowMode) {
                rgb1 = Math.floor(Math.random() * 256);
                rgb2 = Math.floor(Math.random() * 256);
                rgb3 = Math.floor(Math.random() * 256);
                rgb = buildRgbVal(rgb1, rgb2, rgb3);
                event.target.style.backgroundColor = rgb;
            } else 
            event.target.style.backgroundColor = "black";

        }
});
addEventListener("click", (event) => {
    if (event.target.classList.contains("grid-change"))
        {
            const size = prompt("Choose size:");
            clearGrid();
            createGrid(size);
        }
    if (event.target.classList.contains("rainbow-mode")) { 
        isRainbowMode = !isRainbowMode;
    }
});
