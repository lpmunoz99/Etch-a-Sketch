const container = document.querySelector("#container");
const container2 = document.querySelector("#buttons-container");
container2.setAttribute("style", "text-align: center;");
const btn1 = document.createElement("button");
btn1.classList.add("btn1");
btn1.textContent = "Change grid";
container2.appendChild(btn1);
const btn2 = document.createElement("button");
btn2.classList.add("btn2");
btn2.textContent = "Change color";
container2.appendChild(btn2);
const btn3 = document.createElement("button");
btn3.classList.add("btn3");
btn3.textContent = "Reset";
container2.appendChild(btn3);




function createGrid (nSquares = 16){
    container.textContent = "";
    for(i = 0; i < nSquares; i++){
        const rowDivs = document.createElement("div");
        container.appendChild(rowDivs).classList.add("row");
        for(j = 0; j < nSquares; j++){
            const columnDivs = document.createElement("div");
            let size = 600 / nSquares;
            columnDivs.setAttribute(`style`, `height: ${size}px; width: ${size}px;`);
            rowDivs.appendChild(columnDivs).classList.add("column");
    
        }   
    }
}

createGrid();


btn1.addEventListener("click", () => {
    let userInput = prompt("Enter the amount of squares from 1 to 100: ");
    if(userInput <= 100){
        createGrid(userInput);
    } else {
        alert("Enter a valid number");
    }
    
});

const blocks = document.querySelectorAll(".column");
blocks.forEach((block) => {
    block.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "black";
    });
});