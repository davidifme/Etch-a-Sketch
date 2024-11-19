const divContainer = document.querySelector("#div-container");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {

    const gridToRemove = document.querySelectorAll("#div-container div");
    gridToRemove.forEach((grid) => {
        grid.remove();
    });

    let maxGridSize = 25;
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
            alert(`ERROR! The maximum grid size is ${maxGridSize}.`)
            continue;
        }
    }

    let rowsAndColumnsNumber = rowNumber * columnNumber;

    let gridOpacity = 1;

    for (let index = 0; index < rowsAndColumnsNumber; index++) {
        const div = document.createElement("div");

        div.addEventListener("mouseenter", () => {
            if (gridOpacity <= 1 && gridOpacity > 0) {
                gridOpacity -= 0.1;
                div.style.backgroundColor = `${getRandomRGB(gridOpacity)}`;
            } else {
                div.style.backgroundColor = "black";
            }
        });
        divContainer.appendChild(div);
    }

    divContainer.style.width = `${columnNumber * 25 + (columnNumber - 1)}px`;
    divContainer.style.height = `${rowNumber * 25 + (rowNumber - 1)}px`;
});

function getRandomRGB(opacity) {
    const r = Math.floor(Math.random() * 256); // Red value (0-255)
    const g = Math.floor(Math.random() * 256); // Green value (0-255)
    const b = Math.floor(Math.random() * 256); // Blue value (0-255)
    return `rgba(${r}, ${g}, ${b}, ${opacity})`; // Format as an RGBA string
  }