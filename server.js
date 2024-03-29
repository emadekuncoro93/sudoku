'use strict';
require('./sudoku');
const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App

let board =  [
  [5,3,2,9,8,6,7,4,1],
  [4,8,7,2,1,5,3,6,9],
  [6,9,1,4,3,7,5,8,2],
  [3,2,5,1,7,4,8,9,6],
  [7,6,4,3,9,8,1,2,5],
  [8,1,9,5,6,2,4,3,7],
  [1,5,6,8,2,3,9,7,4],
  [9,7,8,6,4,1,2,5,3],
  [2,4,3,7,5,9,6,1,8]
];

let msg;
let result = organize(board);
if(validate(result['_rows']) && validate(result['_cols']) && validate(result['_grid'])){
  msg = 'correct';
}else{
  msg = 'incorrect';
}

const app = express();
app.get('/', (req, res) => {
  res.send(msg);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);