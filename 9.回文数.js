/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 *
 * https://leetcode-cn.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (56.01%)
 * Total Accepted:    85.6K
 * Total Submissions: 152.6K
 * Testcase Example:  '121'
 *
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 *
 * 示例 1:
 *
 * 输入: 121
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 *
 *
 * 示例 3:
 *
 * 输入: 10
 * 输出: false
 * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 *
 *
 * 进阶:
 *
 * 你能不将整数转为字符串来解决这个问题吗？
 *
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  //  这个也是有点丑，我就要转换成字符串
  //  后续优化
  // if (x < 0) {
  //   return false
  // } else if (x === 0) {
  //   return true
  // } else {
  //   let tempX = x.toString()
  //   tempx = +tempX.split('').reverse().join('')
  //   return tempx === x
  // }
  if (x < 0) {
    return false;
  } else if (x === 0) {
    return true;
  } else if (x % 10 === 0) {
    return false;
  }

  var reversed = 0;
  while (x > reversed) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return x === reversed || x === Math.floor(reversed / 10);
};
