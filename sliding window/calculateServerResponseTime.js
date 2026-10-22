function serverResponseTime(times) {
  let left = 0,
    sum = 0,
    maxLen = 0;
  for (let i = 0; i < times.length; i++) {
    sum += times[i];
    while (sum > 400) {
      sum -= times[left];
      left++;
    }
    maxLen = Math.max(maxLen, i - left + 1);
  }
  return maxLen;
}
//cal longest continus period totoal response

let times = [100, 120, 90, 200, 80];
console.log(serverResponseTime(times));
