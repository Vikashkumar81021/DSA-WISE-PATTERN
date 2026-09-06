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

let count = 0;
let curr = node;
while (curr !== null) {
  count++;
  curr = curr.next;
}
let k = 2;
count -= k;
let prev = null;
if (count === 0) {
  node = node.next;
} else {
  curr = node;
  while (count--) {
    prev = curr;
    curr = curr.next;
  }
  prev.next = curr.next;
}
console.log(node);
