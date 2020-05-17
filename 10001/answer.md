## 先声明输出，创建二位数组
``` 
let output = [];
for(let i=0;i<n;i++){
    output[i]=[];
}
```

## 遍历思路
right->down>left>up

## 解题思路
[minX,maxX]
[minY,minX]
定义了一个未填充的矩形区域

right:{minX,[minY,maxY-1]}
down:{[minX+1,maxX],maxY}
left:{}