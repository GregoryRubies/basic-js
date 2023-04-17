const { NotImplementedError } = require('../extensions/index.js');

function getEmailDomain(email) {
  return email.match(/[^@]*\.[a-z]*$/i)[0];
}

module.exports = {
  getEmailDomain
};
