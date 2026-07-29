let vertices = ["A", "B", "C", "D", "E", "F"];

const edges = [
  ["A", "B"],
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
let visited = new Set();
let count = 0;
function dfs(node) {
  if (visited.has(node)) return;

  visited.add(node);

  for (let neighbour of graph[node]) {
    if (!visited.has(neighbour)) {
      dfs(neighbour);
    }
  }
}

for (let vertex of vertices) {
  if (!visited.has(vertex)) {
    count++;
    dfs(vertex);
  }
}

console.log(count);
