class Node {
  constructor(data) {
    ((this.data = data), (this.next = null));
  }
}
let head = new Node(1);
let head2 = new Node(2);
let head3 = new Node(4);
head.next = head2;
head2.next = head3;

// let node2 = new Node(1);
// let node3 = new Node(3);
// let node4 = new Node(4);
// node2.next = node3;
// node3.next = node4;

function NthNodeFromBegning(head, k) {
  let curr = head;
  let count = 1;
  while (curr !== null) {
    if (count === k) {
      console.log(count, k);

      return curr.data;
    }
    count++;
    curr = curr.next;
  }
}
console.log(NthNodeFromBegning(head, 2));
