/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (root == null) {
        return [];
    }

    let output = [],
        queue = [],
        next = [],
        temp,
        node,
        l = 0


    output[l] = []
    queue.push(root);

    while (queue.length > 0) {
        node = queue.shift();
        if (node) {
            output[l].push(node.val)
            if (node.left) next.push(node.left)
            if (node.right) next.push(node.right)
        }
        if (queue.length == 0) {
            temp = queue
            queue = next
            next = temp
            if (queue.length > 0) {
                output[++l] = []
            }
        }
    }
    return output
};