function rangeSum(nums, queries) {
  let res = [];
  for (let query of queries) {
    let L = query[0];
    let R = query[1];
    let sum = 0;
    for (let i = L; i <= R; i++) {
      sum += arr[i];
    }
    res.push(sum);
  }
  return res;
}
let arr = [1, 2, 3, 4];
let q = [
  [0, 1],
  [0, 1],
];
console.log(rangeSum(arr, q));
