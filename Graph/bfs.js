let vertices = ["A", "B", "C", "D"];
const edges = [
  ["A", "B"],
  ["A", "C"],
  ["B", "D"],
  ["C", "D"],
];
// let graph = {};
// //1 add vertices in graph with empty array
// for (let vertex of vertices) {
//   graph[vertex] = [];
// }
// //2. add connection btw edges and vertices
// for (let edge of edges) {
//   let u = edge[0];
//   let v = edge[1];
//   graph[u].push(v);
//   graph[v].push(u);
// }

// //BFS
// let res = [];
// function bfs(graph, start) {
//   let queue = [start];
//   let visited = new Set();

//   visited.add(start);

//   while (queue.length > 0) {
//     let node = queue.shift();
//     res.push(node);
//     // console.log("node", node);

//     for (let neighbour of graph[node]) {
//       if (!visited.has(neighbour)) {
//         visited.add(neighbour);
//         queue.push(neighbour);
//       }
//     }
//   }
// }

// bfs(graph, "C");
// console.log(res);
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
function bfs(graph, start) {
  let q = [start];
  let visited = new Set();
  visited.add(start);
  while (q.length > 0) {
    let node = q.shift();
    console.log(node);
    for (let neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        q.push(neighbour);
      }
    }
  }
}
bfs(graph, "A");
