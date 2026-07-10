class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function reverseOrderTraversal(root) {
  let ans = [];
  if (!root) return ans;
  let queue = [root];
  while (queue.length > 0) {
    let size = queue.length;
    let temp = [];
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      temp.push(node.val);
    }
    ans.unshift(temp);
  }
  return ans;
}
let root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7)),
);
console.log(reverseOrderTraversal(root));
