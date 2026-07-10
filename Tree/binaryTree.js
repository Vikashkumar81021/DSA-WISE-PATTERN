class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
  }
  add(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    const queue = [this.root];
    while (queue.length > 0) {
      let currElement = queue.shift();
      if (!currElement.left) {
        currElement.left = newNode;
        console.log(this.root);
        return;
      }
      if (!currElement.right) {
        currElement.right = newNode;
        console.log(this.root);
        return;
      }
    }
  }
}

const binaryTree = new BinaryTree();
binaryTree.add(10);
binaryTree.add(20);
binaryTree.add(30);
