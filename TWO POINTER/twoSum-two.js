function sumTwo(arr, target) {
  arr.sort((a, b) => a - b);
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    if (arr[start] + arr[end] === target) {
      return [start, end];
    } else if (arr[start] + arr[end] < target) {
      start++;
    } else {
      end--;
    }
  }
  return false;
}
let arr = [7, 11, 2, 5];

console.log(sumTwo(arr, 13));
console.log(arr);
