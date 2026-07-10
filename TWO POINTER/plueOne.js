let arr = [1, 2, 3];

// arr[2] = arr[2] + 1;

// console.log(arr);

for (let i = arr.length - 1; i > 0; i--) {
  if (arr[i] < 9) {
    arr[i]++;
  }
  arr[i] = 0;
}
arr.unshift(1);
console.log(arr);
