// //brute force
// function nextElement(arr) {
//   let res = new Array(arr.length).fill(-1);
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] > arr[i]) {
//         res[i] = arr[j];
//         break;
//       }
//     }
//   }
//   return res;
// }
// let arr = [1, 3, 2, 4];
// console.log(nextElement(arr));

function nextGreater(arr) {
  let stack = [];
  let res = new Array(arr.length).fill(-1);
  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }
    if (stack.length > 0) {
      res[i] = stack[stack.length - 1];
    }
    stack.push(arr[i]);
  }
  return res;
}
let arr = [1, 3, 2, 4];
console.log(nextGreater(arr));
