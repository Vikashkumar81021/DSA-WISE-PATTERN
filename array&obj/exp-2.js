let users = [
  { id: 1, name: "Vikash" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Amit" },
  { id: 4, name: "Neha" },
];

let orders = [
  { id: 101, userId: 1, price: 5000 },
  { id: 102, userId: 2, price: 3000 },
  { id: 103, userId: 1, price: 7000 },
  { id: 104, userId: 3, price: 2000 },
  { id: 105, userId: 2, price: 4000 },
];
console.log(getUserTotalOrders(users, orders, userId));
