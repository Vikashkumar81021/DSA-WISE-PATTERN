function everyWindowSum(arr, k) {
  let left = 0;
  let res = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i - left + 1 === k) {
      res.push(sum);
      sum -= arr[left];
      left++;
    }
  }
  return res;
}
let arr = [2, 4, 1, 7, 3, 6];
let k = 3;
console.log(everyWindowSum(arr, k));
