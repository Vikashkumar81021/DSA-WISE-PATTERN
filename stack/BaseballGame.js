function BaseballGame(operations) {
  let stack = [];
  let sum = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "C") {
      stack.pop();
    } else if (operations[i] === "D") {
      stack.push(stack[stack.length - 1] + stack[stack.length - 1]);
    } else if (operations[i] === "+") {
      stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
    } else {
      stack.push(Number(operations[i]));
    }
  }
  for (let i = 0; i < stack.length; i++) {
    sum += stack[i];
  }
  return sum;
}
let ops = ["5", "2", "C", "D", "+"];
console.log(BaseballGame(ops));
