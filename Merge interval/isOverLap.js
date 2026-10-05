function isIntersect(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let res = [];
  res.push(intervals[0]);
  for (let i = 1; i < intervals.length; i++) {
    let last = res[res.length - 1];
    if (intervals[i][0] <= last[1]) {
      return true;
    }
  }
  return false;
}
let intervals = [
  [1, 3],
  [7, 9],
  [4, 6],
  [10, 13],
];
console.log(isIntersect(intervals));

//otherway
function isIntersect(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= intervals[i - 1][1]) {
      return true;
    }
  }

  return false;
}
