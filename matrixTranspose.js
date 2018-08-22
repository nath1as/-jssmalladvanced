function transpose(matrix) {
  var newMatrix = [[], [], []];
  var i;
  for (i = 0; i < 3; i++) {
    matrix.forEach(function (row) {
      newMatrix[i].push(row[i]);
    });
  }
  return newMatrix;
}
var matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

var newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

