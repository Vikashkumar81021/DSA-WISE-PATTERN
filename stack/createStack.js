class Stack {
  constructor() {
    this.item = [];
  }
  push(element) {
    this.item.push(element);
  }
  pop() {
    if (this.item.length === 0) {
      throw new Error("Element not found");
    }
    return this.item.pop();
  }
  peek() {
    if (this.item.length === 0) {
      throw new Error("Element not found  ");
    }
    return this.item[this.item.length - 1];
  }
  size() {
    return this.item.length;
  }
  isEmpty() {
    return this.item.length === 0;
  }
}
const n = new Stack();
n.push(1);
n.push(2);
n.push(3);
n.push(4);
n.push(5); //this is peek value bcoz ye last mein insert hua hai
console.log("Top:", n.peek());
n.pop();
n.size();
n.isEmpty();
console.log("Top after pop:", n.peek());
console.log(n.item);
console.log("size", n.size());
console.log("isEmpty", n.isEmpty());

// //USING ENCAPSULATION
// class Stack {
//   #items = [];
//   constructor() {}
//   push(element) {
//     this.#items.push(element);
//   }
//   pop() {
//     if (this.#items.length === 0) {
//       throw new Error("Element not found");
//     }
//     return this.#items.pop();
//   }
//   peek() {
//     if (this.#items.length === 0) {
//       throw new Error("Element not found  ");
//     }
//     return this.#items[this.#items.length - 1];
//   }
//   size() {
//     return this.#items.length;
//   }
//   isEmpty() {
//     return this.#items.length === 0;
//   }
// }
// const n = new Stack();
// n.push(1);
// n.push(2);
// n.push(3);
// n.push(4);
// n.push(5); //this is peek value bcoz ye last mein insert hua hai
// console.log("Top:", n.peek());
// n.pop();
// n.size();
// n.isEmpty();
// console.log("Top after pop:", n.peek());

// console.log("size", n.size());
// console.log("isEmpty", n.isEmpty());
