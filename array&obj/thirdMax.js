var thirdMax = function (nums) {
  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === first || nums[i] === second || nums[i] === third) {
      continue;
    }
    if (nums[i] > first) {
      third = second;
      second = first;
      first = nums[i];
    } else if (nums[i] > second && nums[i] !== first) {
      third = second;
      second = nums[i];
    } else if (nums[i] > third && nums[i] !== second && nums[i] !== first) {
      third = nums[i];
    }
  }
  if (third === -Infinity) {
    return first;
  } else {
    return third;
  }
};
