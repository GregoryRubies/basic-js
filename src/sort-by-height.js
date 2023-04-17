const { NotImplementedError } = require('../extensions/index.js');

function sortByHeight(arr) {
  return arr.map(function(n){return n == -1 ? n : this.pop();}, arr.filter(v => v != -1).sort((a, b) => b - a))
}

module.exports = {
  sortByHeight
};
