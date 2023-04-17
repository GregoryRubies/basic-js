const { NotImplementedError } = require('../extensions/index.js');

function isMAC48Address(n) {
  return /^((\d|[A-F]){2}-){5}(\d|[A-F]){2}$/.test(n);
}
module.exports = {
  isMAC48Address
};
