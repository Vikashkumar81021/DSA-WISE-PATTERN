function smallestSubSum(arr, k) {
  let sum = 0;
  let left = 0,
    res = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    while (sum >= k) {
      res = Math.min(res, i - left + 1);
      sum -= arr[left];
      left++;
    }
  }
  return res === Number.MAX_SAFE_INTEGER ? 0 : res;
}
