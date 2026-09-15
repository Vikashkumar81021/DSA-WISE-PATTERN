let products = [
  { id: 1, stock: 10 },
  { id: 2, stock: 0 },
  { id: 3, stock: 5 },
  { id: 4, stock: 0 },
];
let res = [];
for (let product of products) {
  if (product.stock === 0) {
    res.push(product.id);
  }
}
console.log("RES", res);
