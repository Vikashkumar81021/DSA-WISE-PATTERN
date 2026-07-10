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
q.left = new TreeNode(3);
q.right = new TreeNode(3);
function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  //   return isSameTree(p.left, p.right) && isSameTree(q.left, q.right);
  return isSameTree(p.right, q.right) && isSameTree(q.right, q.left);
}
console.log(isSameTree(p, q));
console.log("p left", p.left);
console.log("p right", p.right);
console.log("q right", q.right);
console.log("q left", q.left);
