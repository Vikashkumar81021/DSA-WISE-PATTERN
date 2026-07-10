// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// const n1 = new Node(10);
// const n2 = new Node(20);
// n1.next = n2;
// const n3 = new Node(30);
// n2.next = n3;
// const n = new Node(5);
// n.next = n1;
// const head = n;
// console.log(head);

// class Node {
//   constructor(head) {
//     this.head = null;
//   }
// }
// const n1 = new Node();
// n1.head = new Node(10);
// console.log(n1);

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// const n = new Node(5);

// const n1 = new Node(10);
// const n2 = new Node(20);
// n.next = n1;
// n1.next = n2;
// const n3 = new Node(40);
// n2.next = n3;
// console.log(n);
// class Node {
//   constructor(data = null) {
//     this.data = data;
//     this.next = null;
//   }
// }

// const n1 = new Node();
// n1.data = 10;
// console.log(n1);

// useing array
class Node {
  constructor(data = null, next = null) {
    (this.data = data), (this.next = next);
  }
}
const arr = [1, 2, 3, 4];

const n1 = new Node(arr[0]);
let curr = n1;
for (let i = 0; i < arr.length; i++) {
  if (n1.data === null) {
    let n = new Node(arr[i]);
    n1.next = n;
  }
  curr.next = new Node(arr[i]);
  curr = curr.next;
}
console.log(n1);

// function createNode(data) {
//   this.data = data;
//   this.next = null;
// }

// let n1 = new createNode(10);
// let n2 = new createNode(15);
// let n3 = new createNode(5);

// n1.next = n2;
// n3.next = n1;
// n1 = n3;
// console.log(n1);
