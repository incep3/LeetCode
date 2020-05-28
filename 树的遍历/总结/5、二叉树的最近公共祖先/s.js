/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    // 深度优先搜索

    let output, pStack, qStack
    const stack = [], // 父节点序列，第一个节点为根节点  向下搜索压栈，向上则出栈
        map = new Map() // 访问过的节点

    let node = root
    stack.push(node)
    map.set(node, true)

    // p、q父节点序列都构造完成
    while (!pStack || !qStack) {
        // 找到p的父节点序列
        if (node === p && !pStack) {
            pStack = stack.concat()
        }
        // 找到q的父节点序列
        if (node === q && !qStack) {
            qStack = stack.concat()
        }

        if (node.left && !map.has(node.left)) {
            node = node.left
            stack.push(node)
            map.set(node, true)
        } else if (node.right && !map.has(node.right)) {
            node = node.right
            stack.push(node)
            map.set(node, true)
        } else {
            stack.pop()
            node = stack[stack.length - 1]
        }
    }

    const l = Math.min(pStack.length, qStack.length)
    for (let i = 0; i < l; i++) {
        if (pStack[i] != qStack[i]) {
            return pStack[i - 1]
        }
    }
    return pStack.length > qStack.length ? qStack[qStack.length - 1] : pStack[pStack.length - 1]
}
