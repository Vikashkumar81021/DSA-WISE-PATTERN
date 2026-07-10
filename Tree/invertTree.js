class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(3);

function invertTree(root) {
  if (root === null) return null;
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  invertTree(root.left);
  invertTree(root.right);
  return root;
}

console.log(invertTree(p));
