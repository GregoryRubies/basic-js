const { NotImplementedError } = require('../extensions/index.js');

function getCommonCharacterCount(s1, s2) {

  let o1 = {}, o2 = {};

  for(let char of s1){ 
    if( char in o1 ){ 
      o1[char] += 1; 
    } else { 
      o1[char] = 1; 
    }
    o2[char] = 0;
  }

  for(let char of s2){ 
    if( char in o2 ){ 
      o2[char] += 1; 
    } else { 
      o2[char] = 1; 
    }
  }
  return Object.keys(o1).reduce((a, k) => a + Math.min(+o1[k], +o2[k]), 0);
}

module.exports = {
  getCommonCharacterCount
};