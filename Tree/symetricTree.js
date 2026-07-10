class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const p = new TreeNode(1);
p.left = new TreeNode(3);
p.right = new TreeNode(3);

const q = new TreeNode(1);
q.left = new TreeNode(5);
q.right = new TreeNode(3);

const isSymmetric = function (root) {
  if (root === null) return true;
  return Mirror(root.left, root.right);
};
function Mirror(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  return Mirror(p.left, q.right) && Mirror(p.right, q.left);
}

console.log(isSymmetric(p));
