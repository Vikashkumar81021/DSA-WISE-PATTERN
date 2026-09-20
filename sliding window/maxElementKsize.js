function maxElementSize(arr, k) {
  let left = 0;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (i - left + 1 === k) {
      let max = Infinity;
      for (let j = left; j <= i; j++) {
        max = Math.max(max, arr[j]);
      }
      res.push(max);
      left++;
    }
  }
  return res;
}

let arr = [2, 5, 1, 8, 2, 9, 1];
let k = 3;
console.log(maxElementSize(arr, k));
