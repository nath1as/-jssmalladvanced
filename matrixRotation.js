function rotate90(matrix) {
  var columns = matrix.length;
  var rows = matrix[0].length;
  var newMatrix = [];
  var i;
  var j;

  for (i = 0; i < rows; i++) {
    newMatrix.push([]);
  }

  for (i = columns - 1; i >= 0; i--) {
    for (j = 0; j < matrix[i].length; j++) {
      newMatrix[j].push(matrix[i][j]);
    }
  }
  return (newMatrix);

}

var matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

var matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

var newMatrix1 = rotate90(matrix1);
var newMatrix2 = rotate90(matrix2);
var newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]

