const grid = document.querySelector('.grid');

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
}

function shadeCell (event) {
    let cell = event.target;
    cell.classList.add('shaded');
}

setGrid(16,16);