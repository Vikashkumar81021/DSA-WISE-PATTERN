function occurence(arr, tar) {
  let low = 0,
    high = arr.length - 1,
    first = -1,
    last = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === tar) {
      first = mid;
      high = mid - 1;
    } else if (arr[mid] < tar) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  (low = 0), (high = arr.length - 1);
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === tar) {
      last = mid;

      low = mid + 1;
    } else if (arr[mid] < tar) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return [first, last];
}

let arr = [5, 7, 7, 8, 8, 10],
  target = 8;
console.log(occurence(arr, target));
