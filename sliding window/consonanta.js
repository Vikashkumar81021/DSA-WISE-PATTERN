function consonants(str, k) {
  let vowel = "aeiou";
  let count = 0;
  let maxCount = 0;
  let left = 0;
  for (let i = 0; i < str.length; i++) {
    if (!vowel.includes(str[i])) {
      count++;
    }
    if (i - left + 1 === k) {
      maxCount = Math.max(count, maxCount);
      if (!vowel.includes(str[left])) {
        count--;
      }
      left++;
    }
  }
  return maxCount;
}
