/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val
 *     this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    const output = [],
        stack = []

    let node = null

    stack.push(root)
    while (stack.length > 0) {
        node = stack.pop()
        if (node instanceof TreeNode) {
            stack.push(node.right)
            stack.push(node.val)
            stack.push(node.left)
        } else {
            if (node === null) {
                continue
            }
            output.push(node)
        }
    }
    return output
}