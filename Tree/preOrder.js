class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
let ans = [];
function preOrder(root) {
  if (root === null) return 0;
  ans.push(root.data);
  preOrder(root.left);

  preOrder(root.right);
  return ans;
}
console.log(preOrder(tree));
