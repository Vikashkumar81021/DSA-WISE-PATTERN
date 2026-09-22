let arr = [5, 4, -1, 7, 8];
function minSubArray(arr) {
  let bestEnding = arr[0];
  let res = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let v1 = bestEnding + arr[i];
    let v2 = arr[i];
    bestEnding = Math.min(v1, v2);
    res = Math.min(res, bestEnding);
  }
  return res;
}

console.log(minSubArray(arr));
