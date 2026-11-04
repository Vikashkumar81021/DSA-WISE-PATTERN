let res = [];
function CombinationSum(arr, target, total, curr, i = 0) {
  if (total === target) {
    res.push([...curr]);
    return;
  }

  if (i >= arr.length || total > target) {
    return;
  }
  curr.push(arr[i]);
  CombinationSum(arr, target, total + arr[i], curr, i);
  curr.pop();
  CombinationSum(arr, target, total + arr[i], curr, i + 1);
}
