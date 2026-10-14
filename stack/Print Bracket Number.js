// function PrintBracketNumber(s) {
//   let count = 0;
//   let res = [];
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(") {
//       count++;
//       res.push(count);
//     } else if (s[i] === ")") {
//       res.push(count);
//       //   count--;
//     }
//   }
//   return res;
// }
// let str = "(aa(bdc))p(dee)";
// // let str = "(())";
// console.log(PrintBracketNumber(str));

function PrintBracketNumber(s) {
  let stack = [];
  let count = 0;
  let res = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      count++;
      stack.push(count);
      res.push(count);
    } else if (s[i] === ")") {
      res.push(stack.pop());
    }
  }
  return res;
}
let str = "(((()(";
console.log(PrintBracketNumber(str));
