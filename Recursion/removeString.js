function removeChar(str, target, i = 0, res = "") {
  if (i === str.length) {
    return res;
  }

  if (str[i] === target) {
    return removeChar(str, target, i + 1, res);
  }

  return removeChar(str, target, i + 1, res + str[i]);
}

console.log(removeChar("banana", "a"));
