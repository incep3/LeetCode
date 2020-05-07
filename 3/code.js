function lengthOfLongestSubstring(s) {
    const arr = s.split('');
    let map = {};

    let [max, len, left, right] = [0, 0, 0, 0];

    arr.forEach((v, i) => {
        if (map.hasOwnProperty(v)) {
            console.log(arr.slice(left, right + 1).join(''));

            len = right - left + 1;
            max = Math.max(max, len);

            let newleft = map[v];
            for (let n = left; n < newleft; n++) {
                delete map[arr[n]];
            }
            left = newleft + 1;
        }
        else {
            if (i === arr.length - 1) {
                max = Math.max(max, i - left + 1)
            }
        }
        map[v] = i;
        right = i;
    })
    return max;
}

const output = lengthOfLongestSubstring(' ');
console.log(output);