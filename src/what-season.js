const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  try {
    if(arguments.length === 0) {
      return "Unable to determine the time of year!";
    }
    if(!(date instanceof Date && !isNaN(date))){
      throw new Error("Invalid date!");
    }
    const MONTH = date.getMonth()
    if (MONTH == 11 || MONTH < 2) return 'winter';
    if (MONTH < 5) return 'spring';
    if (MONTH < 8) return 'summer';
    if (MONTH < 11) return 'autumn';
  } catch (error_error) {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason
};
