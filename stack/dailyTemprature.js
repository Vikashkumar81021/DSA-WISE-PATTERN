//BRUTE FORCE
function dailyTempratures(temp) {
  let ans = new Array(temp.length).fill(0);
  for (let i = 0; i < temp.length; i++) {
    for (let j = i + 1; j < temp.length; j++) {
      if (temp[j] > temp[i]) {
        ans = j - i;
        break;
      }
    }
  }
  return ans;
}
