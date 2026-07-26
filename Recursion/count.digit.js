function countDigit(n) {
  if (n === 0) {
    return 0;
  }
  return 1 + countDigit(Math.floor(n / 10));
}
let n = 1234;
console.log(countDigit(n));
