// //EASY WAY NOT OPTIMAL WAY TO FIND PIVOT INDEX

// function prefixSum(arr) {
//   let prefix = [];
//   prefix[0] = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     prefix[i] = prefix[i - 1] + arr[i];
//   }
//   return prefix;
// }
// function suffixSum(arr) {
//   let suffix = [];
//   suffix[arr.length - 1] = arr[arr.length - 1];
//   for (let i = arr.length - 2; i >= 0; i--) {
//     suffix[i] = suffix[i + 1] + arr[i];
//   }
//   return suffix;
// }

// function pivotIndex(arr) {
//   let suffix = suffixSum(arr);
//   let prefix = prefixSum(arr);
//   for (let i = 0; i < arr.length; i++) {
//     let leftSum = 0,
//       rightSum = 0;
//     if (i > 0) {
//       leftSum = prefix[i - 1];
//     }
//     if (i < arr.length - 1) {
//       rightSum = suffix[i + 1];
//     }
//     if (leftSum === rightSum) {
//       return -i;
//     }
//   }
//   return -1;
// }
// let arr = [1, 7, 3, 6, 5, 6];

//OPTIMIAL WAY
// Pivot index mein arr[i] current element ko left sum ya right sum mein include nahi karte.
function pivotIndex(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  let leftSum = 0;
  for (let i = 1; i < arr.length; i++) {
    // Pivot index mein arr[i] current element ko left sum ya right sum mein include nahi karte.
    let rightSum = sum - leftSum - arr[i]; //arr[i] minus kr rhe hai q ki current index ignore krna hai
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += arr[i];
  }
  return -1;
}
let arr = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(arr));
//dry run
// Index:   0  1  2
// Array:  [1, 2, 3]

// Index 0: Left = 0, Right = 2 + 3 = 5 ❌

// Index 1: Left = 1, Right = 3 ❌

// Index 2: Left = 1 + 2 = 3, Right = 0 ❌

// Kisi bhi index par:

// Left Sum === Right Sum

// nahi hua.

// Pivot index mein arr[i] current element ko left sum ya right sum mein include nahi karte.
// [1, 7, 3] [6] [5, 6]
//     LEFT   ↑    RIGHT
//           pivot

// Left sum = 1 + 7 + 3 = 11

// Pivot element = 6 → ignore

// Right sum = 5 + 6 = 11
