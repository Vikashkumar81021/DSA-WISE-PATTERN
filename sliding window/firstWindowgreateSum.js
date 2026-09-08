function findSum(arr, target) {
  let left = 0;
  let windowSum = 0;
  let minLength = Infinity;

  for (let right = 0; right < arr.length; right++) {
    windowSum += arr[right];

    while (windowSum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      windowSum -= arr[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

let arr = [1, 2, 3, 4, 5, 6];
let target = 3;

console.log(findSum(arr, target));
