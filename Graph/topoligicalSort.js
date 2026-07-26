const vertices = ["A", "B", "C", "D"];
const edges = [
  ["A", "B"],
  ["A", "C"],
  ["B", "D"],
  ["C", "D"],
];
const graph = {};
for (let vertex of vertices) {
  graph[vertex] = [];
}
for (let edge of edges) {
  let u = edge[0];
  let v = edge[1];
  graph[u].push(v);
}
// let visited = new Set();
// //stack mein tb push hoga jb dependecy khtm ho jaaeyega tb
// let stack = [];
// function dfs(node) {
//   visited.add(node);
//   for (let neighbour of graph[node]) {
//     if (!visited.has(neighbour)) {
//       dfs(neighbour);
//     }
//   }
//   stack.push(node);
// }
// for (let vertex of vertices) {
//   if (!visited.has(vertex)) {
//     dfs(vertex);
//   }
// }
// const topologicalOrder = stack.reverse();
// console.log(topologicalOrder);
// function dfs(node, visited, stack) {
//   visited.add(node);

//   for (const neighbour of graph[node]) {
//     if (!visited.has(neighbour)) {
//       dfs(neighbour, visited, stack);
//     }
//   }

//   stack.push(node);
// }

// const visited = new Set();
// const stack = [];

// for (const vertex of vertices) {
//   if (!visited.has(vertex)) {
//     dfs(vertex, visited, stack);
//   }
// }

// console.log(stack.reverse());

let visited = new Set();
let stack = [];
function topology(node) {
  visited.add(node);

  for (let neighbour of graph[node]) {
    if (!visited.has(neighbour)) {
      topology(neighbour);
    }
  }
  stack.push(node);
}

for (let vertex of vertices) {
  if (!visited.has(vertex)) {
    topology(vertex);
  }
}
console.log(stack.reverse());
