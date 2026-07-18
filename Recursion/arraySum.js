let arr = [1, 2, 3, 4];
let sum = 0;
function arrSum(arr, i = 0) {
  if (i > arr.length - 1) {
    return;
  }

  sum += arr[i];

  arrSum(arr, i + 1);
  return sum;
}

console.log(arrSum(arr));
