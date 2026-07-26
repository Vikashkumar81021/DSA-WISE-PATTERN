let vertices = ["A", "B", "C", "D"];
const edges = [
  ["A", "B"],
  ["A", "C"],
  ["B", "D"],
  ["C", "D"],
];
let graph = {};
for (let vertex of vertices) {
  graph[vertex] = [];
}
for (let edge of edges) {
  let u = edge[0];
  let v = edge[1];
  graph[u].push(v);
  graph[v].push(u);
}

// function degree(node) {
//   let count = 0;
//   for (let neighbour of graph[node]) {
//     count++;
//   }
//   return count;
// }
function degree(node) {
  return graph[node].length;
}
console.log(degree("C"));
