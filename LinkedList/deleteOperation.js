class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
let head = new Node(10);

function insertStart(head, data) {
  let newNode = new Node(data);
  newNode.next = head;
  return newNode;
}
head = insertStart(head, 5); //iska mtlb hua head=new node function hmne head k andr call kr diya

function deleteStart(head) {
  if (head === null) {
    console.log("LinkedList is Empty");
    return;
  }
  return head.next;
}
// head = deleteStart(head);
function deleteAtEnd(head) {
  let temp = head;
  while (temp.next.next !== null) {
    temp = temp.next;
  }
  temp.next = null;
  return head;
}
// head = deleteAtEnd(head);
// function deleteAtIndex(head, target) {
//   let index = 0;
//   let ref = head;
//   while (ref.next !== null && index !== target - 1) {
//     ref = ref.next;
//   }
//   ref.next = ref.next.next;
//   return head;
// }
// head = deleteAtIndex(head, 1);
//this line without function
// head = head.next;

function deleteIndex(head, tar) {
  if (head == null) return null;
  //agar pahle node delet krnaho
  if (head.data === tar) {
    return head.next;
  }
  let curr = head;
  let prev = null;
  while (curr.next !== null) {
    prev = curr;
    curr = curr.next;
    if (curr.data === tar) {
      prev.next = curr.next;
      return head;
    }
  }
  return head;
}
head = deleteIndex(head, 5);
console.log(head);
