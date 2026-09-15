let payment = [
  { userId: 1, amount: 200 },
  { userId: 2, amount: 400 },
  { userId: 1, amount: 300 },
  { userId: 3, amount: 500 },
];
let map = new Map();
for (let i = 0; i < payment.length; i++) {
  if (!map.has(payment[i].userId)) {
    map.set(payment[i].userId, payment[i].amount);
  } else {
    map.set(payment[i].userId, map.get(payment[i].userId) + payment[i].amount);
  }
}
console.log(map);
