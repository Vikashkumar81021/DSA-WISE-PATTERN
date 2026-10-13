class Stack {
  constructor() {
    this.itme = [];
  }
  push(element) {
    if (this.itme.length >= 3) {
      return "Stack overflow";
    }
    this.itme.push(element);
  }
  pop() {
    if (this.itme.length <= 0) {
      return "Stack underFlow";
    }
    return this.itme.pop();
  }
  isEmpty() {
    return this.itme.length === 0;
  }
  peek() {
    return this.itme[this.itme.length - 1];
  }
}
const stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log(stack.push(4));

// console.log("stack", stack);
// console.log("POP///////////");
// stack.pop();
// stack.pop();
// stack.pop();
// console.log(stack.pop());

let stack1 = [];
let str = "olleh";

for (let i = 0; i < str.length; i++) {
  stack1.push(str[i]);
}

console.log("STck 1", stack1);
let res = "";
while (stack1.length > 0) {
  res += stack1.pop();
}
console.log("res", res);
