// function previousGreaterElement(arr) {
//   let res = new Array(arr.length).fill(-1);
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i - 1; j >= 0; j--) {
//       if (arr[j] > arr[i]) {
//         res[i] = arr[j];
//         break;
//       }
//     }
//   }
//   return res;
// }

function previousGreaterElement(arr) {
  let stack = [];
  let res = new Array(arr.length).fill(-1);
  for (let i = 0; i < arr.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }
    if (stack.length > 0) {
      res[i] = stack[stack.length - 1];
    }
    stack.push(arr[i]);
  }
  return res;
}
let arr = [3, 1, 4, 2, 5];
console.log(previousGreaterElement(arr));
