class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
let head = null;
let arr = [1, 2, 3, 4];
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
// console.log(head);

function insertAtMiddle(value, position = 1) {
  let n = new Node(value);
  let node = head;
  let count = 0;
  // while humein us node tak le ja raha hai jiske baad new node insert karna hai.
  while (count < position - 1) {
    node = node.next;
    count++;
  }
  n.next = node.next;
  node.next = n;
}
insertAtMiddle(5);
console.log(head);

function insertInMiddle(head, x) {
  let slow = head;
  let fast = head;
  while (fast !== null || fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let newNode = new Node(x);
  newNode.next = slow.next;
  slow.next = newNode;
}

function insertAtPosition(head, pos, value) {
  let newNode = new Node(value);
  //insert begning
  if (pos === 0) {
    newNode.next = head;
    return newNode;
  }

  let curr = head;
  let count = 0;

  while (curr !== null && count < pos - 1) {
    curr = curr.next;
    count++;
  }
  if (curr === null) {
    return head;
  }

  newNode.next = curr.next;
  curr.next = newNode;

  return head;
}
