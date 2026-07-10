class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
let head = new Node(10);
function insertAtBeginning(head) {
  let newNode = new Node(5);
  if (head !== null) {
    newNode.next = head;
    head.prev = newNode;
  }
  return newNode;
}
head = insertAtBeginning(head);
console.log(head.next.prev);

console.log(head);
