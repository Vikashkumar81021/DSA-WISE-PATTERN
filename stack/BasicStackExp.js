let arr = [70, 60, 100, 50, 90, 80];
let stack = []; //1.70,2.60,3.100
for (let i = 0; i < arr.length; i++) {
  while (stack.length > 0 && arr[i] > stack[stack.length - 1]) {
    stack.pop();
  }
  stack.push(arr[i]);
}
console.log("Stack", stack);
