let nums = [-4, -2, 0, 2, 4, 5];

//brute force
let isPresent = false;
for (let i = 0; i < nums.length; i++) {
  let sq = nums[i] * nums[i];
  if (nums.includes(sq)) {
    isPresent = true;
    break;
  }
}
console.log(isPresent);

//use hasmap
var checkSquare = function (nums) {
  let set = new Set(nums);

  for (let num of nums) {
    let sq = num * num;

    if (set.has(sq)) {
      return true;
    }
  }

  return false;
};
