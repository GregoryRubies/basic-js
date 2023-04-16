const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  if(
    typeof(sampleActivity) === 'string' 
    && /^\d+(\.{1}\d+)?$/m.test(sampleActivity) 
    && +sampleActivity > 0 
    && +sampleActivity <= 15
  ){
    return Math.ceil(-Math.log2(sampleActivity / MODERN_ACTIVITY) * HALF_LIFE_PERIOD);
  }
  return false;
}

module.exports = {
  dateSample
};