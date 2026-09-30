function countSubarray(arr, k) {
  if (k <= 1) return 0;

  let product = 1;
  let left = 0;
  let count = 0;

  for (let right = 0; right < arr.length; right++) {
    product *= arr[right];

    while (product >= k) {
      product /= arr[left];
      left++;
    }

    count += right - left + 1;
  }

  return count;
}

let k = 10;
let arr = [1, 2, 3, 4];

console.log(countSubarray(arr, k));

// Remove karne ka rule:

// // Sum
// sum += arr[right];   // Add
// sum -= arr[left];    // Remove

// // Product
// product *= arr[right];  // Add
// product /= arr[left];   // Remove

// 👉 Addition → - se remove
// 👉 Multiplication → / se remove
