class Node {
  constructor(data) {
    ((this.data = data), (this.next = null));
  }
}
let head = new Node(10);
let newNode = new Node(20);
head.next = newNode;
let n = new Node(30);
newNode.next = n;
let n2 = new Node(40);
n.next = n2;
let n3 = new Node(50);
n2.next = n3;

function deleteMiddleElement(head) {
  let slow = head;
  let fast = head;
  let prev = null;
  while (fast !== null && fast.next !== null) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = slow.next;
  return head;
}
console.log(deleteMiddleElement(head));
