class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function Insert(root, val) {
  if (root === null) {
    return new TreeNode(val);
  }
  if (val < root.val) {
    root.left = Insert(root.left, val);
  } else {
    root.right = Insert(root.right, val);
  }
  return root;
}
let root = null;
root = Insert(root, 4);
root = Insert(root, 2);
root = Insert(root, 6);
root = Insert(root, 1);
root = Insert(root, 3);
root = Insert(root, 5);
root = Insert(root, 7);
// console.log(root);
function levelOrder(root) {
  let ans = [];
  let q = [root];
  while (q.length > 0) {
    let size = q.length;
    let temp = [];
    for (let i = 0; i < size; i++) {
      let node = q.shift();
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
      temp.push(node.val);
    }
    ans.push(temp);
  }
  return ans;
}

console.log(levelOrder(root));
