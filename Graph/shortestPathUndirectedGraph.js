let vertices = [1, 2, 3, 4, 5];

let edges = [
  [1, 2, 2],
  [2, 5, 5],
  [2, 3, 4],
  [1, 4, 1],
  [4, 3, 3],
  [3, 5, 1],
];

let src = 1;
let dest = 5;
let graph = {};

for (let v of vertices) {
  graph[v] = [];
}

for (let edge of edges) {
  let u = edge[0];
  let v = edge[1];

  graph[u].push(v);
  graph[v].push(u);
}

let visited = new Set();
let parent = {};
let queue = [];

queue.push(src);
visited.add(src);
parent[src] = -1;

while (queue.length > 0) {
  let node = queue.shift();

  if (node === dest) break;

  for (let neighbour of graph[node]) {
    if (!visited.has(neighbour)) {
      visited.add(neighbour);
      parent[neighbour] = node;
      queue.push(neighbour);
    }
  }
}

let path = [];

if (!visited.has(dest)) {
  console.log([-1]);
} else {
  let curr = dest;

  while (curr !== -1) {
    path.push(curr);
    curr = parent[curr];
  }

  path.reverse();
  console.log(path);
}
