function findAllOccurrences(arr, target, i = 0, result = []) {
  if (i === arr.length) return result;

  if (arr[i] === target) {
    result.push(i);
  }

  return findAllOccurrences(arr, target, i + 1, result);
}

console.log(findAllOccurrences([4, 7, 9, 7, 2, 7], 7));
