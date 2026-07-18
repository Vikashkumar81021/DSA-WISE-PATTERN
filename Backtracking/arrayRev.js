function revArr(arr, i = 0) {
  if (i >= arr.length) {
    return;
  }
  revArr(arr, i + 1);
  console.log(arr[i]);
}
let arr = [1, 2, 3];
revArr(arr);
