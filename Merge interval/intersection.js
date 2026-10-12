function interSectionRange(firstList, secondList) {
  let res = [];
  let i = 0,
    j = 0;
  while (i < firstList.length && j < secondList.length) {
    // Math.max() bada starting point deta hai, kyunki common part dono ke start hone ke baad hi shuru hoga.
    let start = Math.max(firstList[i][0], secondList[j][0]);

    // Math.min() chhota ending point deta hai, kyunki common part us interval ke khatam hone ke baad continue nahi kar sakta jo pehle khatam hota ha
    let end = Math.min(firstList[i][1], secondList[j][1]);
    if (start <= end) {
      res.push([start, end]);
    }
    if (firstList[i][1] < secondList[j][1]) {
      i++;
    } else {
      j++;
    }
  }
  return res;
}
