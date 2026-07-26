const vertices = ["A", "B", "C", "D"];

const edges = [
  ["A", "B"],
  ["A", "C"],
  ["B", "D"],
  ["C", "D"],
];

let graph = {};
let indegree = {};

for (let v of vertices) {
  graph[v] = [];
  indegree[v] = 0;
}

for (let [u, v] of edges) {
  graph[u].push(v);
  indegree[v]++;
}

let queue = [];

for (let v of vertices) {
  if (indegree[v] === 0) {
    queue.push(v);
  }
}

let ans = [];

while (queue.length > 0) {
  let node = queue.shift();
  ans.push(node);

  for (let neighbour of graph[node]) {
    indegree[neighbour]--;

    if (indegree[neighbour] === 0) {
      queue.push(neighbour);
    }
  }
}

console.log(ans);
