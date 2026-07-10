// let str = "hello";
// let revStr = "";

// for (let char of str) {
//   revStr = char + revStr;
// }
// console.log(revStr);

function revStr(str) {
  if (str.length === 1) {
    return str;
  }

  return revStr(str.slice(1)) + str[0];
}
console.log(revStr("hello"));
