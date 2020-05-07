/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let a = [];
  for (let i = 0; i < numRows; i++) {
    a[i] = [];
  }

  let t = s.split("");

  let x = -1,
    xAdd = true,
    y = 0;

  t.forEach((v) => {
    // 计算x坐标
    if (xAdd) {
      x++;
      if (x === numRows - 1) {
        xAdd = false;
      }
    } else {
      if (x > 0) {
        x--;
        if (x === 0) {
          xAdd = true;
        }
      }
      y++;
    }
    a[x][y] = v;
  });

  let output = [];
  for (let n = 0; n < numRows; n++) {
    output = output.concat(a[n].filter((v) => v != null));
  }
  return output.join("");
};

//===========test=========
console.log(convert("AB", 1));
