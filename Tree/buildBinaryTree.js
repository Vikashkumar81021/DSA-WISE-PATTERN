class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);
let index = 0;
function buildTree(arr) {
  if (arr[index] === null) {
    index++;
    return null;
  }

  const root = new Node(arr[index++]);

  root.left = buildTree(arr);
  root.right = buildTree(arr);

  return root;
}
