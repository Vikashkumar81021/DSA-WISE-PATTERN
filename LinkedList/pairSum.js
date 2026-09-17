class Node {
  constructor(data, next) {
    this.data = data;
    this.next = null;
  }
}
const node = new Node(4);
const node2 = new Node(2);
node.next = node2;
const node3 = new Node(2);
node2.next = node3;
const node4 = new Node(3);
node3.next = node4;

let arr = [];
let curr = node;
while (curr !== null) {
  arr.push(curr.data);
  curr = curr.next;
}
let left = 0,
  right = arr.length - 1;
let max = -1;
while (left < right) {
  let sum = arr[left] + arr[right];
  max = Math.max(sum, max);
  left++;
  right--;
}
console.log("max", max);
