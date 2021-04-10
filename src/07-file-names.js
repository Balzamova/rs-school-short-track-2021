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
  const name = {};

  return names.map((n) => {
    if (name[n]) {
      name[n]++;

      let newName = '';
      if (name[n]) {
        newName = `${n}(${name[n] - 1})`;
      } else {
        newName = `${n}(1)`;
      }

      if (name[newName]) {
        name[newName]++;
      } else {
        name[newName] = 1;
      }
      return newName;
    }
    name[n] = 1;
    return n;
  });
}

module.exports = renameFiles;
