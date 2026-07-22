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
function BFS(start) {
  if (!start) return [];
  let res = [];
  let Q = [start];
  let visited = new Set();
  visited.add(start);
  while (Q.length > 0) {
    let node = Q.shift();
    res.push(node);
    for (let neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        Q.push(neighbour);
      }
    }
  }
  return res;
}

console.log(BFS("A"));
function DFS(node, visited, res) {
  if (visited.has(node)) return;

  visited.add(node);
  res.push(node);
  for (let neighbour of graph[node]) {
    DFS(neighbour, visited);
  }
  return res;
}
let res = [];
let visited = new Set();
DFS("A", visited, res);
