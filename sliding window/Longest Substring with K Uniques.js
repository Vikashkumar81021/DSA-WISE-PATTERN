function longestKSubstr(s, k) {
  let map = new Map();
  let low = 0,
    maxLen = -1;

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
    while (map.size > k) {
      map.set(s[low], map.get(s[low]) - 1);
      if (map.get(s[low]) === 0) {
        map.delete(s[low]);
      }
      low++;
    }
    if (map.size === k) {
      maxLen = Math.max(maxLen, i - low + 1);
    }
  }
  return maxLen;
}
console.log(longestKSubstr("aabacbebebe", 3));
