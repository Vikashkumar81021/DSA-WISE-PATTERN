class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
let head = null;

// if (head === null) {
//   head = new Node(1);
// }
// let head2 = new Node(0);
// head2.next = head;
// head = head2;

let arr = [1, 2, 3, 4];
// let n1 = new Node(arr[0]);
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

console.log(head);
// insert at end

// function insertAtEnd(head) {

//   let tail = new Node(5);
// if (head === null) {
//   return tail;
// }
//   let curr = head;
// Last node tak jao
//   while (curr.next !== null) {
//     curr = curr.next;
//   }
// Last node ke baad new node attach karo
//   curr.next = tail;
//   return head;
// }
// head = insertAtEnd(head);
// console.log(head);

// n1->1 next->nulll
// 2nd itreation curr.next=nul hai waha new element rkho array ka
// Traverse/search/insert after nodes: current use karo, head preserve karo.
// First node delete/remove karna hai: head = head.next kar sakte ho.
// List ko intentionally modify kar rahe ho: head change ho sakta hai.
