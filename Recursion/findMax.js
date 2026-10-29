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

function findMax(arr, i) {
  if (i === arr.length - 1) {
    return arr[i];
  }
  let max = findMax(arr, i + 1);
  if (arr[i] > max) {
    max = arr[i];
  }
  return max;
}
console.log(findMax([4, 7, 2, 9], 0));
