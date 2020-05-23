/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
let preorderTraversal = function (root) {
    const output = [],
        stack = [];

    let node = null;

    stack.push(root);
    while (stack.length > 0) {
        node = stack.pop();
        if (node) {
            output.push(node.val);
            stack.push(node.right)
            stack.push(node.left)
        }
    }
    return output;
};
