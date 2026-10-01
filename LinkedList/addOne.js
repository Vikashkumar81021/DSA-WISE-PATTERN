class Node {
  constructor(data) {
    ((this.data = data), (this.next = null));
  }
}
let node = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
node.next = node2;
node2.next = node3;

let curr = node;
while (curr.next !== null) {
  curr = curr.next;
}
curr.data += 1;

console.log("node", node);
