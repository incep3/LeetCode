/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root) {
        return true;
    }

    return compare(root.left, root.right);
};

function compare(left, right) {
    if (!left && !right) {
        return true;
    } else if (!left || !right) {
        return false;
    }

    return left.val === right.val && compare(left.left, right.right) && compare(left.right, right.left);
}