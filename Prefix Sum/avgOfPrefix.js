function avgPrefix(arr) {
  let prefix = [];
  prefix[0] = arr[0];

  let sum = arr[0];
  count = 1;
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
    count = count + 1;
    let avg = sum / count;
    prefix.push(Math.floor(avg));
  }
  return prefix;
}
