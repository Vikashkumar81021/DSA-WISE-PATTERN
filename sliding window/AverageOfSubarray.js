let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
let res = [];
let windowSum = 0;
for (let i = 0; i < k; i++) {
  windowSum += arr[i];
}
let avg = windowSum / k;
res.push(avg);
for (let i = k; i < arr.length; i++) {
  windowSum = windowSum - arr[i - k] + arr[i];
  avg = windowSum / k;
  res.push(avg);
}
console.log(res);
