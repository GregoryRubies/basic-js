const { NotImplementedError } = require('../extensions/index.js');

function repeater(str, options) {

    if(! ('repeatTimes' in options)) options.repeatTimes = 1;
    if(! ('separator' in options)) options.separator = '+';
    if(! ('addition' in options)) options.addition = '';
    if(! ('additionRepeatTimes' in options)) options.additionRepeatTimes = 1;
    if(! ('additionSeparator' in options)) options.additionSeparator = '|';

  return new Array(options.repeatTimes)
    .fill(
      str + new Array(options.additionRepeatTimes)
        .fill(String(options.addition))
          .join(String(options.additionSeparator))
    ).join(String(options.separator));
}
module.exports = {
  repeater
};