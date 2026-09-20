function countUniqueSubArray(arr, k) {
  let left = 0;
  let max = 0;
  let set = new Set();
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    set.add(arr[i]);
    if (i - left + 1 > k) {
      set.delete(arr[left]);
      left++;
    }
    if (i - left + 1 === k) {
      // max = Math.max(max, set.size);
      res.push();
    }
  }
  return max;
}
