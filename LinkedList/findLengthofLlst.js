class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
const node = new Node(10);
const node2 = new Node(20);
node.next = node2;
let arr = [];
let curr = node;
let len = 0;
while (curr !== null) {
  arr.push(curr.data);
  len++;
  curr = curr.next;
}

console.log(arr);

// let curr = node;

// let len = 0;
// while (curr !== null) {
//   len++;
//   curr = curr.next;
// }
// let res = Math.floor(len / 2);
// curr = node;
// let count = 0;
// while (curr !== null) {
//   count++;
//   if (count === res) {
//     return curr;
//   }
//   curr = curr.next;
//   return curr;
// }
function length(head) {
  if (head === null) {
    return 0;
  }
  let counter = 1;
  let curr = head;
  while (curr.next !== null) {
    curr = curr.next;
    counter++;
  }
  return counter;
}

console.log(length(head));
