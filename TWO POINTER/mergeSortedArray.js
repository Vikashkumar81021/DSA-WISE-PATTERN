// function mergeArray(nums1, m, nums2, n) {
//   let i = 0,
//     j = 0,
//     k = 0;
//   let arr = [];

//   while (i < m && j < n) {
//     if (nums1[i] < nums2[j]) {
//       arr[k] = nums1[i];
//       k++;
//       i++;
//     } else {
//       arr[k] = nums2[j];
//       j++;
//       k++;
//     }
//   }
//   while (i < m) {
//     arr[k] = nums1[i];
//     i++;
//   }
//   while (j < n) {
//     arr[k] = nums2[j];
//     j++;
//     k++;
//   }
//   return arr;
// }
// let nums1 = [1, 2, 3, 0, 0, 0],
//   m = 3,
//   nums2 = [2, 5, 6],
//   n = 3;
// console.log(mergeArray(nums1, m, nums2, n));

// // let a = [1, 2, 3];
// // let a2 = [-2, -4];
// // let i = 0,
// //   j = 0;
// // while (i < a.length) {
// //   a[i] = a[i * i];
// // }

//good approach

// let a = [1, 2, 3];
// for (let i = 0; i < a.length; i++) {
//   a[i] = a[i] * a[i];
// }
// console.log(a);
// let b = [-4, -2];
// for (let i = 0; i < b.length; i++) {
//   b[i] = b[i] * b[i];
// }
// console.log(b);
// // a.sort((x, y) => x - y);
// // b.sort((x, y) => x - y);
// let merge = [];

// let i = 0,
//   j = 0,
//   k = 0;
// while (i < a.length && j < b.length) {
//   if (a[i] < b[j]) {
//     merge[k] = a[i];
//     i++;
//     k++;
//   } else {
//     merge[k] = b[j];
//     j++;
//     k++;
//   }
// }
// while (i < a.length) {
//   merge[k] = a[i];
//   i++;
//   k++;
// }
// while (j < b.length) {
//   merge[k] = b[j];
//   j++;
//   k++;
// }
// console.log("merge both array is", merge);

//best
//sqaure of sorted array
// let arr = [-4, -1];
// let negative = [];
// let positive = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     negative.push(arr[i]);
//   } else {
//     positive.push(arr[i]);
//   }
// }
// //case:- agar array mein negative vale nhe hai  sirf positive value hai
// if (negative.length === 0) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * arr[i];
//   }
// }

// //case:- agar array mein positive value nhe hai sirf negative hai
// if (positive.length === 0) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * arr[i];
//   }
//   arr.reverse();
// }
// console.log("positive", positive);
// console.log("negative", negative);

// console.log("negative", negative);
// console.log("sqaure array is", arr);

//SQARE SORTED ARRAY
let res = [];
let arr = [-4, -1, 0, 3, 10];
let pos = [],
  neg = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    neg.push(arr[i]);
  } else {
    pos.push(arr[i]);
  }
}
for (let i = 0; i < pos.length; i++) {
  pos[i] = pos[i] * pos[i];
}
for (let i = 0; i < neg.length; i++) {
  neg[i] = neg[i] * neg[i];
}
neg.reverse();
let i = 0,
  j = 0,
  k = 0;

while (i < pos.length && j < neg.length) {
  if (pos[i] < neg[j]) {
    res[k] = pos[i];
    i++;
    k++;
  } else {
    res[k] = neg[j];
    j++;
    k++;
  }
}
while (i < pos.length) {
  res[k] = pos[i];
  i++;
  k++;
}
while (j < neg.length) {
  res[k] = neg[j];
  j++;
  k++;
}
console.log(res);
