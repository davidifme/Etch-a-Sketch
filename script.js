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
            if (userRowNumberInput >= 1 || userColumnNumberInput >= 1) {
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
        div.addEventListener("mousemove", () => {
            div.style.backgroundColor = "white";
        });
        divContainer.appendChild(div);
    }

    let maxWidth = (columnNumber * 25) + 20;
    divContainer.style.maxWidth = `${maxWidth}px`;
});