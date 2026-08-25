function twoSumDuplicate(arr, tar) {
  let left = 0,
    right = arr.length - 1;
  let res = -1;
  while (left < right) {
    if (arr[left] + arr[right] === tar) {
      res = [left, right];
      left++;
      right--;
      while (arr[left] === arr[left - 1]) {
        left++;
      }
      while (arr[right] === arr[right + 1]) {
        right--;
      }
    } else if (arr[left] + arr[right] < tar) {
      left++;
    } else {
      right--;
    }
  }
  return res;
}

let arr = [1, 1, 1, 1, 3, 3, 3, 3];
let tar = 4;
console.log(twoSumDuplicate(arr, tar));
