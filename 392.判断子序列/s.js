/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (s.length === 0) {
        return true;
    } else if (t.length === 0) {
        return false
    }
    const l1 = s.length,
        l2 = t.length;

    let i = 0,
        j = 0;

    while (i < l1 && j < l2) {
        if (s.charAt(i) === t.charAt(j)) {
            i++;
            j++;
        } else {
            j++;
        }
    }
    return i === l1;
};