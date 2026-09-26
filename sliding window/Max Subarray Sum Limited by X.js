function maxSum(arr, x) {
  let left = 0;
  let sum = 0;
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    //       sum > x → remove karte raho
    // sum <= x → ruk jao
    while (sum > x) {
      sum -= arr[left];
      left++;
    }
    maxSum = Math.max(sum, maxSum);
  }
  return maxSum;
}
// 1 → 3 → 6 → 10 → 15
//                  ↓
//               > 11
//                  ↓
//        left se 1, 2, 3 hatao
//                  ↓
//                  9
