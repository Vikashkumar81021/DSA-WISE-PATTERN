class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
let head = new Node(10);

// //Insert start
// let newHead = new Node(5);
// newHead.next = head;
// head = newHead;
// console.log(head);
function insertAtStart(head, data) {
  let newHead = new Node(data);
  newHead.next = head;
  head = newHead;
  return head;
}
head = insertAtStart(head, 5);
//insert end
function end(head, data) {
  let tail = new Node(data);
  let curr = head;
  while (curr.next !== null) {
    curr = curr.next;
  }
  curr.next = tail;
  return head;
}
end(head, 15);
console.log(head);
