function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
let root = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};
function inOrder(root) {
  let ans = [];
  function traversal(curr) {
    if (!curr) return;
    traversal(curr.left);
    ans.push(curr.val);
    traversal(curr.right);
  }
  traversal(root);
  return ans;
}

console.log(inOrder(root));
