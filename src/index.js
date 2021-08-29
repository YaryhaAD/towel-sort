
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix) {
      matrix.forEach((element, x) => {
          x % 2 !== 0 ? element.sort((a, b) => b - a) : element;
      })
  } else {
      return [];
  }
  return matrix.flat();
}
