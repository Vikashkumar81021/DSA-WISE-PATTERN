class Tree {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
const tree = new Tree(2);
tree.left = new Tree(2);
tree.right = new Tree(3);
function nodeSum(root) {
  if (root === null) return 0;

  return root.data + nodeSum(root.left) + nodeSum(root.right);
}

function leftRightSum(root) {
  if (root === null) return;

  let leftSum = nodeSum(root.left);
  let rightSum = nodeSum(root.right);

  console.log("Left Sum:", leftSum);
  console.log("Right Sum:", rightSum);
}

leftRightSum(tree);
