/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = {},
        output = [];

    let v;
    for (var i = 0, l = nums.length; i < l; i++) {
        v = nums[i];
        if (map.hasOwnProperty(target - v)) {
            output = [map[target - v], i];
            break;
        } else {
            map[v] = i;
        }
    }

    return output;
};

const ret = twoSum([2, 2, 7, 7, 11, 15], 9);
console.log(ret)