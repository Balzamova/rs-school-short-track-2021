/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = matrix.map((el, ind, arr) => {
    const array = [];
    for (let i = 0; i < el.length; i++) {
      let number = 0;
      if (arr[ind - 1] && arr[ind - 1][i - 1]) number++;
      if (arr[ind - 1] && arr[ind - 1][i]) number++;
      if (arr[ind - 1] && arr[ind - 1][i + 1]) number++;
      if (arr[ind][i - 1]) number++;
      if (arr[ind][i + 1]) number++;
      if (arr[ind + 1] && arr[ind + 1][i - 1]) number++;
      if (arr[ind + 1] && arr[ind + 1][i]) number++;
      if (arr[ind + 1] && arr[ind + 1][i + 1]) number++;
      array.push(number);
    }
    return array;
  });
  return result;
}

module.exports = minesweeper;
