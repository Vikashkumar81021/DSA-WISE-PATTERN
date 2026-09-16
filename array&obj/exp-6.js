let shopingCart = [
  { name: "Laptop", price: 50000, quantity: 1 },
  { name: "Mouse", price: 1000, quantity: 2 },
  { name: "keyboard", price: 2000, quantity: 1 },
  { name: "Monitor", price: 10000, quantity: 2 },
];
let sum = 0;
for (let cart of shopingCart) {
  sum += cart.price * cart.quantity;
  //   let i = 0;
  //   while (i < cart.quantity) {
  //     sum += cart.price;
  //     i++;
  //   }
}
console.log(sum);
