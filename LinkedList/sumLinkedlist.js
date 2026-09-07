class Node {
  constructor(data, next) {
    this.data = data;
    this.next = null;
  }
}
const node = new Node(10);
const node2 = new Node(20);
node.next = node2;
console.log("node", node);

let sum = 0;
let curr = node;
while (curr !== null) {
  sum += curr.data;
  curr = curr.next;
}
console.log(sum);
