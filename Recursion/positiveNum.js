function CheckAllPositive(arr, i = 0) {
  if (i === arr.length) return true;

  if (arr[i] < 0) {
    return false;
  }
  return CheckAllPositive(arr, i + 1);
}
let arr = [2, 5, 8, 3, -10];
console.log(CheckAllPositive(arr));
