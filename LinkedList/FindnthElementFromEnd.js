class Node {
  constructor(data, next) {
    this.data = data;
    this.next = null;
  }
}
const head = new Node(1);
const head2 = new Node(2);
const head3 = new Node(3);
const head4 = new Node(4);
head.next = head2;
head2.next = head3;
head3.next = head4;
console.log(head);

function NthLastEle(head, k) {
  let curr = head;
  let count = 0;
  while (curr !== null) {
    count++;
    curr = curr.next;
  }
  let pos = count - k;
  curr = head;
  for (let i = 0; i < pos; i++) {
    curr = curr.next;
  }
  return curr.data;
}
console.log(NthLastEle(head, 2));
