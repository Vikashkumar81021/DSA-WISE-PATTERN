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

function reverse(str, left, right) {
  let arr = str.split("");
  function helper(arr, left, right) {
    if (left >= right) {
      return;
    }
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    helper(arr, left + 1, right - 1);
  }
  helper(arr, left, right);
  return arr.join("");
}
let str = "abcd";
console.log(reverse(str, 0, str.length - 1));
