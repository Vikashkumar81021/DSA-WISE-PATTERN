class LinkedList {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
const node = new LinkedList(5);
const node2 = new LinkedList(2);
node.next = node2;
const node3 = new LinkedList(3);
node2.next = node3;
const node4 = new LinkedList(4);
node3.next = node4;
const node5 = new LinkedList(5);
node4.next = node5;

//BRUTE FORCE
// function reverseList(head, left, right) {
//   let res = [];
//   let curr = head;
//   while (curr !== null) {
//     res.push(curr.data);
//     curr = curr.next;
//   }
//   console.log("res", res);
//   // 1-based positions ko 0-based indexes mein convert karo
//   left = left - 1;
//   right = right - 1;
//   while (left < right) {
//     let temp = res[left];

//     res[left] = res[right];
//     res[right] = temp;
//     left++;
//     right--;
//   }
//   return res;
// }

function reverseList(head, left, right) {
  let before = null;
  let temp = head;
  let pos = 1;
  while (pos < left) {
    //ye condition se hm find kr leenege left reverse wala number ka previous node
    before = temp;
    temp = temp.next;
    pos++;
  }
  let curr = temp;
  let prev = null;
  let time = right - left + 1;
  while (time-- && curr !== null) {
    let future = curr.next;
    curr.next = prev;
    prev = curr;
    curr = future;
  }
  temp.next = curr;

  if (before) {
    before.next = prev;
  } else {
    head = prev;
  }

  return head;
}
console.log(reverseList(node, 2, 4));
