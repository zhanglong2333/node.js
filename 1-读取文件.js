// 读取文件 readfile

// 先加载fs模块
let fs = require('fs');

// 读取文件
fs.readFile('./readFile.txt','utf-8',(err,data)=>{
    /**
     * 成功是data有数据，err为空
     * 失败时err对象不为空data为空
     */
    // 拿到的数据是二进制数据，需要转为16进制的
    // console.log(data.toString());
    console.log(data);
})