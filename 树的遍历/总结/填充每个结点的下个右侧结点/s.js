/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (!root) return root

    deal(root.left, root.right)
    return root
}

function deal(left, right) {
    if (!left) return

    left.next = right
    deal(left.left, left.right)
    deal(left.right, right.left)
    deal(right.left, right.right)
}
