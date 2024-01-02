/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (target < nums[0]) return 0;
  else if (target > nums[nums.length - 1]) return nums.length;
  let l = 0;
  let h = nums.length - 1;
  let mid;
  while (l <= h) {
    mid = Math.floor((l + h) / 2);
    if (target == nums[mid]) return mid;
    else if (target < nums[mid]) h = mid - 1;
    else l = mid + 1;
  }
  return l;
};
