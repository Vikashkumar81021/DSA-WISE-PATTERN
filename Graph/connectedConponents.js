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

  for (let neighbour of graph[node]) {
    dfs(neighbour, visited);
  }
}

function connectedComponents(graph, visited) {
  let count = 0;

  for (let vertex of vertices) {
    if (!visited.has(vertex)) {
      count++;
      dfs(vertex, visited);
    }
  }
  return count;
}
let visited = new Set();
console.log(connectedComponents(graph, visited));
