const { NotImplementedError } = require('../extensions/index.js');

function countCats(matrix) {
  return matrix.reduce((acc, arr) => acc + arr.filter(v => v === '^^').length , 0);
}

module.exports = {
  countCats
};
