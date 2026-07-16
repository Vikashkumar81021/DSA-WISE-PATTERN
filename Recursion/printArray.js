let arr = [10, 20, 30];

function printArr(arr, i = 0) {
  if (i > arr.length - 1) {
    return;
  }
  console.log(arr[i]);
  printArr(arr, i + 1);
}
printArr(arr);
