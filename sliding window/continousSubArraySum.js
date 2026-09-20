function subArraySum(arr, k) {
  let left = 0;
  let sum = 0;
  let res = [];
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

let arr = [1, 2, 1, 3, 4];
let k = 3;
console.log(subArraySum(arr, k));
