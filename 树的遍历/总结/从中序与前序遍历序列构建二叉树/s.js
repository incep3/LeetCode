/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (inorder.length === 0) {
        return null;
    }
    if (inorder.length === 1) {
        return new TreeNode(inorder[0]);
    }

    const head = new TreeNode(preorder[0]);
    build(inorder, preorder, 0, inorder.length - 1, 0, preorder.length - 1, head);

    return head;
};

function build(inorder, preorder, i, j, m, n, head) {
    if (i >= j) {
        return
    }
    let inMid;
    // 找到inorder中头结点位置
    for (let start = i; start <= j; start++) {
        if (inorder[start] === head.val) {
            inMid = start;
            break;
        }
    }

    // inorder被分成三部分 [i,inMid-1] 左子树  inMid:头结点 [inMid+1,j] 右子树

    // 构建左子树
    if (i < inMid) {
        head.left = new TreeNode(preorder[m + 1]);
        build(inorder, preorder, i, inMid - 1, m + 1, m + inMid - i, head.left);
    }
    // 构建右子树
    if (inMid < j) {
        head.right = new TreeNode(preorder[m + inMid - i + 1]);
        build(inorder, preorder, inMid + 1, j, m + inMid - i + 1, n, head.right);
    }
}