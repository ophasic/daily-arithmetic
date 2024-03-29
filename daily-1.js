/**
 * 题目描述
 * 在一个长度为 n 的数组里的所有数字都在 0 到 n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字是重复的，也不知道每个数字重复几次。请找出数组中任意一个重复的数字。
 * Input:
 * {2, 3, 1, 0, 2, 5}
 * Output:
 * 2
 */

 function duplicate (nums) {
    if (nums === null || nums.length <= 0) {
        return false;
    }

    for(let i = 0; i < nums.length; i++) {
        while (nums[i] != i) {
            if (nums[i] == nums[nums[i]]) {
                console.log(nums)
                return nums[i];
            }
            swap(nums, i, nums[i]);
        }
    }
    return false;
 }

 function swap (nums, i, j) {
    const t = nums[i];
    nums[i] = nums[j];
    nums[j] = t;
 }

 console.log(duplicate([2, 3, 1, 0, 4, 3]))