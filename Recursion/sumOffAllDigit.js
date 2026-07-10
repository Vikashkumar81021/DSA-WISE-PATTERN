function sumOfDigit(n) {
  if (n === 0) return 0;
  return (n % 10) + sumOfDigit(Math.floor(n / 10));
}
let num = 1234;

console.log("Sum of digits =", sumOfDigit(num));
