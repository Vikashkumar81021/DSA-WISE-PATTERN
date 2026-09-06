class Node {
  constructor(data, next) {
    this.data = data;
    this.next = null;
  }
}
let node = new Node(1);
let node2 = new Node(2);
node.next = node2;
let node3 = new Node(3);
node2.next = node3;
let node4 = new Node(4);
node3.next = node4;

let slow = node;
let fast = node;
while (fast !== null && fast.next !== null) {
  slow = slow.next;
  fast = fast.next.next;
}
console.log(slow.data);
