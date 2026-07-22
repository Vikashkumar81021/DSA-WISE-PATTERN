const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "D"],
  D: ["B", "C"],
};
function dfs(node, visited) {
  if (visited.has(node)) return;

  visited.add(node);

  for (let neighbour of graph[node]) {
    console.log("neigh", neighbour);
    console.log("node", graph[node]);

    dfs(neighbour, visited);
  }
}
let visited = new Set();
//"A" current vertex
dfs("A", visited);
