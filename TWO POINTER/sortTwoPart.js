function mergeTwoParts(arr) {
  // [2, 3, 8, -1, 7, 10]
  let breakPoint = -1;
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    if (arr[i] < arr[i - 1]) {
      breakPoint = i;
      break;
    }
  }
  if (breakPoint === -1) return arr;
  // [2, 3, 8, -1, 7, 10]
  //1.i        j
  let i = 0,
    j = breakPoint;
  let res = [];
  while (i < breakPoint && j < n) {
    if (arr[i] <= arr[j]) {
      res.push(arr[i]);
      i++;
    } else {
      res.push(arr[j]);
      j++;
    }
  }
  while (i < breakPoint) {
    res.push(arr[i]);
    i++;
  }
  while (j < n) {
    res.push(arr[j]);
    j++;
  }
  for (let k = 0; k < arr.length; k++) {
    arr[k] = res[k];
  }
  return arr;
}
