// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// let head = new Node(10);
// // let newHead = new Node(5);

// // // head.next = newHead;
// // newHead.next = head;
// // head = newHead;
// function insertAtBegning(head, data) {
//   let newNode = new Node(data);
//   newNode.next = head;
//   // head = newNode;
//   return newNode;
// }
// head = insertAtBegning(head, 5);
// // function insertEnd(head, data) {
// //   let newNode = new Node(15);
// //   if (head === null) {
// //     return newNode;
// //   }
// //   let curr = head;
// //   while (curr.next !== null) {
// //     curr = curr.next;
// //   }
// //   curr.next = newNode;
// //   return head;
// // }

// // function insertAtEnd(head, data) {
// //   let endNode = new Node(data);
// //   if (head === null) {
// //     return endNode;
// //   }
// //   let curr = head; //prereserved

// //   while (curr.next !== null) {
// //     curr = curr.next;
// //   }
// //   curr.next = endNode;
// //   return head;
// // }
// // insertAtEnd(head, 15);
// console.log(head);

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtBeginning(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAtEnd(data) {
    let newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
  }

  print() {
    console.log(JSON.stringify(this.head, null, 2));
  }
}

let list = new LinkedList();

list.insertAtBeginning(10);
list.insertAtBeginning(5);
list.insertAtEnd(15);

list.print();
