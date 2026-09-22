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

function pivotIndex(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  let leftSum = 0;
  for (let i = 1; i < arr.length; i++) {
    let rightSum = sum - leftSum - arr[i];
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += arr[i];
  }
  return -1;
}
let arr = [1, 7, 3, 6, 5, 6];
