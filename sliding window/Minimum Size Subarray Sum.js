function minSubArr(arr, tar) {
  let low = 0,
    high = 0,
    min = Infinity,
    sum = 0;
  while (high < arr.length) {
    sum += arr[high];
    while (sum >= tar) {
      let len = high - low + 1;
      min = Math.min(high - low + 1);
      sum -= arr[low];
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

let arr = [1, 4, 2, 10, 23, 3, 1, 0, 20];
let k = 4;

let minWindowSum = 0;
for (let i = 0; i < k; i++) {
  minWindowSum += arr[i];
}

let minSum = minWindowSum;
for (let i = k; i < arr.length; i++) {
  minWindowSum = minWindowSum - arr[i - k] + arr[i];
  minSum = Math.min(minSum, minWindowSum);
}
console.log("min", minSum);
