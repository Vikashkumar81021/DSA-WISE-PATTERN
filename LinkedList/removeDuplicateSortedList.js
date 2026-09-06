class Node {
  constructor(data, next) {
    this.data = data;
    this.next = null;
  }
}

let node = new Node(1);
let node2 = new Node(2);
node.next = node2;
let node3 = new Node(2);
node2.next = node3;
let node4 = new Node(3);
node3.next = node4;
console.log("Node", node);

let prev = node;
let curr = node.next;
while (curr !== null) {
  if (curr.data === prev.data) {
    prev.next = curr.next;
  } else {
    prev = curr;
  }
  curr = curr.next;
}
console.log("curr", node);
