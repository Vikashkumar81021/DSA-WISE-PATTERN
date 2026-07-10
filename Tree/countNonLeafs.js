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

tree.right.left = new BinaryTree(6);
tree.right.right = new BinaryTree(7);

function countNonLeafs(root) {
  if (root === null) return 0;

  //   if (root.left !== null && root.right !== null) {
  //     return 1 + countNonLeafs(root.left) + countNonLeafs(root.right);
  //   }
  //   return 0;
  if (!root.left && !root.right) {
    return 0;
  }
  return 1 + countNonLeafs(root.left) + countNonLeafs(root.right);
}

console.log(countNonLeafs(tree));
