class Tree {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const tree = new Tree(1);
tree.left = new Tree(2);
tree.right = new Tree(3);

function countEvenNode(root) {
  if (root === null) return 0;
  let count = 0;
  if (root.data % 2 == 0) {
    count++;
  }
  return count + countEvenNode(root.left) + countEvenNode(root.right);
}
console.log(countEvenNode(tree));
