var fs = require('fs')

////读文件
//var readerStream = fs.createReadStream('uploadsFIle/output.txt');
//var data = '';
//// 设置编码为 utf8。
//readerStream.setEncoding('UTF8');
//
//// 处理流事件 --> data, end, and error
//readerStream.on('data', function(chunk) {
// data += chunk;
//});
//
//readerStream.on('end',function(){
// console.log(data);
//});
//
//
//
////写文件
//var data = '<p>我是一个兵</p>';
//
//// 创建一个可以写入的流，写入到文件 output.txt 中
//var writerStream = fs.createWriteStream('uploadsFIle/output.txt');
//
//// 使用 utf8 编码写入数据
//writerStream.write(data,'UTF8');
//
//// 标记文件末尾
//writerStream.end();



//管道流
// 创建一个可读流
var readerStream = fs.createReadStream('http://i.meizitu.net/2017/06/27a57.jpg');

// 创建一个可写流
var writerStream = fs.createWriteStream('uploadsFIle/meizi.png');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中

//只比读写流多了这句代码就可以实现复制功能!!
readerStream.pipe(writerStream);

console.log("程序执行完毕");