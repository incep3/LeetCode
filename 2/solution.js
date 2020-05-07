
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let output,
        carry = 0;

    let val1, val2, val, l;
    while (l1 || l2) {
        val1 = l1 ? l1.val : 0;
        val2 = l2 ? l2.val : 0;

        val = val1 + val2 + carry;

        if (!output) {
            l = output = new ListNode(Math.floor(val % 10))
        } else {
            l.next = new ListNode(Math.floor(val % 10));
            l = l.next;
        }
        carry = Math.floor(val / 10);

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    if (up > 0) {
        l.next = new ListNode(up);
    }

    return output;
};

const output = addTwoNumbers([2, 4, 3],
    [5, 6, 4]);
console.log(output);