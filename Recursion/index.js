// function printNum(n) {
//   if (n === 6) {
//     return 6;
//   }
//   console.log(n);

//   return printNum(n + 1);
// }

// printNum(1);

// function printNumRev(n) {
//   if (n == 0) {
//     return;
//   }
//   console.log(n);

//   return printNumRev(n - 1);
// }
// printNumRev(5);

//

//6=6*5*4*3*2*1
// function factorial(n) {
//   if (n === 1) {
//     return 1;
//   }

//   return n * factorial(n - 1);
// }

// console.log(factorial(6));

//5--> 5+4+3+2+1
// function findSum(n) {
//   if (n === 1) {
//     return 1;
//   }
//   return n + findSum(n - 1);
// }
// console.log(findSum(5));

//2-->2*2*2*2
// function findPower(n, s) {
//   if (n == 0) {
//     return 1;
//   }
//   return n * findPower(s, n - 1);
// }

// console.log(findPower(2, 4));

//sumOfDigit -->1234=10
// function sumDigit(n) {
//   if (n === 0) {
//     return 0;
//   }
//   let digit = n % 10;
//   n = Math.floor(n / 10);
//   return digit + sumDigit(n);
// }
// console.log(sumDigit(1234));

//Reverse number-->123=321
// function reverseNumber(n, rev = 0) {
//   if (n === 0) {
//     return rev;
//   }

//   return reverseNumber(Math.floor(n / 10), rev * 10 + (n % 10));
// }

// console.log(reverseNumber(123));

//234-->24

function product(n) {
  if (n == 0) {
    return 1;
  }
  let pro = 1;
  digit = n % 10;
  n = Math.floor(n / 10);
  return digit * product(n);
}
console.log(product(234));

// 1. Race Condition
// 2. Shared Lock
// 3. Exclusive Lock
// 4. Row Lock
// 5. Transactions
// 6. Deadlock
// 7. Pessimistic Locking
// 8. Optimistic Locking
// 9. Isolation Levels
// 10. MVCC
// 11. MongoDB Atomic Operations
// 12. MongoDB Transactions
// 13. Redis Distributed Locking
