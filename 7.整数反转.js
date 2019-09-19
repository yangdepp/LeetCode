/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (31.96%)
 * Total Accepted:    95.7K
 * Total Submissions: 299.4K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 *
 * 示例 1:
 *
 * 输入: 123
 * 输出: 321
 *
 *
 * 示例 2:
 *
 * 输入: -123
 * 输出: -321
 *
 *
 * 示例 3:
 *
 * 输入: 120
 * 输出: 21
 *
 *
 * 注意:
 *
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 *
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  //  answer1这个if...else有点丑
  // if (x < 0) {
  //   x = x.toString().split('-')[1];
  //   x = '-' + [...x].reverse().join('')
  //   x = +x
  // } else {
  //   x = x.toString()
  //   x = +[...x].reverse().join('')
  // }
  // if (x >= Math.pow(2, 31) - 1 || x <= Math.pow(-2, 31) + 1) {
  //   return 0
  // }
  // return x

  // ---------------------------------------------
  // answer2
  // -120

  var isNegative = x < 0,
    result = 0;

  x = isNegative ? x * -1 : x;
  while (x !== 0) {
    result = result * 10 + (x % 10); //0,2,21

    x = Math.floor(x / 10); // 12,1,0

    if (result >= 2147483648) {
      return 0;
    }
  }

  return isNegative ? result * -1 : result;
};
