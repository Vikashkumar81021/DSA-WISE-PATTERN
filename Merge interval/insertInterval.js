function insertInterval(intervals, newInterval) {
  let res = [];
  intervals.push(newInterval);
  intervals.sort((a, b) => a[0] - b[0]);
  res.push(intervals[0]);
  for (let i = 1; i < intervals.length; i++) {
    let last = res[res.length - 1];
    if (intervals[i][0] <= last[1]) {
      last[1] = Math.max(last[1], intervals[i][1]);
    } else {
      res.push(intervals[i]);
    }
  }
  return res;
}
let intervals = [
  [1, 3],
  [4, 5],
  [6, 7],
  [8, 10],
];
newInterval = [5, 6];
console.log(insertInterval(intervals, newInterval));
