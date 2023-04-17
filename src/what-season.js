const { NotImplementedError } = require('../extensions/index.js');

function getSeason(date) {
  if(!!date && date.__proto__.constructor.name == 'Date' && (new Date().toString) == date.toString){
    return ['winter', 'spring', 'summer', 'autumn'][Math.floor((1 + date.getMonth()) / 3) % 4 ];
  } else if(date === undefined) {
    return 'Unable to determine the time of year!';
  } else {
    throw Error("Invalid date!")
  }
}

module.exports = {
  getSeason
};
