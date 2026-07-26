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
function hasPath(src, des, visited) {
  if (visited.has(src)) return false;

  if (src === des) {
    return true;
  }
  visited.add(src);
  for (let neighbour of graph[src]) {
    let ans = hasPath(neighbour, des, visited);
    if (ans) {
      return true;
    }
  }
}
let visited = new Set();
console.log(hasPath("C", "D", visited));
