/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
  let b, bLeft, bRight;
  if (s.val === t.val) {
    b = compareTree(s, t);
    if (b) return true;
  }

  if (s.left) {
    bLeft = isSubtree(s.left, t);
  } else {
    bLeft = false;
  }
  if (bLeft) return true;

  if (s.right) {
    bRight = isSubtree(s.right, t);
  } else {
    bRight = false;
  }
  if (bRight) return true;

  return false;
};

var compareTree = function (s, t) {
  if (s.val != t.val) return false;

  let bLeft, bRight;

  if (s.left && t.left) {
    bLeft = compareTree(s.left, t.left);
  } else if (!s.left && !t.left) {
    bLeft = true;
  } else {
    return false;
  }

  if (s.right && t.right) {
    bRight = compareTree(s.right, t.right);
  } else if (!s.right && !t.right) {
    bRight = true;
  } else {
    return false;
  }

  return bLeft && bRight;
};
