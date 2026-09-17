function maxAbsoluteSum(arr) {
  let minEnding = arr[0];
  let maxEnding = arr[0];

  let maxSum = arr[0];
  let minSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxEnding = Math.max(arr[i], maxEnding + arr[i]);
    minEnding = Math.min(arr[i], minEnding + arr[i]);

    maxSum = Math.max(maxEnding, maxSum);
    minSum = Math.min(minEnding, minSum);
  }
  return Math.max(Math.abs(maxSum), Math.abs(minSum));
}

let arr = [1, -3, 2, 3, -4];
console.log(maxAbsoluteSum(arr));
