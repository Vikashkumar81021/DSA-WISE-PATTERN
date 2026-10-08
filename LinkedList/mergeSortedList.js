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

let node2 = new Node(1);
let node3 = new Node(3);
let node4 = new Node(4);
node2.next = node3;
node3.next = node4;

// function mergeList(head, node) {
//   let newList = new Node(0);
//   let curr = newList;
//   let currHead = head;
//   let nodeHead = node;
//   while (currHead !== null && nodeHead !== null) {
//     if (currHead.data < nodeHead.data) {
//       curr.next = currHead;
//       currHead = currHead.next;
//       let value = currHead.data;
//       while (currHead !== null && currHead.data === value) {
//         currHead = currHead.next;
//         }

//     }
//     else {
//       curr.next = nodeHead;
//       nodeHead = nodeHead.next;
//       let value = nodeHead.data;
//       while (nodeHead !== null && nodeHead.data === value) {
//         nodeHead = nodeHead.next;
//       }
//     }
//     curr = curr.next;
//   }

//   curr.next = currHead || nodeHead;
//   return newList.next;
// }
// console.log(mergeList(head, node2));

function mergeList(head1, head2) {
  let dummy = new Node(0);
  let curr = dummy;
  let p1 = head1;
  let p2 = head2;
  while (p1 !== null && p2 !== null) {
    if (p1.data < p2.data) {
      curr.next = p1;
      p1 = p1.next;
    } else {
      curr.next = p2;
      p2 = p2.next;
    }
    curr = curr.next;
  }
  //iska mtlb agar kese node mein elemet reh gya usse link kr deega
  curr.next = p1 || p2;
  return dummy.next;
}
console.log(mergeList(head, node2));
