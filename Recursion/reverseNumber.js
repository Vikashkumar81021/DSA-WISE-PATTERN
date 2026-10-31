function reverseNumber(n, rev = 0) {
  if (n === 0) {
    return rev;
  }

  return reverseNumber(Math.floor(n / 10), rev * 10 + (n % 10));
}
console.log(reverseNumber(4321));
