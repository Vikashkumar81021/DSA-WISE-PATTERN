class BinaryTree {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const tree = new BinaryTree(1);

tree.left = new BinaryTree(2);
tree.right = new BinaryTree(3);

tree.left.left = new BinaryTree(4);
tree.left.right = new BinaryTree(5);

function sumLeftLeaves(root) {
  if (root === null) return 0;
  let sum = 0;
  if (root.left && root.left.left === null && root.left.right === null) {
    sum += root.left.data;
  }
  return sum + sumLeftLeaves(root.left) + sumLeftLeaves(root.right);
}
console.log(sumLeftLeaves(tree));
