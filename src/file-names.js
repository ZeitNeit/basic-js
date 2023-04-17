const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let res = [];
  for (let name of names) {
    let num = res.indexOf(name);
    if (num !== -1) {
      res.push(`${name}(${res.filter(el => el.startsWith(name) && el.length - 3 <= name.length).length})`);
    } else res.push(name);
  }
  return res;
}

module.exports = {
  renameFiles
};
