function generate(n) {
    // 检查输入合法性
    if (typeof n !== 'number' || n < 1) {
        throw new Error('invalid input');
    }
    n = Math.floor(n);

    let output = [],

        x = 0,
        y = 0,

        value = 1,

        minX = 0,
        maxX = n - 1,
        minY = 0,
        maxY = n - 1,

        direction = 'right';

    // js没有二维数组，初始化二位数组
    for (let i = 0; i < n; i++) {
        output[i] = [];
    }

    let next = 0;
    while (next < 2) {
        if (next === 0) {
            output[x][y] = value;
            value++;
        }
        switch (direction) {
            case 'right':
                if (y < maxY) {
                    y++;
                    next = 0;
                } else {
                    direction = 'down';
                    minX++;
                    next++;
                }
                break;
            case 'down':
                if (x < maxX) {
                    x++;
                    next = 0;
                } else {
                    direction = 'left';
                    maxY--;
                    next++;
                }
                break;
            case 'left':
                if (y > minY) {
                    y--;
                    next = 0;
                } else {
                    direction = 'up';
                    maxX--;
                    next++;
                }
                break;
            case 'up':
                if (x > minX) {
                    x--;
                    next = 0;
                } else {
                    direction = 'right';
                    minY++;
                    next++;
                }
                break;
        }
    }
    return output;
}

let out = generate(6);
out.forEach(v => {
    console.log(v)
})