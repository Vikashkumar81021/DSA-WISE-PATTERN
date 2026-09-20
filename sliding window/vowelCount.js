function countVowel(str, k) {
  let vowel = "aeiou";
  let count = 0;
  let maxCount = 0;
  let left = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowel.includes(str[i])) {
      count++;
    }
    if (i - left + 1 === k) {
      maxCount = Math.max(maxCount, count);

      if (vowel.includes(str[left])) {
        count--;
      }

      left++;
    }
  }

  return maxCount;
}

console.log(countVowel("abciiidef", 3));
