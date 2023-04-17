const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
    throw new Error ('\'arr\' parameter must be an instance of the Array!');
  }

  const resArr = [];
  let check = false;

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--double-next': i + 1 > arr.length - 1 ? "" : resArr.push(arr[i+1]);
      break;
      case '--discard-next': i++; check = true;
      break;
      case '--double-prev': arr[i-1] === undefined || check ? "" : resArr.push(arr[i-1]);
      break;
      case '--discard-prev': check ? '' : resArr.pop();
      break;
      default: resArr.push(arr[i]);
      check = false;
    }
  }
  return resArr;
}

module.exports = {
  transform
};
