let fs = require('fs');
// 写入文件
fs.writeFile('./writeFile.txt',"It's my writeFile",(err,data)=>{
    console.log('写入成功');
});


fs.readFile('./writeFile.txt','utf-8',(err,data)=>{
    if (err) {
        console.log('文件读取失败');
    }else{
        console.log('读取成功',data);
    }
})
