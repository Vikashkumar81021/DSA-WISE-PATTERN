function reversePointer(arr, left = 0, right = arr.length - 1) {
  if (left >= right) {
    return;
  }
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;

  return reversePointer(arr, left + 1, right - 1);
}
const ar = [1, 2, 3, 4, 5];
reversePointer(ar);
console.log(ar);
