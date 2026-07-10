function search(arr, x, i = 0) {
  if (i > arr.length - 1) {
    return -i;
  }
  if (arr[i] === x) {
    return i;
  }
  return search(arr, x, i + 1);
}
