const button = document.querySelector('button');
const grid = document.querySelector('.grid');

var cellHeight = 8;
var cellWidth = 8;

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
    cell.classList.add('shaded');
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

setGrid(16,16);