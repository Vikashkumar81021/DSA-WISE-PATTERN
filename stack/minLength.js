function minLength(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
    let n = stack.length;
    if (n >= 2) {
      let pair = stack[n - 2] + stack[n - 1];
      if (pair === "AB" || pair === "CB") {
        stack.pop();
        stack.pop();
      }
    }
  }
  return stack.length;
}
