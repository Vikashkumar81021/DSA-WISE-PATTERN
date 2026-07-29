const vertices = ["A", "B", "C", "D"];

const edges = [
  ["A", "B"],
  ["A", "C"],
  ["B", "D"],
  ["C", "D"],
];

// Create Graph
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
let visited = new Set();

function detectCycle(node, parent) {
  visited.add(node);

  // for (let neighbour of graph[node]) {
  //   if (visited.has(neighbour) && neighbour !== parent) {
  //     return true;
  //   }
  //   if (!visited.has(neighbour)) {
  //     if (detectCycle(neighbour, node)) return true;
  //   }
  // }
  for (let neighbour of graph[node]) {
    if (!visited.has(neighbour)) {
      detectCycle(neighbour, node);
    } else if (neighbour !== parent) {
      return true;
    }
  }
  return false;
}

let hasCycle = false;
for (let vertex of vertices) {
  if (!visited.has(vertex)) {
    if (detectCycle(vertex, null)) {
      hasCycle = true;
      break;
    }
  }
}

console.log(hasCycle);
console.log(visited);

// function isCycleUndirectGraph(node, parent) {
//   visited.add(node);

//   for (let neighbour of graph[node]) {
//     if (!visited.has(neighbour)) {
//       if (isCycleUndirectGraph(neighbour, node)) return true;
//     } else if (neighbour !== parent) {
//       return true;
//     }
//   }
//   return false;
// }

//ab ye jo function hai agar koi graph mein visit nhe kr paae  uske liye ye loop function chlega
// function isCycle() {
//   for (let vertex of vertices) {
//     if (!visited.has(vertex)) {
//       if (isCycleUndirectGraph(vertex, null)) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
//Agar traversal ke time koi aisa neighbour mil jaye jo pehle se visited ho aur wo current node ka parent na ho, to cycle hai.
// Current node ko visit karo.
// Uske har neighbour ko dekho.
// Agar neighbour visited nahi hai, to us par DFS/BFS karo.
// Agar neighbour already visited hai:
// Agar wo parent hai, to ignore karo (kyunki wahi se aaye the).
// Agar wo parent nahi hai, to cycle mil gayi.
// function hasCycle(node, parent) {
//   visited.add(node);

//   for (let neighbour of graph[node]) {

//     if (neighbour === parent) {
//       continue;        // Parent ko ignore kar do
//     }

//     if (visited.has(neighbour)) {
//       return true;     // Parent ke alawa koi visited node mili
//     }

//     if (hasCycle(neighbour, node)) {
//       return true;
//     }
//   }

//   return false;
// }
