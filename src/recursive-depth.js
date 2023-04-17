const { NotImplementedError } = require('../extensions/index.js');

class DepthCalculator {
  calculateDepth(arr) {
    return Math.max(...arr.map(element => Array.isArray(element) ? element.length ? 1 + this.calculateDepth(element) : 2 : 1));
  }
}

module.exports = {
  DepthCalculator
};
