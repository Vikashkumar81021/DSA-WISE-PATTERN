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
let visited = new Set();
function cycleDetectionBFS(node) {
  let Queue = [[node, null]];
  visited.add(node);
  while (Queue.length > 0) {
    let [node, parent] = Queue.shift();
    for (let neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        Queue.push([neighbour, node]);
      } else if (neighbour !== parent) {
        return true;
      }
    }
  }
  return false;
}

// For disconnected graph
function isCycle() {
  for (let vertex of vertices) {
    if (!visited.has(vertex)) {
      if (cycleDetectionBFS(vertex)) {
        return true;
      }
    }
  }
  return false;
}
