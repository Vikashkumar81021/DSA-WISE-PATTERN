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
console.log("count", count);
let k = 2;

curr = node;
if (count < k) {
  console.log(-1);
} else {
  count -= k;
  while (count--) {
    curr = curr.next;
  }
}

console.log(curr);
