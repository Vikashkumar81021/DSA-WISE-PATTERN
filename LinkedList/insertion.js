class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
let node = null;
let arr = [10, 20, 30, 40];
for (let i = 0; i < arr.length; i++) {
  if (node === null) {
    node = new Node(arr[i]);
    // newNode.next = node;
    // node = newNode;
  } else {
    let n = new Node(arr[i]);
    n.next = node;
    node = n;
  }
}
let temp = node;
while (temp !== null) {
  console.log(temp.data);
  temp = temp.next;
}
// console.log(node);

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// let head = null;
// let tail = null;
// let arr = [2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   let newNode = new Node(arr[i]);

//   if (head === null) {
//     head = newNode;
//     tail = newNode;
//   } else {
//     tail.next = newNode;
//     tail = newNode;
//   }
// }
// console.log(head);
