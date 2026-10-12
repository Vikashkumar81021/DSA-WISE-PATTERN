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

function rangeSum(arr, left, right) {
  const prefix = [0];

  for (let i = 0; i < arr.length; i++) {
    prefix.push(prefix[i] + arr[i]);
  }

  return prefix[right + 1] - prefix[left];
}
const array = [2, 4, 6, 8, 10];
// prefix = [0, 2, 6, 12, 20, 30]
// index     0  1  2   3   4   5

console.log(rangeSum(array, 1, 3));
//formula of range find
// prefix[right + 1] - prefix[left]
// prefix[3 + 1] - prefix[1]

// = prefix[4] - prefix[1]

// = 20 - 2

// = 18
