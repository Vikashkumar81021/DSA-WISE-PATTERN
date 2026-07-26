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
function dfs(node, visited) {
  if (visited.has(node)) return;
  visited.add(node);

  console.log(node);
  for (let neighbour of graph[node]) {
    dfs(neighbour, visited);
  }
}
let visited = new Set();
console.log(dfs("A", visited));
