function makeArrayBeautiful(arr) {
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      (stack.length > 0 && stack[stack.length - 1] >= 0 && arr[i] <= 0) ||
      (stack[stack.length - 1] <= 0 && arr[i] >= 0)
    ) {
      stack.pop();
    } else {
      stack.push(arr[i]);
    }
  }
  return stack;
}

let arr = [4, 2, -2, 1];
console.log(makeArrayBeautiful(arr));
