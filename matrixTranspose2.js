function transpose(matrix) {
  var columns = matrix.length;
  var rows = matrix[0].length;
  var newMatrix = [];
  var i;
  var j;

  for (i = 0; i < rows; i++) {
    newMatrix.push([]);
  }
  
  for (i = 0; i < columns; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      newMatrix[j].push(matrix[i][j]);
    }
  }
  console.log(newMatrix);
}
var matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

var newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
transpose([[1]]);                     // [[1]]

transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

