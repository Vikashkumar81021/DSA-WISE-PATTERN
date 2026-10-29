function power(n, p, i = 0) {
  if (i === p) {
    return 1;
  }

  return n * power(n, p, i + 1);
}
console.log(power(9, 9));
