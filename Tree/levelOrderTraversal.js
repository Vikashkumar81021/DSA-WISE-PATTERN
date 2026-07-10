class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function levelOrderTraversal(root) {
  if (!root) return [];

  let ans = [];
  let queue = [root];

  while (queue.length > 0) {
    let size = queue.length;
    let temp = [];

    for (let i = 0; i < size; i++) {
      //node variable mein pura node aa gya
      let node = queue.shift();

      // console.log("node ", node);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      //node variable  mein pura node store hai but temp mein hme sirf uska value chaahye toh node.val se mil jaaeyega
      temp.push(node.val);
    }

    ans.push(temp);
  }

  return ans;
}

let root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7)),
);

console.log(levelOrderTraversal(root));
