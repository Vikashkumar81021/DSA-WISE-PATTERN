class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
let head = new Node(10);

function insertEnd(head, data) {
  //ye tail hm insert krna hai last mein
  let tail = new Node(data);
  let curr = head;
  while (curr.next !== null) {
    curr = curr.next;
  }
  curr.next = tail;
  return head;
}
insertEnd(head, 15);

function searchNode(head, data) {
  let curr = head;
  while (curr !== null) {
    if (curr.data === data) {
      return true;
    }
    curr = curr.next;
  }
  return false;
}
head = searchNode(head, 10);
console.log(head);
