class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
let head = new Node(10);
let newNode = new Node(20);
head.next = newNode;

function removeElements(head, val) {
  let dummy = new Node(0);
  let curr = dummy;
  dummy.next = head;
  while (curr.next !== null) {
    if (curr.next.val === val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return dummy.next;
}
