class Tree {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}
const tree = new Tree(1);
tree.left = new Tree(2);
tree.left.right = new Tree(5);
tree.right = new Tree(3);

// console.log("tree", tree);
// ["1->2->5","1->3"]

function binaryTreePath(root) {
  let res = [];

  function dfs(node, path) {
    if (!node) return;
    path += node.data;
    if (!node.left && !node.right) {
      res.push(path);
      return;
    }
    path += "->";
    dfs(node.left, path);
    dfs(node.right, path);
  }
  dfs(root, "");
  return res;
}
console.log(binaryTreePath(tree));
