/*
 * @lc app=leetcode.cn id=9 lang=java
 *
 * [9] 回文数
 */
class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0) {
            return false;
        } else if (x == 0) {
            return true;
        } else if (x % 10 == 0) {
            return false;
        }
        int reversed = 0;
        // 这个判断还是比较巧妙，只需要判定数字长度的一半
        while (x > reversed) {
            reversed = reversed * 10 + x % 10; // 1
            x /= 10; // 0
        }
        return (x == reversed || x == reversed / 10);
    }
}
