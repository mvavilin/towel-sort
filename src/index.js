module.exports = function towelSort(matrix = []) {
  return matrix.length
    ? matrix
        .map((element, index) =>
          index % 2 ? element.sort((a, b) => b - a) : element
        )
        .flat()
    : [];
};
