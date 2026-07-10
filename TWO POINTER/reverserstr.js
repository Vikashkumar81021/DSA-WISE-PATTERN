function rev(str) {
  let arr = str.split("");
  let start = 0,
    end = str.length - 1;
  while (start < end) {
    let res = arr[start];
    arr[start] = arr[end];
    arr[end] = res;
    start++;
    end--;
  }
  return arr.join("");
}
console.log(rev("hello"));
