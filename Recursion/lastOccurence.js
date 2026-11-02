// function lastOccurence(arr, tar, i = 0, last = -1) {
//   if (i === arr.length) return last;

//   if (arr[i] === tar) {
//     last = i;
//   }

//   return lastOccurence(arr, tar, i + 1, last);
// }
function lastOccurence(arr, tar, i = arr.length - 1) {
  if (i < 0) return -1;

  if (arr[i] === tar) {
    return i;
  }
  return lastOccurence(arr, tar, i - 1);
}
let arr = [4, 7, 9, 7, 2];
let target = 7;
console.log(lastOccurence(arr, target));
