class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
let head = null;
let arr = [1, 2, 3, 4];
let curr = null;

for (let i = 0; i < arr.length; i++) {
  // let newNode = new Node(arr[i]);
  if (head === null) {
    head = new Node(arr[i]);
    curr = head;
  } else {
    curr.next = new Node(arr[i]);
    curr = curr.next;
  }
}
// console.log(head);

function insertAtMiddle(value, position = 1) {
  let n = new Node(value);
  let node = head;
  let count = 0;
  while (count < position - 1) {
    node = node.next;
    count++;
  }
  n.next = node.next;
  node.next = n;
}
insertAtMiddle(5);
console.log(head);
