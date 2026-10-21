function getMin(stack) {
  let min = Infinity;
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] < min) {
      min = stack[i];
    }
  }
  return min;
}
let stack = [1, 2, 3, 4];
console.log(getMin(stack));
