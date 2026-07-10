function power(n, i) {
  if (i == 0) return 1;

  return n * power(n, i - 1);
}
console.log(power(2, 3));
