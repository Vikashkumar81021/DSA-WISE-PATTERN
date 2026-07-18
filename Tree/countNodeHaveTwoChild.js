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
// tree.left.left = new Tree(4);
// tree.left.left.left = new Tree(5);

function countNodeTwoChild(root) {
  if (root === null) return 0;
  let count = 0;
  if (root.left !== null && root.right !== null) {
    count++;
  }
  return count + countNodeTwoChild(root.left) + countNodeTwoChild(root.right);
}
console.log(countNodeTwoChild(tree));
