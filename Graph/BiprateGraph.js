let vertices = [0, 1, 2, 3];

let edges = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 2],
  [2, 3],
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

function isBipartite(graph) {
  let colors = new Array(graph.length).fill(-1);
  let res = true;
  function dfs(node, color) {
    colors[node] = color;
    for (let neighbour of graph[node]) {
      if (colors[neighbour] === -1) {
        dfs(neighbour, 1 - color);
      } else if (colors[neighbour] === color) {
        res = false;
        return;
      }
    }
  }
  for (let i = 0; i < graph.length; i++) {
    if (colors[i] === -1) {
      dfs(i, 0);
    }
  }
  return res;
}
console.log(isBipartite(graph));
