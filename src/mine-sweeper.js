const { NotImplementedError } = require('../extensions/index.js');

function minesweeper(matrix) {
  let result = [], sqr;
  for(let i in matrix){
    result[i] = [];
    sqr = matrix.slice(Math.max(+i - 1, 0), +i + 2);
    for(let j in matrix[i]){
      if(matrix[i][j]){result[i][j] = 1;}
      else {
        result[i][j] = 0;
        for(let v of sqr){
          result[i][j] += v.slice(Math.max(+j - 1, 0), +j + 2)
            .reduce((a, n) => a + n)
        }
      }
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
