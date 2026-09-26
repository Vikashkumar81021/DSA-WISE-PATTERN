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
var nums = [0, 1, 0, 3, 12];

// console.log(moveZeroes(nums));

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

let array = [1, 0, 2, 0, 3, 4];
let index = 0;
let zero = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] === 0) {
    zero++;
  } else {
    array[index] = array[i];
    index++;
  }
}
for (let i = array.length - zero; i < array.length; i++) {
  array[i] = 0;
}
console.log("Array", array);
