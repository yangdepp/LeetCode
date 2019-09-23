/*
 * @lc app=leetcode.cn id=27 lang=java
 *
 * [27] 移除元素
 * [3223] 3
 */
class Solution {
    public int removeElement(int[] nums, int val) {
        int i = 0;
        for (int j = 0; j < nums.length; j++) {
            if (nums[j] != val) {
                nums[i] = nums[j];
                i++;
            }
        }
        return i;
    }
}
