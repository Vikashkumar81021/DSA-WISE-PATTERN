function climbingStairs(n) {
  let dp = new Map();
  function solve(n, i = 0) {
    if (i == n) {
      return 1;
    }
    if (i > n) {
      return 0;
    }
    if (dp.has(i)) {
      return dp.get(i);
    }
    let ans = solve(n, i + 1) + solve(n, i + 2);
    dp.set(i, ans);
    return ans;
  }
  return solve(n);
}

let num = 2;
console.log(climbingStairs(num));
