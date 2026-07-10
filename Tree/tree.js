class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left = new TreeNode(4);
root.right = new TreeNode(5);
root.left = new TreeNode(6);
root.right = new TreeNode(7);

console.log(root);
console.log(root.left);
console.log(root.right);
