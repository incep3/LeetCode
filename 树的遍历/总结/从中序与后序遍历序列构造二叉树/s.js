/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    if (inorder.length === 0) {
        return null;
    }
    if (inorder.length === 1) {
        return new TreeNode(inorder[0]);
    }

    const head = new TreeNode(postorder[postorder.length - 1]);
    build(inorder, postorder, 0, inorder.length - 1, 0, postorder.length - 1, head);

    return head;
};

function build(inorder, postorder, i, j, m, n, head) {
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
        head.left = new TreeNode(postorder[inMid - 1 - i + m]);
        build(inorder, postorder, i, inMid - 1, m, inMid - 1 - i + m, head.left);
    }
    // 构建右子树
    if (inMid < j) {
        head.right = new TreeNode(postorder[n - 1]);
        build(inorder, postorder, inMid + 1, j, inMid - i + m, n - 1, head.right);
    }
}