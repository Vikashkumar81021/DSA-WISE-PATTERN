class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const tree = new TreeNode(1);

tree.left = new TreeNode(3);
tree.right = new TreeNode(2);
function sumBT(root) {
  if (root === null) return 0;

  return root.val + sumBT(root.left) + sumBT(root.right);
}
console.log("sum is", sumBT(tree));
