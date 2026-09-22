function countGreater(arr, k) {
  let left = 0;
  let res = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 4) {
      count++;
    }
    if (i - left + 1 === k) {
      res.push(count);
    }
  }
}
