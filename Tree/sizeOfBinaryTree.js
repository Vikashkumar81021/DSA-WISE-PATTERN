class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
const tree = new Node(2);
tree.left = new Node(4);
tree.right = new Node(6);
console.log("tree", tree);

let count = 0;
function sizeOfBT(root) {
  if (root === null) return 0;
  // count++;
  return 1 + sizeOfBT(root.left) + sizeOfBT(root.right);
  // sizeOfBT(root.left);
  // sizeOfBT(root.right);
  // return count;
}
//size(root)=size(root.left)+size(root.right)+1
console.log(sizeOfBT(tree));
