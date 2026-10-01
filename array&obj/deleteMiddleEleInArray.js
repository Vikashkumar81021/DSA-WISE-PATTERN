let arr = [10, 20, 30, 40, 50];

let mid = Math.floor(arr.length / 2);

for (let i = mid; i < arr.length; i++) {
  arr[i] = arr[i + 1];
}
arr.length--;
let stack = [];
while (arr.length > 0) {
  stack.push(arr.pop());
}
console.log(stack);
