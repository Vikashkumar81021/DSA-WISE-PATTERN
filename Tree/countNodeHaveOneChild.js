class Tree {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
const tree = new Tree(1);
tree.left = new Tree(2);
tree.right = new Tree(3);
tree.left.left = new Tree(4);
tree.left.left.left = new Tree(5);
console.log(tree);

function countOneChild(root) {
  if (root === null) return 0;
  let current = 0;
  if ((root.left && !root.right) || (!root.left && root.right)) {
    current++;
  }
  return current + countOneChild(root.left) + countOneChild(root.right);
}
console.log(countOneChild(tree));
