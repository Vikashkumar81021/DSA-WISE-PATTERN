function merge(intervals) {
  let merge = [];
  intervals.sort((a, b) => a[0] - b[0]);
  // merge.push(intervals[0]);
  for (let i = 0; i < intervals.length; i++) {
    if (merge.length === 0) {
      merge.push(intervals[i]);
      continue;
    }
    let last = merge[merge.length - 1]; //PREVOIS END
    //CURRENT ELEMNT KA FIRST ELEMENT
    if (intervals[i][0] <= last[1]) {
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

// Previous interval        Current interval
//       [1------5]              [3------7]
//               ↑                ↑
//            last[1]          interval[0]

//               compare
//                  ↓

//         interval[0] <= last[1]
