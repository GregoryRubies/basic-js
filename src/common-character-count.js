const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

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