function removeDuplicateAdjustment(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1] === str[i]) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }
  return stack.join("");
}

let str = "abbaca";
console.log(removeDuplicateAdjustment(str));
