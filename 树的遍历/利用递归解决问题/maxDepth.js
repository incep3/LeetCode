/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let output = 0
var maxDepth = function (root) {
    output = 0
    calcDepth(root, 1)
    return output

};
function calcDepth(node, depth) {
    if (node === null) {
        return
    }

    if (!node.left && !node.right) {
        output = Math.max(output, depth)
    } else {
        calcDepth(node.left, depth + 1)
        calcDepth(node.right, depth + 1)
    }
}