const divContainer = document.querySelector("#div-container");

for (let index = 0; index < 256; index++) {
    const div = document.createElement("div");
    div.addEventListener("mousemove", () => {
        div.style.backgroundColor = "white";
    });
    divContainer.appendChild(div);
}