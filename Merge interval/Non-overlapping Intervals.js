// function NonoverlappingIntervals(intervals) {
//   intervals.sort((a, b) => a[0] - b[0]);
//   let count = 0;
//   let merge = [];
//   merge.push(intervals[0]);
//   for (let i = 1; i < intervals.length; i++) {
//     let last = merge[merge.length - 1];
//     if (intervals[i][0] <= last[1]) {
//       count++;
//     }
//   }
// }
