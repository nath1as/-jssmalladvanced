function merge(array1, array2) {
  var i;
  var j;
  var merged = [];

  if (array1.length === 0) {
    return merged = array2;
  } else if (array2.length === 0) {
    return merged = array1;
  }

  for (i = 0; i < array1.length; i++) {
    for (j = 0; j <= array2.length; j++) {
      if (array1[i] >= array2[j]) {
        merged.push(array2[j]);
      } else {
        merged.push(array1[i]);
        break;
      }
    }
  }
  return (merged);
}

// alternative:
// function merge(array1, array2) {
//   var copy1 = array1.slice();
//   var copy2 = array2.slice();
//   var result = [];

//   while (copy1.length > 0 && copy2.length > 0) {
//     result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
//   }

//   return result.concat(copy1.length === 0 ? copy2 : copy1);
// }

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]

//must sort while merging or before
//
