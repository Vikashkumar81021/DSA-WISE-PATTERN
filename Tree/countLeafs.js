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

// tree.left.left = new BinaryTree(4);
// tree.left.right = new BinaryTree(5);

// tree.right.left = new BinaryTree(6);
// tree.right.right = new BinaryTree(7);

// function node(root) {
//   if (root === null) return 0;

//   if (root.left === null && root.right === null) {
//     return 1;
//   }

//   return node(root.left) + node(root.right);
// }

// console.log(node(tree));

function countLeafNodes(root) {
  if (root === null) return 0;
  if (root.left === null && root.right === null) {
    return 1;
  }
  return countLeafNodes(root.left) + countLeafNodes(root.right);
}
console.log(countLeafNodes(tree));
