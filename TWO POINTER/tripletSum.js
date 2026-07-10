function triplet(arr) {
  arr.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] > 0 && arr[i] === arr[i - 1]) continue;

    let start = i + 1,
      end = arr.length - 1;
    while (start < end) {
      let sum = arr[start] + arr[end] + arr[i];
      if (sum === 0) {
        result.push([arr[i], arr[start], arr[end]]);
        start++;
        end--;
        while (arr[start] === arr[start + 1]) {
          start++;
        }
        while (arr[end] === arr[end + 1]) {
          end--;
        }
      } else if (sum < 0) {
        start++;
      } else {
        end--;
      }
    }
  }
  return result;
}
let nums = [0, 0, 0];
console.log(triplet(nums));
