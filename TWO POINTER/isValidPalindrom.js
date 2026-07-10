function isValid(str) {
  const clean = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let start = 0,
    end = clean.length - 1;
  while (start < end) {
    if (clean[start] !== clean[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

let s = "A man, a plan, a canal: Panama";
const res = isValid(s);
if (res) {
  console.log("this is palindrome");
} else {
  console.log("this is not palindrome");
}
