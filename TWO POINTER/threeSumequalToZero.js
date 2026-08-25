function threeSum(arr) {
  arr.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    let left = i + 1,
      right = arr.length - 1;
    while (left < arr.length && left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      if (sum === 0) {
        res.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;
        while (arr[left] === arr[left - 1]) {
          left++;
        }
        while (arr[right] === arr[right + 1]) {
          right--;
        }
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// //HELPERS
// function threeSum(arr) {
//   arr.sort((a, b) => a - b);
//   const res = [];

//   for (let i = 0; i < arr.length - 2; i++) {
//     if (i > 0 && arr[i] === arr[i - 1]) continue;

//     findTriplets(arr, i, res);
//   }

//   return res;
// }
// function findTriplets(arr, i, res) {
//   let left = i + 1;
//   let right = arr.length - 1;

//   while (left < right) {
//     const sum = arr[i] + arr[left] + arr[right];

//     if (sum === 0) {
//       res.push([arr[i], arr[left], arr[right]]);
//       left++;
//       right--;

//       left = skipDuplicatesLeft(arr, left);
//       right = skipDuplicatesRight(arr, right);
//     } else if (sum < 0) {
//       left++;
//     } else {
//       right--;
//     }
//   }
// }
// function skipDuplicatesLeft(arr, left) {
//   while (left < arr.length && arr[left] === arr[left - 1]) {
//     left++;
//   }

//   return left;
// }

// function skipDuplicatesRight(arr, right) {
//   while (right >= 0 && arr[right] === arr[right + 1]) {
//     right--;
//   }

//   return right;
// }
