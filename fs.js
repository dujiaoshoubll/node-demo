const fs = require("fs");
// 写入文件
// fs.writeFile('./a.txt', 'blllll', err => {
//     if (err) {
//         console.log("失败", err);
//     } else {
//         console.log("成功");
//     }
// });
// 读取文件
fs.readFile('./a.txt',(err, data) => {
    if (err) {
        console.log("错误", err);
    } else {
        console.log("成功", data, data.toString());
    }
});
