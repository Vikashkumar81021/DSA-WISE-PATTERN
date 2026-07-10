class Stack {
  constructor() {
    this.itme = [];
  }
  push(element) {
    this.itme.push(element);
  }
  pop() {
    return this.itme.pop();
  }
  isEmpty() {
    return this.itme.length === 0;
  }
}
const stack = new Stack();
let str = "abc";
for (let i = 0; i < str.length; i++) {
  stack.push(str[i]);
}

let rev = "";
while (!stack.isEmpty()) {
  rev += stack.pop();
}
console.log(rev);
