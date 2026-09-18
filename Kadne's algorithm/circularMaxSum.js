function maxSubarraySumCircular(arr) {
  let maxSum = arr[0];
  let minSum = arr[0];
  let currMaxSum = arr[0];
  let currMinSum = arr[0];
  let totalSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currMaxSum = Math.max(currMaxSum + arr[i], arr[i]);
    maxSum = Math.max(currMaxSum, maxSum);

    currMinSum = Math.min(currMaxSum + arr[i], arr[i]);
    minSum = Math.min(currMinSum, minSum);
    totalSum += arr[i];
  }
  let circularSum = totalSum - minSum;
  if (circularSum === 0) {
    return maxSum;
  }
  return Math.max(circularSum, maxSum);
}
