function removeTarget(arr, target, i = 0, res = []) {
  if (i === arr.length) {
    return res;
  }
  if (arr[i] !== target) {
    res.push(arr[i]);
  }

  return removeTarget(arr, target, i + 1, res);
}
console.log(removeTarget([2, 5, 2, 8, 2, 9], 2));
