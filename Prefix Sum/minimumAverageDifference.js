var minimumAverageDifference = function (nums) {
  //bruteforce
  //     let leftSum=0

  //     let leftCount=0
  //     let min=Infinity
  //      let ans = 0
  //   for(let i=0;i<nums.length;i++){
  //     leftSum+=nums[i]
  //     leftCount++

  //      let avg = Math.floor(leftSum / leftCount)
  //      let rightSum=0
  //      let rightCount=nums.length-i-1
  //      for(let j=i+1;j<nums.length;j++){
  //         rightSum+=nums[j]
  //      }

  //         let rightAvg = rightCount === 0
  //             ? 0
  //             : Math.floor(rightSum / rightCount)
  //      let diff=Math.abs(avg-rightAvg)
  //      if (diff < min) {
  //             min = diff
  //             ans = i
  //         }
  //   }
  //   return ans
  //1+2+3
  let totalSum = 0; //6

  for (let num of nums) {
    totalSum += num;
  }

  let leftSum = 0;
  let min = Infinity;
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    //1
    leftSum += nums[i];
    //1
    let leftCount = i + 1;
    //1
    let avg = Math.floor(leftSum / leftCount);
    //6-1=5
    let rightSum = totalSum - leftSum;
    let rightCount = nums.length - i - 1;

    let rightAvg = rightCount === 0 ? 0 : Math.floor(rightSum / rightCount);

    let diff = Math.abs(avg - rightAvg);

    if (diff < min) {
      min = diff;
      ans = i;
    }
  }

  return ans;
};
