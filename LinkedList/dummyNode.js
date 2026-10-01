class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
let head = new Node(10);
const head1 = new Node(20);
head.next = head1;
let head2 = new Node(30);
head1.next = head2;
let head3 = new Node(40);
head2.next = head3;
let dummyNode = new Node(0);
dummyNode.next = head;
dummyNode.next = dummyNode.next.next;
head = dummyNode.next;
console.log(head);
