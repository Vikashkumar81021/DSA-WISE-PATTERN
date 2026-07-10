class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
let node = new Node(1);
let node2 = new Node(2);
node.next = node2;
let node3 = new Node(3);
node2.next = node3;

let arr = [];
let curr = node;
console.log("current", curr);

while (curr !== null) {
  arr.push(curr.data);
  curr = curr.next;
}
console.log(arr);

let lastIndex = arr.length - 1;
curr = node;
while (curr) {
  curr.data = arr[lastIndex];
  lastIndex--;
  curr = curr.next;
}
console.log(node);

// let lastIndex = arr.length - 1;
// curr = node;
// while (curr) {
//   curr.data = arr[lastIndex];
//   lastIndex--;
//   curr = curr.next;
// }
// console.log(node);
