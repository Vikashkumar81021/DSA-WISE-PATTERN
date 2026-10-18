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
let arr = [10, 4, 2, 20, 40, 12, 30];
console.log(previousGreaterElement(arr));
