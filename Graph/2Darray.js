let grid = [
  [1, 1, 0],
  [0, 1, 1],
  [0, 0, 1],
];
//r--> row
//c-->collum
let res = [];
function dfs(r, c) {
  if (
    r < 0 ||
    c < 0 ||
    r >= grid.length ||
    c >= grid[0].length ||
    grid[r][c] === 0
  ) {
    return;
  }
  grid[r][c] = 0;
  res.push([r, c]);
  //neighbours
  dfs(r - 1, c);
  dfs(r + 1, c);
  dfs(r, c - 1);
  dfs(r, c + 1);
  return res;
}
console.log(dfs(0, 0));
