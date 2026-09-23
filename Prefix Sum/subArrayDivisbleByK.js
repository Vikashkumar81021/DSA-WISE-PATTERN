function subArrayDivByK(arr, k) {
  let sum = 0,
    ans = 0;
  let map = new Map();
  map.set(0, 1);
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    let rem = sum % k;
    if (rem < 0) {
      rem += k;
    }
    if (map.has(rem)) {
      ans += map.get(map, (map.get(rem) || 0) + 1);
    }
  }
  return ans;
}
