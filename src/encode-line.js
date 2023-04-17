const { NotImplementedError } = require('../extensions/index.js');

function encodeLine(str) {
  let result = '', i = 0;
  while(i < str.length){
    let count = 1;
    while(str[i+count] == str[i]){
      count++;
    }
    result += count == 1 ? str[i] : `${count}${str[i]}`;
    i = i+count;
  }
  return result;
}

module.exports = {
  encodeLine
};