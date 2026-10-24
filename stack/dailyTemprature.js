function dailyTempratures(temperatures) {
  let stack = [];
  let res = new Array(temperatures.length).fill(-1);
  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length > 0 && temperatures[i] >= stack[stack.length - 1]) {
      stack.pop();
    }
    if (stack.length > 0) {
      res[i] = stack[stack.length - 1] - i;
    }
    stack.push(i);
  }
  return res;
}

//BRUTE FORCE
// function dailyTempratures(temp) {
//   let ans = new Array(temp.length).fill(0);
//   for (let i = 0; i < temp.length; i++) {
//     for (let j = i + 1; j < temp.length; j++) {
//       if (temp[j] > temp[i]) {
//         ans = j - i;
//         break;
//       }
//     }
//   }
//   return ans;
// }
