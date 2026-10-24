function StockSpanner(stock) {
  let res = [];

  for (let i = 0; i < stock.length; i++) {
    let count = 1;

    for (let j = i - 1; j >= 0; j--) {
      if (stock[i] >= stock[j]) {
        count++;
      } else {
        break;
      }
    }
    res.push(count);
  }
  return res;
}
let arr = [100, 80, 60, 70, 60, 75];
console.log(StockSpanner(arr));
