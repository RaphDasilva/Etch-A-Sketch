const buttons = document.querySelectorAll('button');
const sketchPad = document.querySelector('.sketch-pad');
const grideSize =  document.querySelector('.range-slider');
let squareSize = 50;

function createGrid(amountOfGrid){
    for(let i = 0; i < amountOfGrid; i++){
        const row = document.createElement('div');
        row.classList.add('grid-row');


        for(let j = 0; j < amountOfGrid; j++){
        const widthAndHeight = 500 / squareSize;
          const gridBox = document.createElement('div');
          gridBox.classList.add('grid-box');
          gridBox.style.width = `${widthAndHeight}px`;
          gridBox.style.height = `${widthAndHeight}px`;
          row.appendChild(gridBox);
        }

        sketchPad.appendChild(row);
    }
}

createGrid(squareSize);


const selectAllDiv = document.querySelectorAll('.grid-box');
selectAllDiv.forEach(div => {
    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = "black";
    })
})


function eraser(e){
    e.style.backgroundColor = "white";
}

const remove = document.querySelector('.remove');
remove.addEventListener('mouseenter', eraser(e));
