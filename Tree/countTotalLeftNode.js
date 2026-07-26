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
tree.right.left = new BinaryTree(4);

function countLeftNode(root) {
  if (root == null) return 0;

  let count = 0;

  if (root.left != null) {
    count++;
  }

  count += countLeftNode(root.left);
  count += countLeftNode(root.right);

  return count;
}

console.log(countLeftNode(tree));
