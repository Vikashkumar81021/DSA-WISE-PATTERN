function deleteMidStack(s) {
  let stack = [];
  let res = [];
  let mid = Math.floor(s.length / 2);
  for (let i = 0; i < s.length; i++) {
    if (i !== mid) {
      stack.push(s[i]);
    }
  }
  while (stack.length > 0) {
    res.push(stack.pop());
  }
  return res;
}
let s = [10, 20, 30, 40, 50];
console.log(deleteMidStack(s));
