/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {
    if (matrix.length === 0) {
        return [];
    }

    let output = [];

    const m = matrix.length,
        n = matrix[0].length,
        l = Math.max(m, n);

    let x = 0,
        y = 0,
        direction = 'up';

    while (x < m && y < n) {
        output.push(matrix[x][y]);
        if (direction === 'down') {
            if (y === 0 || x === m - 1) {
                direction = 'up';
                if (x === m - 1) { y++ } else { x++ }
            } else {
                x++;
                y--;
            }
        } else {
            if (x === 0 || y === n - 1) {
                direction = 'down';
                if (y === n - 1) { x++ } else { y++ }
            } else {
                x--;
                y++;
            }
        }
    }

    return output;
};

