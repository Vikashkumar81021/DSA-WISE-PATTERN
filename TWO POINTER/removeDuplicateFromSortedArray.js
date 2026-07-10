function removeDuplicate(arr) {
  let i = 0,
    j = 1;
  let uniqueElements = 1;
  while (j < arr.length) {
    if (arr[j] === arr[j - 1]) {
      j++;
    } else {
      arr[i + 1] = arr[j];
      uniqueElements++;
      i++;
      j++;
    }
  }
  return uniqueElements;
}
let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicate(arr));
