function isSorted(arr, i = 0) {
  if (i === arr.length - 1 || arr.length === 0) return true;

  if (arr[i] > arr[i + 1]) return false;
  return isSorted(i + 1, arr);
}
const res = [1, 2, 3, 4, 5];
console.log(isSorted(res));
