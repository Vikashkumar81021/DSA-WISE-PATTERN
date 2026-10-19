function makeStringGreat(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (
      stack.length > 0 &&
      stack[stack.length - 1].toLowerCase() === str[i].toLowerCase() &&
      stack[stack.length - 1] !== str[i]
    ) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }
  return stack.join("");
}
let s = "leEeetcode";
console.log(makeStringGreat(s));
