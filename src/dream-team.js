const { NotImplementedError } = require('../extensions/index.js');

function createDreamTeam(members) {
  return Array.isArray(members) ? 
    members.filter(val => typeof(val) == 'string' && /^\s*[a-z]{1}/i.test(val))
      .map(str => str.trim()[0].toUpperCase())
        .sort((a, b) => a > b ? 1 : -1)
          .join('') :
    false;
}

module.exports = {
  createDreamTeam
};
