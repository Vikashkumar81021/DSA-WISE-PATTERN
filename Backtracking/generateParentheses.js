function generateParentheses(n, open, close, s, res) {
  if (open === n && close === n) {
    res.push(s);
    return;
  }
  //backtracking
  // add "("
  if (open < n) {
    generateParentheses(n, open + 1, close, s + "(", res);
  }

  // add ")"
  if (close < open) {
    generateParentheses(n, open, close + 1, s + ")", res);
  }
}
let ans = [];
generateParentheses(2, 0, 0, "", ans);
console.log(ans);
