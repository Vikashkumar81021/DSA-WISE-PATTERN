let arr = [1, 2, 3, 4];
let k = 2;
let windowSum = 0;
for (let i = 0; i < k; i++) {
  windowSum += arr[i];
}
let res = [windowSum];

for (let i = k; i < arr.length; i++) {
  windowSum = windowSum - arr[i - k] + arr[i];
  res.push(windowSum);
}
console.log("windowSum", res);
