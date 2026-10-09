// N-ary Tree mein N ka matlab hai ek node ke maximum kitne children ho sakte hain.
// Binary Tree-:Maximum 2 children
// - node.left
// - node.right
// N-ary Tree :-Multiple children
// - node.children
// - 3, 4, 5 ya aur bhi
let res = [];
function NarrayTree(node) {
  if (node === null) return;
  res.push(node.val);
  for (let child of node.children) {
    NarrayTree(child);
  }
  return res;
}
NarrayTree(node);
