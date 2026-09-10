var moveZeroes = function (nums) {
  let res = 0;
  let left = 0;

  while (left < nums.length) {
    if (nums[left] !== 0) {
      nums[res] = nums[left];
      res++;
    }

    left++;
  }

  for (let i = res; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
};

var moveZeroes = function (nums) {
  let slow = 0;

  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      slow++;
    }
  }

  return nums;
};
