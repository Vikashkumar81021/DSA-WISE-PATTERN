function printNum(arr, index = 0) {
  if (index >= arr.length) {
    return;
  }
  console.log(arr[index]);

  printNum(arr, index + 1);
}
let arr = [1, 2, 3];
printNum(arr);
