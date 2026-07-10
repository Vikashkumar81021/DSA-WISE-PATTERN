let arr = [1, 1, 2, 2, 3, 3, 4],
  target = 5;
let res = [];
let start = 0,
  end = arr.length - 1;
while (start < end) {
  if (arr[start] + arr[end] == target) {
    res.push(arr[start], arr[end]);
    start++;
    end--;
    while (arr[start] === arr[start + 1]) {
      start++;
    }
    while (arr[end] === arr[end + 1]) {
      end--;
    }
  } else if (arr[start] + arr[end] < target) {
    start++;
  } else {
    end--;
  }
}

console.log(res);
