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
                if (y < n - 1 && !output[x][y + 1]) {
                    y++;
                    next = 0;
                } else {
                    direction = 'down';
                    next++;
                }
                break;
            case 'down':
                if (x < n - 1 && !output[x + 1][y]) {
                    x++;
                    next = 0;
                } else {
                    direction = 'left';
                    next++;
                }
                break;
            case 'left':
                if (y > 0 && !output[x][y - 1]) {
                    y--;
                    next = 0;
                } else {
                    direction = 'up';
                    next++;
                }
                break;
            case 'up':
                if (x > 0 && !output[x - 1][y]) {
                    x--;
                    next = 0;
                } else {
                    direction = 'right';
                    next++;
                }
                break;
        }
    }
    return output;
}

let out = generate(5);
out.forEach(v => {
    console.log(v)
})