/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  let min = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < arr[i + 1]) {
      min = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (+arr[i] === +min) {
      arr.splice(i, 1);
    }
  }

  const res = arr.join('');
  return +res;
}

module.exports = deleteDigit;
