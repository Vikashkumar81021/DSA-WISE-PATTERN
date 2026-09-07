class Node {
  constructor(data, next) {
    this.data = data;
    this.next = null;
  }
}
const node = new Node(10);
const node2 = new Node(20);
node.next = node2;
const node3 = new Node(30);
node2.next = node3;

let count = 0;
let curr = node;
while (curr !== null) {
  if (curr.data % 2 === 0) {
    count++;
  }
  curr = curr.next;
}
console.log("count", count);
