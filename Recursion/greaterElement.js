function count(arr, tar, i = 0) {
  if (i === arr.length) {
    return 0;
  }
  if (arr[i] > tar) {
    return 1 + count(arr, tar, i + 1);
  }
  return count(arr, tar, i + 1);
}
let arr = [4, 8, 2, 10, 6];
let target = 5;
console.log(count(arr, target));
