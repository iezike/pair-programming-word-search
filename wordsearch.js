const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(horizontalArr => horizontalArr.join(''));
  const verticalJoin = transpose(letters).map(x => x.join(''));
  for (let lh of horizontalJoin) {
    if (lh.includes(word)) return true;
  }
  for (let lv of verticalJoin) {
    if (lv.includes(word)) return true;
  }
  return false;
};
const transpose = function(matrix) {
  let arr = [];
  for (let i = 0; i < matrix[0].length; i++) {
    arr.push([]);
    for (let j = 0; j < matrix.length; j++) {
      arr[i][j] = matrix[j][i];
    }
  }
  return arr;
};


module.exports = wordSearch;