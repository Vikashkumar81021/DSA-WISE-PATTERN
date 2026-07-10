class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function findMax(root) {
  if (!root) return Number.MIN_VALUE;

  let res = root.data;
  //   let lres = findMax(root.left);
  //   let rres = findMax(root.right);
  //   return Math.max(res, Math.max(lres, rres));
  return Math.max(
    res,
    Math.max(findMax(root.left)),
    Math.max(findMax(root.right)),
  );
}

const tree = new Node(2);
tree.left = new Node(4);
tree.right = new Node(6);
console.log("max", findMax(tree));
