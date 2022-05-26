// const defaultsize = 16;
const grid = document.getElementById("container");
const colorBtn = document.getElementById("color");
const rainbowBtn = document.getElementById("rainbow");
const eraserBtn = document.getElementById("eraser");
const clearBtn = document.getElementById("clear");
const sliderBtn = document.getElementsByClassName("slider");

function createGrid(col, rows){
  for(let i =0; i < (col *rows); i++){
  const div = document.createElement('div');
  div.style.border = '1px solid red';
  grid.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${col}, 1fr)`;
  grid.appendChild(div).classList.add('box');
  }
}
createGrid(16,16);

function colorMode() {
  const boxs = grid.querySelectorAll('.box');
  colorBtn.textContent = 'Gray Mode';
  colorBtn.addEventListener('click', () => {
    boxs.forEach(box => box.addEventListener('mouseover', () => {
      let randomNum = Math.floor(Math.random() * 256);
      box.style.background = `rgb(${randomNum}, ${randomNum}, ${randomNum})`
    }))
  })

}
colorMode();

function rainbowMode() {
  const boxs = grid.querySelectorAll('.box');
  rainbowBtn.textContent = 'Rainbow Mode';
  rainbowBtn.addEventListener('click', () => {
    boxs.forEach(box => box.addEventListener('mouseover', () => {
      let randomNumR = Math.floor(Math.random() * 256);
      let randomNumG = Math.floor(Math.random() * 256);
      let randomNumB = Math.floor(Math.random() * 256);
      box.style.background = `rgb(${randomNumR}, ${randomNumG}, ${randomNumB})`
    }))
  })

}
rainbowMode()

function eraserGrid() {
  const boxs = grid.querySelectorAll('.box');
  eraserBtn.addEventListener('click', () => {
    boxs.forEach(box => box.addEventListener('mouseover', () => {
      box.style.background = '#fefefe';
  }))
})
}
eraserGrid();

function clearGrid() {
  const boxs = grid.querySelectorAll('.box');
  clearBtn.addEventListener('click',() =>{
  boxs.forEach(box => box.remove());
 } )
}
clearGrid()
