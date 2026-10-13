function validParenthesis(s) {
  let stack = [];
  for (let ch of s) {
    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
    } else {
      if (stack.length === 0) return false;
      if (
        (ch === ")" && stack[stack.length - 1] !== "(") ||
        (ch === "]" && stack[stack.length - 1] !== "[") ||
        (ch === "}" && stack[stack.length - 1] !== "{")
      ) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}

let s = "()";
console.log(validParenthesis(s));
