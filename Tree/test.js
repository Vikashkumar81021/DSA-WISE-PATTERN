let n = 10203004;

let rev = 0;
let sum = 0;
while (n > 0) {
  let digit = n % 10;

  if (digit !== 0) {
    rev = rev * 10 + digit; // 4321
    sum += digit;
  }

  n = Math.floor(n / 10);
}

let x = 0;
while (rev > 0) {
  x = x * 10 + (rev % 10);
  rev = Math.floor(rev / 10);
}
let res = x * sum;
console.log(x, sum, res); // 1234
