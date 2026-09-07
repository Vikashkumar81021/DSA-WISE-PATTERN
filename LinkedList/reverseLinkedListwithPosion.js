class Node {
  constructor(data, next) {
    this.data = data;
    this.next = null;
  }
}

const node = new Node(10);
const node2 = new Node(20);
node.next = node2;
console.log("Node", node);
