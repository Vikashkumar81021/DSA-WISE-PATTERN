// //brute force
// let arr = [1, 5, 4, 2, 9, 9, 9];
// k = 3;

// let maxSum = -Infinity;
// for (let i = 0; i <= arr.length - k; i++) {
//   let sum = 0;
//   for (let j = i; j < i + k; j++) {
//     sum += arr[j];
//   }
//   if (sum > maxSum) {
//     maxSum = sum;
//   }
// }
// console.log(maxSum);

//optimize
// function maxSubArray(arr, k) {
//   let low = 0,
//     high = k,
//     res = 0,
//     sum = 0;
//   for (let i = 0; i < k; i++) {
//     sum += arr[i];
//   }
//   while (high < arr.length) {
//     sum = sum - arr[low];
//     sum = sum + arr[high];
//     res = Math.max(res, sum);
//     low++;
//     high++;
//   }
//   return res;
// }

// let arra = [100, 200, 300, 400];
// let k = 2;
// console.log(maxSubArray(arra, k));

//using for loop
let arr = [1, 4, 2, 10, 23, 3, 1, 0, 20];
let k = 4;
let windowSum = 0;
for (let i = 0; i < k; i++) {
  windowSum += arr[i];
}
let max = windowSum;
for (let i = k; i < arr.length; i++) {
  windowSum = windowSum - arr[i - k] + arr[i];
  max = Math.max(windowSum, max);
}
console.log("Max subarray is", max);

let array = [1, 3, 2, 5, 1];
let s = 2;
let windowAdd = 0;
for (let i = 0; i < s; i++) {
  windowAdd += array[i];
}
let maxi = windowAdd;
for (let i = s; i < array.length; i++) {
  let remove = i - s;
  let add = i;
  windowAdd = windowAdd - array[remove] + array[add];
  maxi = Math.max(windowAdd, maxi);
}
console.log("Max", maxi);
