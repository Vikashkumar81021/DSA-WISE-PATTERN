class BinaryTree {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
const tree = new BinaryTree(1);
tree.left = new BinaryTree(2);
tree.right = new BinaryTree(3);

function countLeftNode(root) {
  if (root == null || root.left == null) return 0;

  return 1 + countLeftNode(root.left);
}
//function call krte time toh tree.left likh rha hai iska mtlb hua function ko hm bta rhe hai ki sirf tree.left pe chla bs

console.log(countLeftNode(tree.left));
