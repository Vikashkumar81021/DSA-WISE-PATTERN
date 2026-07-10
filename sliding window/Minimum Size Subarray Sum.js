function minSubArr(arr, tar) {
  let low = 0,
    high = 0,
    min = Infinity,
    sum = 0;
  while (high < arr.length) {
    sum = sum + arr[high];
    while (sum >= tar) {
      let len = high - low + 1;
      min = Math.min(min, len);
      sum = sum - arr[low];
      low++;
    }
    high++;
  }
  if (min === Infinity) {
    return 0;
  } else {
    return min;
  }
}

let target = 7,
  nums = [2, 3, 1, 2, 4, 3];
console.log(minSubArr(nums, target));
