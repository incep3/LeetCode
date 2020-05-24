/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
    return testHasPathSum(root, 0, sum);
};

function testHasPathSum(node, total, sum) {
    if (node === null) {
        return false;
    }

    const now = total + node.val;
    if (!node.left && !node.right) {
        return now === sum
    }

    return testHasPathSum(node.left, now, sum)
        || testHasPathSum(node.right, now, sum);
}