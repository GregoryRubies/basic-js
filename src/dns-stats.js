const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  domains.flatMap(v => 
    v.split('.')
      .reduceRight((acc, v, i, a)=> {
        acc.push(acc.slice(acc.length - 1) + '.' + v); 
        return acc;
      }, 
      [])
  ).forEach(
    function(v){
        this[v] = v in this ? this[v] + 1 : 1;
    }, 
    result
  )
  return result;
}

module.exports = {
  getDNSStats
};
