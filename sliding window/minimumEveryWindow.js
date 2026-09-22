function minEveryWindow(arr, k) {
  let left = 0;
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (i - left + 1 === k) {
      let min = Infinity;

      for (let j = left; j <= i; j++) {
        min = Math.min(min, arr[j]);
      }

      res.push(min);
      left++;
    }
  }

  return res;
}

let arr = [4, 2, 7, 1, 8, 3];
let k = 3;

console.log(minEveryWindow(arr, k));
