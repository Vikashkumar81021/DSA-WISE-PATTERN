class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
let head = null;
let arr = [1, 2, 3, 4];

function createLinkedList(arr, index = 0) {
  if (index === arr.length) {
    return null;
  }
  const node = new Node(arr[index]);
  node.next = createLinkedList(arr, index + 1);
  return node;
}
head = createLinkedList(arr);
console.log(head);
