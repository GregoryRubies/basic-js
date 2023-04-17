const { NotImplementedError } = require('../extensions/index.js');

function transform(arr) {
  if(Array.isArray(arr)){
    let 
      newArr = new Array(...arr),
      i = 0,
      l = newArr.length;
    while(i < l){
      switch(newArr[i]){
        case '--discard-prev': 
          if(i > 0){ 
            newArr.splice(i - 1, 1);
          } else {
            newArr.shift();
          } break;
        case '--double-prev': 
          if(i > 0){ 
            newArr[i] = newArr[i-1];
            ++i;
          } else {
            newArr.shift();
          } break;
        case '--discard-next': 
          if(i < l - 1){
            newArr.splice(++i, 1);
          } else {
            newArr.pop();
          } break;
        case '--double-next': 
          if(i < l - 1){
            newArr[i] = newArr[i + 1];
          } else {
            newArr.pop();
          } break;
        default: ++i;
      }
      l = newArr.length;
    }
    return newArr.filter(v => v != '--discard-prev' && v != '--double-prev' && v != '--discard-next' && v != '--double-next');
  } else {
    throw Error("\'arr\' parameter must be an instance of the Array!");
  }
}

module.exports = {
  transform
};
