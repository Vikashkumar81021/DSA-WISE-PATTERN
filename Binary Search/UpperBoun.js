//ceil

function Ciel(arr, x) {
  let low = 0,
    high = arr.length - 1,
    res = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= x) {
      res = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return res;
}
let a = [1, 1, 2, 8, 10, 11, 12, 19],
  x = 0;
console.log(Ciel(a, x));
