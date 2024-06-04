const container = document.querySelector(".container");
const rowContainer = document.querySelector(".row-container");
const createGrid = (size) =>
    {
        for (i = 0; i < size; i++)
        {
                const row = document.createElement("div");
                row.classList.add("row");
                rowContainer.appendChild(row);
                console.log("1");
                for (j = 0; j < size; j++) {
                    const square = document.createElement("div");
                    square.classList.add("grid-square");
                    row.appendChild(square);
                    console.log("2");
                }    
        }
    };
createGrid(16);