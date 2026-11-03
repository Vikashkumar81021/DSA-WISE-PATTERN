function flatten(arr, i = 0, res = []) {
  if (i === arr.length) return res;

  if (Array.isArray(arr[i])) {
    flatten(arr[i], 0, res);
  } else {
    res.push(arr[i]);
  }

  return flatten(arr, i + 1, res);
}

console.log(flatten([1, [2, 3], [4, [5, 6]]]));
