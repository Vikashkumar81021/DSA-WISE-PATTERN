function maxSum(arr, tar) {
  let left = 0;
  let sum = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    while (sum > tar) {
      sum -= arr[left];
      left++;
    }
    if (sum === tar) {
      return true;
    }
  }
  return false;
}
const arr = [1, 4, 20, 3, 10, 5];
let tar = 240;
if (tar === true) {
  console.log("tar", tar);
} else {
  console.log("not found");
}
console.log(maxSum(arr, tar));
