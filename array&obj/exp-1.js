function getUser(user) {
  let res = [];
  //   for (let i = 0; i < user.length; i++) {
  //     if (user[i].active === true) {
  //       res.push(user[i].id);
  //     }
  //   }
  for (let users of user) {
    if (users.active === true) {
      res.push(users.id);
    }
  }
  return res;
}

let users = [
  { id: 1, name: "vikash", active: true },
  { id: 2, name: "vikash", active: false },
  { id: 3, name: "vikash", active: true },
  { id: 4, name: "vikash", active: false },
];
// console.log(getUser(users));
function getOrdersPriceSum(orders) {
  let sum = 0;
  for (let order of orders) {
    if (order.status === "complete") {
      sum += order.price;
    }
  }
  return sum;
}

function getIncompleteOrders(orders) {
  let res = [];
  for (let order of orders) {
    if (order.status === "incomplete") {
      res.push(order);
    }
  }
  return res;
}
function getOrdersAbovePrice(order, amount) {
  let res = [];
  for (let orders of order) {
    if (orders.price > amount) {
      res.push(orders);
    }
  }
  return res;
}
function getMostExpensiveOrder(orders) {
  let maxPrice = orders[0];
  for (let order of orders) {
    if (order.price > maxPrice.price) {
      maxPrice = order;
    }
  }

  return maxPrice;
}
function getAverageOrderPrice(orders) {
  let sum = 0;
  let len = 0;
  for (let i = 0; i < orders.length; i++) {
    sum += orders[i].price;
    len++;
  }
  return sum / orders.length;
  //   let avg = sum / len;
  //   return avg;
}
function getOrderById(orders, id) {
  let res = null;
  for (let order of orders) {
    if (order.id === id) {
      res = order;
      break;
    }
  }
  return res;
}
let orders = [
  { id: 1, ordrName: "Laptop", price: 55000, status: "complete" },
  { id: 2, ordrName: "Smartphone", price: 25000, status: "incomplete" },
  { id: 3, ordrName: "Headphones", price: 2500, status: "complete" },
  { id: 4, ordrName: "Keyboard", price: 1800, status: "complete" },
  { id: 5, ordrName: "Mouse", price: 9000000, status: "incomplete" },
  { id: 6, ordrName: "Monitor", price: 15000, status: "complete" },
  { id: 7, ordrName: "Smartwatch", price: 7000, status: "incomplete" },
  { id: 8, ordrName: "Tablet", price: 22000, status: "complete" },
  { id: 9, ordrName: "Bluetooth Speaker", price: 3500, status: "incomplete" },
  { id: 10, ordrName: "Gaming Chair", price: 12000, status: "complete" },
];
// console.log(getOrdersPriceSum(orders));
// console.log(getIncompleteOrders(orders));
// console.log(getOrdersAbovePrice(orders, 20000));
// console.log(getMostExpensiveOrder(orders));
// console.log(getAverageOrderPrice(orders));
console.log(getOrderById(orders, 4));
