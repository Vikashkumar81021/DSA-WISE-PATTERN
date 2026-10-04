function merge(intervals) {
  let merge = [];
  intervals.sort((a, b) => a[0] - b[0]);
  // merge.push(intervals[0]);
  for (let i = 1; i < intervals.length; i++) {
    if (merge.length === 0) {
      merge.push(intervals[i]);
      continue;
    }
    let last = merge[merge.length - 1];
    if (merge[i][0] <= last[1]) {
      last[1] = Math.max(last[1], intervals[i][1]);
    } else {
      merge.push(intervals[i]);
    }
  }
  return merge;
}

let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(merge(intervals));
