function findMaxAverage(arr, k) {
  let left = 0,
    maxAvg = -Infinity,
    sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i - left + 1 === k) {
      let avg = sum / k;
      maxAvg = Math.max(avg, maxAvg);
      sum -= arr[left];
      left++;
    }
  }
  return maxAvg;
}
