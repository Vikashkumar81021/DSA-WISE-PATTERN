// Find the maximum number of odd numbers present in any contiguous subarray of size k.
let arr = [2, 1, 5, 1, 3, 2, 4];
let k = 3;

let max = 0;
let count = 0;
for (let i = 0; i < k; i++) {
  if (arr[i] % 2 !== 0) {
    count++;
  }
}
max = Math.max(max, count);
for (let high = k; high < arr.length; high++) {
  if (arr[high - k] % 2 !== 0) {
    count--;
  }
  if (arr[high] % 2 !== 0) {
    count++;
  }
  max = Math.max(max, count);
}
console.log(max);
