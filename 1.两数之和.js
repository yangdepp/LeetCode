/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 *
 * https://leetcode-cn.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (45.33%)
 * Total Accepted:    285.8K
 * Total Submissions: 630.4K
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * 
 * 示例:
 * 
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  if (nums.length <= 1) {
    return false;
  }
  //  answer1 暴力双层循环
  // let arr1 = [];
  // for (let i1 = 0; i1 < nums.length; i1++) {
  //   for (let j1 = i1 + 1; j1 < nums.length; j1++) {
  //     if (nums[i1] + nums[j1] === target) {
  //       arr1 = [i1, j1];
  //       break;
  //     }
  //   }
  // }
  // return arr1

  //  --------------------------------------------------

  //  answer2 用indexOf优化代码
  // let a, b;
  // for (let i2 = 0; i2 < nums.length; i2++) {
  //   b = nums.indexOf(target - nums[i2]);
  //   if (b != -1 && b != i2) {
  //     a = i2
  //     break;
  //   }
  // }
  // return [a, b]

  //  --------------------------------------------------

  //  answer3用对象
  // let temObj = {};
  // nums.forEach((item, index) => {
  //   temObj[item] = index;
  // })

  // for (let i = 0; i < nums.length; i++) {
  //   let j = temObj[target - nums[i]]
  //   if (j && j != i) {
  //     return [i, j]
  //   }
  // }

  //  --------------------------------------------------

  //answer4用对象的简洁写法
  // let len = nums.length;
  // let obj = {};
  // for (let i = 0; i < len; i++) {
  //   if (nums[i] in obj) {
  //     return [obj[nums[i]], i]
  //   } else {
  //     obj[target - nums[i]] = i;
  //   }
  // }

  //  --------------------------------------------------

  //  用map
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i]
    } else {
      map.set((target - nums[i]), i);
    }
  }

};
