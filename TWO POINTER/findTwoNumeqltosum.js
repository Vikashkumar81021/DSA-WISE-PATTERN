function twoSumTwo(arr, tar) {
  let i = 0,
    j = arr.length - 1;
  let count = 0;
  while (i < j) {
    if (arr[i] + arr[j] === tar) {
      count++;
      i++;
      j--;
    } else if (arr[i] + arr[j] < tar) {
      i++;
    } else {
      j--;
    }
  }
  return count;
}
let arr = [2, 3, 4, 5, 8, 9];
let target = 12;
console.log(twoSumTwo(arr, target));
