function countEvenEveryWindow(arr, k) {
  let left = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
    if (i - left + 1 === k) {
      res.push(count);
      if (arr[i] % 2 === 0) {
        count--;
      }
      left++;
    }
  }
}
let arr = [1, 2, 4, 6, 3, 8, 5];
k = 3;
