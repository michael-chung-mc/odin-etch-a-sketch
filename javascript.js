const button = document.querySelector('button');
const grid = document.querySelector('.grid');

var cellHeight = 8;
var cellWidth = 8;
// 0 = bw && 1 = color && 2 = opacity
var cellShadeOption = 0;

function synchGridRowDimensions () {
    const grid = document.getElementsByClassName('grid')[0];
    const rows = document.getElementsByClassName('row');
    const rowWidth = grid.offsetWidth;
    console.log(`${rowWidth} width`);
    cellHeight = rowWidth/rows.length;
    cellWidth = rowWidth/rows.length;
    console.log(`${cellHeight} height`);
}

function setGrid (rows, columns) {
    for (let i = 0; i < rows; i++)
    {
        var row = document.createElement("div")
        row.classList.add('row');
        grid.append(row);
        for (let j = 0; j < columns; j++)
        {
            let box = document.createElement("div");
            box.classList.add('square');
            box.addEventListener('mouseover', (event) => {shadeCell(event)});
            row.append(box);
        }
    }
    resizeGrid();
}

function shadeCell (event) {
    let cell = event.target;
    const currentColor = cell.style.backgroundColor;
    if (cellShadeOption == 0) {
        if (currentColor != "black")
        {
            cell.style.backgroundColor = "black";
        }
    }
    else if (cellShadeOption == 1) {
        const randomRed = Math.floor(Math.random() * (256));
        const randomBlue = Math.floor(Math.random() * (256));
        const randomGreen = Math.floor(Math.random() * (256));
        cell.style.backgroundColor = `rgb(${randomRed},${randomBlue},${randomGreen})`;
    }
    else if (cellShadeOption == 2) {
        cell.style.backgroundColor = {};
    }
    else {
        console.log("ShadeCell: Unsupported cell shade option")
    }
}

function clearGrid () {
    while(grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

function resizeGrid () {
    synchGridRowDimensions();
    let rows = grid.children;
    for (let i = 0; i < rows.length; i++)
    {
        let row = rows[i];
        row.style.height = `${cellHeight}px`;
        console.log(`${row.style.height}`);
        let cells = row.children;
        for (let j = 0; j < cells.length; j++)
        {
            cells[j].style.width = `${cellWidth}px`;
        }
    }
}

//default grid
setGrid(16,16);
//dynamically adjust grid size
window.addEventListener('resize', function(event) { 
    resizeGrid();
});
//let button resize and clear grid
const resizeButton = document.getElementById('resizeButton');
resizeButton.addEventListener('click', function(event) {
    let cellCount = prompt('Number of squares for new grid?')
    if (cellCount < 101)
    {
        clearGrid();
        setGrid(cellCount, cellCount);
    }
});
//color button options
const bwButton = document.getElementById('buttonBW');
bwButton.addEventListener('click',function(event){
    cellShadeOption = 0;
});
const rgbButton = document.getElementById('buttonRandomColor');
rgbButton.addEventListener('click',function(event){
    cellShadeOption = 1;
});
const opacityButton = document.getElementById('buttonOpacity');
opacityButton.addEventListener('click',function(event){
    cellShadeOption = 2;
});