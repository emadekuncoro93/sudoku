/*
organize => this function basically, re-structure the sudoku board into 3 array
1. rows array = the original board = list of rows of the board
2. cols array = list of cols of the board
3. grid array = list of 3x3 grid of row sand cols of the sudoku
*/
organize = (data) => {

    let _rows, _cols, _grid;
    let result = [];

    _rows = data;
    _cols = [];
    _grid = [];

    // Prefilling the structures with empty array objects
    for (let i = 0; i < 9; i++) {
        _cols.push([]);
        _grid.push([]);
    }
    
    for (let row = 0; row < 9; row++) {

        for (let col = 0; col < 9; col++) {

            // Save each column in a new row
            _cols[col][row] = data[row][col];

            // Calculate grid identifiers
            gridRow = Math.floor( row / 3 );
            gridCol = Math.floor( col / 3 );
            gridIndex = gridRow * 3 + gridCol;

            // Save each grid in a new row
            _grid[gridIndex].push(data[row][col]);
            
        }
    }

    result['_rows'] = _rows;
    result['_cols'] = _cols;
    result['_grid'] = _grid;
    return result;
}


//validate => this function check wether a list of data sent to this function has unique numbers

validate = (data) =>{
    for (let row = 0; row < 9; row++) {

        data[row].sort();
        
        for (let col = 0; col < 9; col++) {

            let value = data[row][col], next_value = data[row][col + 1];

            // check if value exists and is a valid number
            if (!(value && value > 0 && value < 10)){
                return false;
            }

            // check if numbers are unique
            if (col !== 8 && value === next_value){
                return false;
            }

        }
    }
    return true;
}

module.exports = {
  organize,
  validate
}
