function smallerSum(arr) {
  let res = [];
  let minSum = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    let start = i + 1,
      end = arr.length - 1;
    let sum = 0;
    while (start < end) {
      let sum = arr[i] + arr[start] + arr[end];
      if (sum < minSum) {
        minSum = sum;
      }
      start++;
      end--;
    }
  }
}
