function validParenthesis(s) {
  let stack = [];
  for (let ch of s) {
    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
    } else {
      //aagr koi opening hai he nhe phir bhe closing mein aa gae means wrong hai false return
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
  //   Stack empty hai → true (saare brackets match hue).
  // Stack empty nahi hai → false (kuch opening brackets unmatched hain).
  // Bas isi liye loop ke baad ye check zaroori hai.
}

let s = "()";
console.log(validParenthesis(s));

//using map
function isValid(s) {
  let stack = [];

  let map = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);

  for (let ch of s) {
    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
    } else {
      if (stack.length === 0) return false;

      if (stack[stack.length - 1] !== map.get(ch)) {
        return false;
      }

      stack.pop();
    }
  }

  return stack.length === 0;
}

let str = "()()";
let st = [];
for (let i = 0; i < str.length; i++) {
  if (str[i] === "(") {
    st.push(str[i]);
  } else {
    if (st.length === 0) {
      console.log(false);
      break;
    } else {
      st.pop();
    }
  }
}
