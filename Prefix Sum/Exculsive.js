function execlusive(arr) {
  let sum = 0;
  for (let i = 1; i < 3; i++) {
    sum += arr[i - 1];
  }
  return sum;
}
let arr = [1, 2, 3, 4, 5];
console.log(execlusive(arr));
