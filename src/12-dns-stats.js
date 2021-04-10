/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};

  for (let i = 0; i < domains.length; i++) {
    const elArray = domains[i].split('.').reverse();
    let key = '';
    const keys = [];

    for (let j = 0; j < elArray.length; j++) {
      key += `.${elArray[j]}`;
      keys.push(key);
    }

    for (let j = 0; j < keys.length; j++) {
      const domain = keys[j];
      if (result[domain]) {
        result[domain]++;
      } else {
        result[domain] = 1;
      }
    }
  }
  return result;
}

module.exports = getDNSStats;
