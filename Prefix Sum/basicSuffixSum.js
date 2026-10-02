let arr = [1, 2, 3, 4, 5];
let suffix = [];
suffix[arr.length - 1] = arr[arr.length - 1];
for (let i = arr.length - 2; i >= 0; i--) {
  //i+1 means i k baad wala eleemnt
  suffix[i] = suffix[i + 1] + arr[i];
}
console.log(suffix);

// let array = [1, 2, 3, 4, 5];
// let suffix = [];

// let sum = 0;
// for (let i = array.length - 1; i >= 0; i--) {
//   sum += array[i];
//   suffix[i] = sum;
// }
// console.log(suffix);
