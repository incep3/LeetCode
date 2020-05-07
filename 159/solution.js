/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function (s) {
    let [first, second, p1, p2] = ['', '', -1, -1];
    let [max, len, left, right] = [0, 0, 0, 0];

    let char;
    for (var i = 0, l = s.length; i < l; i++) {
        char = s.charAt(i);

        if (char != first && char != second) {
            if (first == '' || second == '') {
                if (first == '') {
                    first = char;
                    p1 = i;
                } else {
                    second = char;
                    p2 = i;
                }
                max = i + 1;
                right = i;
                continue;
            }
            max = Math.max(max, right - left + 1);

            if (p1 <= p2) {
                left = p1 + 1;
                first = char;
                p1 = i;
            } else {
                left = p2 + 1;
                second = char;
                p2 = i;
            }
        } else {
            if (i === l - 1) {
                max = Math.max(max, i - left + 1);
            }

            if (char == first) {
                p1 = i;
            } else {
                p2 = i
            }
        }
        right = i;
    }
    return max;
};