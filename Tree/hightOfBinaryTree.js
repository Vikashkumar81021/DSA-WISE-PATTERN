// function maxDepth(root) {
//   if (root === null) return 0;
//   let left = maxDepth(root.left);
//   let right = maxDepth(root.right);
//   return 1 + Math.max(left, right);
// }

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
console.log(tree);
let count = 0;
function heightOfTree(root) {
  if (root === null) return 0;

  let leftHeight = heightOfTree(root.left);

  let rightHeight = heightOfTree(root.right);

  return 1 + Math.max(leftHeight, rightHeight);
}
console.log(heightOfTree(tree));
