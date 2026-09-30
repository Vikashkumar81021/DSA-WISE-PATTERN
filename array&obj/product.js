function getTopRatedProducts(arr) {
  let topRate = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].rating >= 4.5) {
      topRate.push(arr[i]);
    }
  }
  return topRate;
}

// let products = [
//   { id: 1, name: "Laptop", price: 55000, rating: 4.5 },
//   { id: 2, name: "Phone", price: 25000, rating: 3.8 },
//   { id: 3, name: "Headphones", price: 2500, rating: 4.7 },
//   { id: 4, name: "Keyboard", price: 1800, rating: 4.1 },
//   { id: 5, name: "Monitor", price: 15000, rating: 4.9 },
// ];
// console.log(getTopRatedProducts(products));

function getProductCountByCategory(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i].category]) {
      obj[arr[i].category]++;
    } else {
      obj[arr[i].category] = 1;
    }
  }
  return obj;
}
// let products = [
//   { id: 1, name: "Laptop", category: "electronics" },
//   { id: 2, name: "Phone", category: "electronics" },
//   { id: 3, name: "Shirt", category: "clothing" },
//   { id: 4, name: "Jeans", category: "clothing" },
//   { id: 5, name: "Mouse", category: "electronics" },
//   { id: 6, name: "Shoes", category: "footwear" },
// ];
// console.log(getProductCountByCategory(products));

function getUsersWithDuplicateEmail(users) {
  let obj = {};
  let res = [];
  for (let i = 0; i < users.length; i++) {
    if (obj[users[i].email]) {
      obj[users[i].email]++;
    } else {
      obj[users[i].email] = 1;
    }
  }
  for (let key in obj) {
    if (obj[key] >= 2) {
      res.push(key);
    }
  }
  return res;
}

// let users = [
//   { id: 1, name: "Vikash", email: "vikash@gmail.com" },
//   { id: 2, name: "Rahul", email: "rahul@gmail.com" },
//   { id: 3, name: "Amit", email: "vikash@gmail.com" },
//   { id: 4, name: "Neha", email: "neha@gmail.com" },
//   { id: 5, name: "Priya", email: "rahul@gmail.com" },
// ];
// console.log(getUsersWithDuplicateEmail(users));

// function getUsersWithSameDepartment(users) {
//   let obj = {};
//   let res = [];
//   for (let i = 0; i < users.length; i++) {
//     if (obj[users[i].department]) {
//       obj[users[i].department].push(users[i].name);
//     } else {
//       obj[users[i].department] = [users[i].name];
//     }
//   }
//   return obj;
// }
// let users = [
//   { id: 1, name: "Vikash", department: "IT" },
//   { id: 2, name: "Rahul", department: "HR" },
//   { id: 3, name: "Amit", department: "IT" },
//   { id: 4, name: "Neha", department: "Finance" },
//   { id: 5, name: "Priya", department: "HR" },
// ];
// console.log(getUsersWithSameDepartment(users));

function getUsersWithSameDepartment(users) {
  let obj = {};
  let res = {};
  for (let i = 0; i < users.length; i++) {
    let department = users[i].department;

    if (obj[department]) {
      obj[department].push(users[i].name);
    } else {
      obj[department] = [users[i].name];
    }
  }
  for (let key in obj) {
    if (obj[key].length >= 2) {
      res[key] = obj[key];
    }
  }

  return res;
}

let users = [
  { id: 1, name: "Vikash", department: "IT" },
  { id: 2, name: "Rahul", department: "HR" },
  { id: 3, name: "Amit", department: "IT" },
  { id: 4, name: "Neha", department: "Finance" },
  { id: 5, name: "Priya", department: "HR" },
];
console.log(getUsersWithSameDepartment(users));

function getUserBalance(transactions) {
  let obj = {};
  for (let i = 0; i < transactions.length; i++) {
    let userId = transactions[i].userId;
    if (obj[userId]) {
      if (userId.type === "credit") {
        // userId[i].amount+=
      }
    }
  }
}

let transactions = [
  { id: 1, userId: 101, amount: 500, type: "credit" },
  { id: 2, userId: 101, amount: 200, type: "debit" },
  { id: 3, userId: 102, amount: 1000, type: "credit" },
  { id: 4, userId: 101, amount: 300, type: "credit" },
  { id: 5, userId: 102, amount: 400, type: "debit" },
];
let products = [
  { id: 1, name: "Laptop", category: "electronics" },
  { id: 2, name: "Phone", category: "electronics" },
  { id: 3, name: "Shirt", category: "clothing" },
  { id: 4, name: "Shoes", category: "clothing" },
];

let sales = [
  { productId: 1, quantity: 2 },
  { productId: 2, quantity: 5 },
  { productId: 1, quantity: 3 },
  { productId: 3, quantity: 4 },
  { productId: 2, quantity: 2 },
  { productId: 4, quantity: 6 },
];
