let arr = [1, 2, 3, 4, 5];
console.log("BEFORE", arr);

let prefix = [];

// prefix[0] = arr[0];
for (let i = 1; i < arr.length; i++) {
  //   console.log(prefix[i - 1]);
  //i-1 means i k current element i k pahle wala eleemnt
  // prefix[i] = prefix[i - 1] + arr[i];
  arr[i] = arr[i] + arr[i - 1];
  console.log("ARRAY", arr[i - 1]);
}
console.log("Prefix", arr);
