let vertices = ["A", "B", "C", "D"];
const edges = [
  ["A", "B"],
  ["A", "C"],
  ["B", "D"],
  ["C", "D"],
];
let graph = {};
//1 add vertices in graph with empty array
for (let vertex of vertices) {
  graph[vertex] = [];
}
//2. add connection btw edges and vertices
for (let edge of edges) {
  let u = edge[0];
  let v = edge[1];
  graph[u].push(v);
  graph[v].push(v);
}
console.log("graph", graph);
