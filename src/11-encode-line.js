/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let count = 1;
  const array = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count++;
    } else {
      if (count === 1) {
        array.push(arr[i]);
      } else {
        array.push(count + arr[i - 1]);
      }
      count = 1;
    }
  }

  return array.join('');
}

module.exports = encodeLine;
