let vertices = ["A", "B", "C", "D"];
const edges = [
  ["A", "B"],
  ["A", "C"],
  ["B", "D"],
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
function printPath(src, des, visited) {
  if (visited.has(src)) return;
  visited.add(src);
  let ans = [];
  for (let neighbour of graph[src]) {
    printPath(neighbour, des, visited);
  }
  return ans;
}
let visited = new Set();
console.log(printPath("A", "D", visited));
