// class TreeNode {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
// const tree = new TreeNode(1);

// tree.left = new TreeNode(3);
// tree.right = new TreeNode(2);

// // tree.left.left = new TreeNode(4);
// // tree.left.right = new TreeNode(5);

// // tree.right.left = new TreeNode(6);
// // tree.right.right = new TreeNode(7);
// // console.log("totoal tree", tree);
// let count = 1;
// function countNode(root) {
//   let count = 1;

//   if (root === null) return 0;
//   //   if (root.left === null && root.right === null) {
//   //     return count;
//   //   }
//   console.log("root", root);

//   return count + countNode(root.left) + countNode(root.right);
// }
// console.log(countNode(tree));

class Tree {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const node = new Tree(5);
node.left = new Tree(10);
node.right = new Tree(15);
console.log("node", node);

function countNode(root) {
  if (root === null) return 0;

  return 1 + countNode(root.left) + countNode(root.right);
}
console.log(countNode(node));
