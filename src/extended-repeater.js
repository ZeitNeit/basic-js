const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'} = options
  let arrMain = [];

  for (let i = 0; i < repeatTimes; i++) {
    let res = '';
    res += str;

  let arrAdd = [];
  for (let j = 0; j < additionRepeatTimes; j++) {
    arrAdd.push(String(addition));
  }
  res += arrAdd.join(additionSeparator);
  arrMain.push(res);
  }

  return arrMain.join(separator)
}

module.exports = {
  repeater
};
