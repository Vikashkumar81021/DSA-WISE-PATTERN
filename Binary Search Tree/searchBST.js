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

function SearchBst(root, tar) {
  if (!root) return false;
  if (root.val === tar) return true;
  if (tar < root.val) {
    return SearchBst(root.left, tar);
  } else {
    return SearchBst(root.right, tar);
  }
}
console.log(SearchBst(root, 5));
