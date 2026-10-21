function copyStack(arr) {
  let stack2 = [];
  while (arr.length > 0) {
    stack2.push(arr.pop());
  }
  let temp = [];
  while (stack2.length > 0) {
    temp.push(stack2.pop());
  }

  return temp;
}
//stack element:-4,3,2,1
let stack = [1, 2, 3, 4];
console.log("st", stack);

console.log(copyStack(stack));
