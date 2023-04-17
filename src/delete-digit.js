const { NotImplementedError } = require('../extensions/index.js');

function deleteDigit(n) {
  let str = `${n}`, arr = [];
  for(let i in str){
    arr.push(str.replace(new RegExp(`(\\d{${i}})(\\d{1})`), "$1"));
  }
  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};
