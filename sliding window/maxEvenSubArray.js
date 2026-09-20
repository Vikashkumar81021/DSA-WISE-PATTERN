function maxEvenNumArray(arr, k) {
  let max = 0,
    count = 0,
    left = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
    if (i - left + 1 === k) {
      // 3. Answer update
      max = Math.max(count, max);

      // 4. Old element remove
      if (arr[left] % 2 === 0) {
        count--;
      }

      // 5. Window slide
      left++;
    }
  }
}
