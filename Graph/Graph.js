const vertices = ["A", "B", "C", "D"];
//vertex bnaane k baad uska connection/disgara bna lo then uska edges bnaa do uss conection ka
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
  graph[v].push(u);
}
console.log("graph", graph);

// for (let vertex of vertices) {
//   graph[vertex] = [];
//   console.log(graph[vertex]);
// }
// for (let edge of edges) {
//   let u = edge[0];
//   let v = edge[1];

//   graph[u].push(v);
//   graph[v].push(u); // Undirected Graph
// }
// // console.log(graph);

// class Graph {
//   constructor() {
//     this.adjacencyList = new Map();
//   }
//   addVertex(vertex) {
//     if (!this.adjacencyList.has(vertex)) {
//       this.adjacencyList.set(vertex, []);
//     }
//   }
//   addEdges(vertex1, vertex2) {
//     if (!this.adjacencyList.has(vertex1)) {
//       console.log("HERE");

//       this.addVertex(vertex1);
//     }
//     if (!this.adjacencyList.has(vertex2)) {
//       console.log("HERE2");

//       this.addVertex(vertex2);
//     }

//     this.adjacencyList.get(vertex1).push(vertex2);
//     this.adjacencyList.get(vertex2).push(vertex1);
//   }
// }
// let myGraph = new Graph();
// myGraph.addVertex("A");
// myGraph.addVertex("B");
// // myGraph.addVertex("C");
// // myGraph.addVertex("D");
// myGraph.addEdges("A", "B");
// // myGraph.addEdges("A", "C");
// // myGraph.addEdges("B", "D");
// // myGraph.addEdges("C", "D");
// console.log(myGraph);
