const { NotImplementedError } = require('../extensions/index.js');

function getSumOfDigits(n) {
  return n < 10 ? n : getSumOfDigits(String(n).split('').reduce((sum, val) => Number(sum) + Number(val)));
}

module.exports = {
  getSumOfDigits
};
