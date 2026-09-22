//BRUTE FORCE

// function subArrayEqK(arr, k) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = i; j < arr.length; j++) {
//       sum += arr[j];
//       if (sum === k) {
//         count++;
//       }
//     }
//   }
//   return count;
// }

//OPTIMAL
function subArrayEqK(arr, k) {
  let count = 0;
  let sum = 0;
  let map = new Map();
  map.set(0, 1);
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
}
console.log(subArrayEqK([1, 1, 1], 2));
