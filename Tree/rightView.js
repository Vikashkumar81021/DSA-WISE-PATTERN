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
tree.left.left.right = new Tree(6);

let ans = [];

function rightView(root, level = 0) {
  if (!root) return;
  if (ans.length === level) {
    ans.push(root.data);
  }

  rightView(root.right, level + 1);
  rightView(root.left, level + 1);
}

rightView(tree);

console.log(ans);
