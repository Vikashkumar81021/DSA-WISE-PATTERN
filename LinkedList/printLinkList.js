class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

let node = new Node(1);
let node1 = new Node(2);
node1.next = node;
node = node1;
function Print(head) {
  if (head === null) {
    return null;
  }
  let curr = head;
  while (curr !== null) {
    console.log("Node", curr.data);
    curr = curr.next;
  }
}
head = Print(node);
