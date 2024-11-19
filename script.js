const divContainer = document.querySelector("#div-container");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {

    const gridToRemove = document.querySelectorAll("#div-container div");
    gridToRemove.forEach((grid) => {
        grid.remove();
    });

    let maxGridSize = 50;
    let rowNumber = 0;
    let columnNumber = 0;

    let isRunning = true;

    while(isRunning) {
        let userRowNumberInput = prompt("Number of rows:");
        let userColumnNumberInput = prompt("Number of columns:");

        if (userRowNumberInput <= maxGridSize && userColumnNumberInput <= maxGridSize) {
            if (userRowNumberInput > 0 && userColumnNumberInput > 0) {
                rowNumber = userRowNumberInput;
                columnNumber = userColumnNumberInput;
                break;
            } else {
                alert('ERROR! Enter a number greater than 0.')
                continue;
            }
        } else {
            alert('ERROR! The maximum grid size is 50.')
            continue;
        }
    }

    let rowsAndColumnsNumber = rowNumber * columnNumber;

    for (let index = 0; index < rowsAndColumnsNumber; index++) {
        const div = document.createElement("div");
        
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = `${getRandomRGB()}`;
        });
        divContainer.appendChild(div);
    }

    let maxWidth = (columnNumber * 25) + 20;
    divContainer.style.maxWidth = `${maxWidth}px`;
});

function getRandomRGB() {
    const r = Math.floor(Math.random() * 256); // Red value (0-255)
    const g = Math.floor(Math.random() * 256); // Green value (0-255)
    const b = Math.floor(Math.random() * 256); // Blue value (0-255)
    return `rgb(${r}, ${g}, ${b})`; // Format as an RGB string
  }