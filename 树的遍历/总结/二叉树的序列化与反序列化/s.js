/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    const output = []

    const queue = []

    queue.push(root)

    let node
    while (queue.length > 0) {
        node = queue.shift()
        output.push(node ? node.val : null)
        if (node) {
            queue.push(node.left)
            queue.push(node.right)
        }
    }

    for (let i = output.length - 1; i >= 0; i--) {
        if (output[i] === null) {
            output.pop()
        } else {
            break
        }
    }
    return JSON.stringify(output)
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    let root,
        input,
        queue = []

    try {
        input = JSON.parse(data)
    } catch (e) {
        return null
    }

    if (!Array.isArray(input) || input.length === 0) {
        return null
    }

    let val = input.shift()
    let node

    root = node = val === null ? null : new TreeNode(val)

    if (!root) {
        return null
    }

    queue.push(root)
    let curr = 'left'
    let newNode
    while (input.length > 0) {
        if (curr === 'left' && queue.length > 0) {
            node = queue.shift()
        }
        val = input.shift()
        newNode = val === null ? null : new TreeNode(val)
        if (curr == 'left') {
            node.left = newNode
            curr = 'right'
        } else {
            node.right = newNode
            curr = 'left'
        }
        if (newNode) {
            queue.push(newNode)
        }
    }

    return root
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
