/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;

  const first = [...s1];
  const second = [...s2];

  while (first.length) {
    const currItem = first.pop();
    if (second.includes(currItem)) {
      count++;
      second.splice(second.indexOf(currItem), 1);
    }
  }

  return count;
}

module.exports = getCommonCharacterCount;
