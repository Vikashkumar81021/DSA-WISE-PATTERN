function smallestSubstring(s) {
  let cnt0 = 0,
    cnt1 = 0,
    cnt2 = 0;
  let set = new Set();
  let left = 0;
  let count = Infinity;
  for (let right = 0; right < s.length; right++) {
    if (s[right] === "0") {
      cnt0++;
    } else if (s[right] === "1") {
      cnt1++;
    } else {
      cnt2++;
    }
    //now check wiondow contain 0,1,2
    while (cnt0 > 0 && cnt1 > 0 && cnt2 > 0) {
      count = Math.min(count, right - left + 1);
      if (s[left] === "0") {
        cnt0--;
      } else if (s[left] === "1") {
        cnt1--;
      } else {
        cnt2--;
      }
      left++;
    }
  }
  if (count === Infinity) {
    return -1;
  } else {
    return count;
  }
}
