class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let head = new Node(10);
let head2 = new Node(20);
head.next = head2;
let head3 = new Node(30);
head2.next = head3;
let head4 = new Node(40);
head3.next = head4;
let head5 = new Node(50);
head4.next = head5;
// head = head.next;
// head Node {
//   data: 10,
//   next: Node { data: 30, next: Node { data: 40, next: null } }
// }
//dekho jes cnode ko delte krna hai uska connection tor do
// head.next = head3;

// head2.next = head4;
console.log(head);

head2.next = head5;
console.log(head);
