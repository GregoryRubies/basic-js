const { NotImplementedError } = require('../extensions/index.js');

function getMatrixElementsSum(matrix) {
  let prevElement;
  return matrix.reduce(
    (result, v, i, arr) => result + ( 
      prevElement = i 
        ? arr[i].map( function(v, i){return this[i] ? v : 0 }, prevElement)
        : v 
    ).reduce((a, e) => a + e)
  , 0)
}

module.exports = {
  getMatrixElementsSum
};