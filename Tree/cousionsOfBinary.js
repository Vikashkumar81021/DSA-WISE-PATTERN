class Tree {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let levelOfX = -1;
let levelOfY = -1;
let xParent = null;
let yParent = null;

function dfs(root, x, y, level = 0, parent = null) {
  if (!root) return;

  if (root.data === x) {
    levelOfX = level;
    xParent = parent;
  }

  if (root.data === y) {
    levelOfY = level;
    yParent = parent;
  }

  dfs(root.left, x, y, level + 1, root);
  dfs(root.right, x, y, level + 1, root);
}

function isCousins(root, x, y) {
  dfs(root, x, y);

  return levelOfX === levelOfY && xParent !== yParent;
}

// Example
const tree = new Tree(1);
tree.left = new Tree(2);
tree.right = new Tree(3);
tree.left.left = new Tree(4);
tree.right.right = new Tree(5);

console.log(isCousins(tree, 4, 5)); // true
console.log(xParent);
console.log(yParent);
