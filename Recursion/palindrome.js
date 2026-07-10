function palindrome(str, left = 0, right = str.length - 1) {
  // if (str.length === 1) {
  //   return true;
  // }
  // if (str.length === 0) {
  //   return true;
  // }
  if (str.length == 0 || str.length === 1) {
    return true;
  }
  if (left >= right) {
    return true;
  }

  if (str[left] !== str[right]) {
    return false;
  }
  return palindrome(str, left + 1, right - 1);
}
const str = "naman";
console.log(palindrome(str));
