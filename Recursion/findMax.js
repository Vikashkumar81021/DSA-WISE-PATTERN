// function maxVal(arr, i = 0, max = arr[0]) {
//   if (i >= arr.length) {
//     return max;
//   }

//   if (arr[i] > max) {
//     max = arr[i];
//   }
//   return maxVal(arr, i + 1, max);
// }

// let arr = [1, 2, 5, 9];
// console.log(maxVal(arr));
function maxVal(arr, i = 0, max = -Infinity) {
  if (i >= arr.length) {
    return max;
  }

  return maxVal(arr, i + 1, Math.max(max, arr[i]));
}

let arr = [1, 2, 5, 9];
console.log(maxVal(arr));
