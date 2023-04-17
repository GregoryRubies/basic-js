const { NotImplementedError } = require('../extensions/index.js');

function renameFiles(names) {
  
  return names.reduce((newNames, currentName) => {
    
    let count = newNames
      .filter(newName => 
        new RegExp(`^${currentName.replaceAll(/([\(|\)])/g, '\\$1')}\(\\(\\d*\\)\)?$`).test(newName)
      ).length;
    
    newNames.push(count ? `${currentName}(${count})` : currentName);
    
    return newNames;
  }, [])
}

module.exports = {
  renameFiles
};