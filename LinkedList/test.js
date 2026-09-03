class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let head = new Node(10);
// let head = null;

function insertAtBeginning(head) {
  const newNode = new Node(5);
  newNode.next = head;
  return newNode;
}
head = insertAtBeginning(head);
function insertAtEnd(head) {
  let tail = new Node(15);
  let curr = head;
  while (curr.next !== null) {
    curr = curr.next;
  }
  curr.next = tail;
  return head;
}
// head = insertAtEnd(head);

function deleteAtEnd(head) {
  let curr = head;
  while (curr.next.next !== null) {
    curr = curr.next;
  }
  curr.next = null;
  return head;
}
// head = deleteAtEnd(head);
function deleteStart(head) {
  // if (head === null) {
  //   console.log("LinkedList is Empty");
  //   return;
  // }
  return head.next;
}
// head = deleteStart(head);
function traverse(head) {
  let temp = head;
  while (temp !== null) {
    console.log(temp.data);
    temp = temp.next;
  }
}
traverse(head);

function search(head, data) {
  let curr = head;
  while (curr !== null) {
    if (curr.data == data) {
      return true;
    }
    curr = curr.next;
  }
  return false;
}
// head = search(head, 10);

//find length
// let arr = [],
//   len = 0;
// let curr = head;
// while (curr !== null) {
//   arr.push(curr.data);
//   len++;
//   curr = curr.next;
// }
// console.log(arr);
function checkEmpty(head) {
  return head === null;
}
head = checkEmpty(head);

console.log(head);
