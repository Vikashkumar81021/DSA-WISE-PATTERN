class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
const tree = new Node(1);
tree.left = 2;
tree.right = 3;
tree.left.left = 4;
tree.right.right = 5;

let ans = [];
function postOrder(root) {
  if (!root) return;
  postOrder(root.left);
  postOrder(root.right);
  ans.push(root.data);
}
