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

function hashPassword(root, sumTarget) {
  let res = false;
  let sum = 0;
  function sumPath(node, sum, target) {
    if (node === null) return false;
    sum += node.val;
    if (node.left === null && node.right === null) {
      if (sum === target) {
        res = true;
        return;
      }
    }
    sumPath(node.left, sum, target);
    sumPath(node.right, sum, target);
  }
  sumPath(root, sum, sumTarget);
  return res;
}
console.log(hashPassword(root, 4));
