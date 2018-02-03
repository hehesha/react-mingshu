//使用express框架，get,post，链接服务器

//框架
var express = require('express');
var app = express();
//链接数据库模块
var mysql = require("mysql");

//连接服务器配置.......................................................................
function createConnection() {
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'homestay'
	});
	return connection
}

//设置静态文件 app.js根目录下寻找public文件夹作为静态文件夹
//pulic文件夹要自己创建，在下面设置路径,放在里面的html文件...带后缀的文件，就可以通过该服务器访问这些文件。
app.use(express.static('public'));
// parse application/json 

//get请求.................................................................................




//增加
app.get('/insert', function(req, res) {
	//  解决跨域
	res.append("Access-Control-Allow-Origin", "*")
	//然后请求的很快的时候才能正常关闭链接、
	var connection = createConnection();
	connection.connect();
	//引入插入模块	
	require('./router/insert').insert(req,res,connection)
	console.log(req.query)
})


//删除
app.get('/delSelf', function(req, res) {
	//  解决跨域
	res.append("Access-Control-Allow-Origin", "*")
	//然后请求的很快的时候才能正常关闭链接、
	var connection = createConnection();
	connection.connect();
	//引入删除模块
	require('./router/del').delSelf(req,res,connection);
	console.log(req.query)
})	



//查找
app.get('/select', function(req, res) {
	//  解决跨域
	res.append("Access-Control-Allow-Origin", "*")
	//然后请求的很快的时候才能正常关闭链接、
	var connection = createConnection();
	connection.connect();
	//引入查找模块
	require('./router/select').select(req,res,connection);
	console.log(req.query)
})	
//获取所有
app.get('/selectAll', function(req, res) {
	//  解决跨域
	res.append("Access-Control-Allow-Origin", "*")
	//然后请求的很快的时候才能正常关闭链接、
	var connection = createConnection();
	connection.connect();
	//引入查找模块
	require('./router/select').selectAll(req,res,connection);
	console.log(req.query)
})	




//修改
app.get('/update', function(req, res) {
	//  解决跨域
	res.append("Access-Control-Allow-Origin", "*")
	//然后请求的很快的时候才能正常关闭链接、
	var connection = createConnection();
	connection.connect();
	//引入查找模块
	require('./router/update').update(req,res,connection);
	console.log(req.query)
})	
	
	


	



//要post请求...............................................................................
// parse application/x-www-form-urlencoded 
//使用bodyParser模块
//用于post请求获取参数
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
	extended: false
}))

//普通post请求
app.post('/home', function(req, res) {
	res.append("Access-Control-Allow-Origin", "*")
	res.send('进入到post/home页面');
	connection.end();
	console.log(req.body)
})



//上传图片，对htmlajax请求有要求,写法参照html中的上传文件和图片.................................

var upload = require('./router/uploads').uploads();

			//路由名			
app.post('/upload-single', upload.any(), function(req, res, next) {	
	res.append("Access-Control-Allow-Origin","*");
	//返回上传的图片的命名
	res.send(require('./router/uploads').picName);
});










//长连接websocket




//fs 读写文件   
//不需要连接服务器也能读取写入
var fs = require("fs"); //文件系统
app.get('/readFile', function(req, res) {
	res.append('Access-Control-Allow-Origin', "*");
					//路径               文件内容
	fs.readFile('./使用方法.txt', (err, data) => {
		if(err) throw err;
		//把缓冲流(数据)转化为字符串
		//请求一定要有res.send输出，不然会请求失败
		res.send(data.toString())
		console.log(data.toString());
	});

})
//写入文件
//不需要连接服务器也能读取写入
var fs = require("fs"); //文件系统
app.get('/writeFile', function(req, res) {
	res.append('Access-Control-Allow-Origin', "*");
	console.log(11111)
	//请求一定要有res.send输出，不然会请求失败
				//写入的文件路径    写入的内容，会覆盖之前的内容，通常先read再write
	fs.writeFile('input.txt', req.query.name, (err) => {
		if(err) throw err;
		console.log('写入成功');
	});

})



//读写流写入文件
//流的方式读取文件，最根本的读写方式，可以读取大文件，一边读一边加载。
//读写流   // 创建可读流
//管道流	好像把一个地方的东西复制黏贴到另一个地方
//链式流(压缩文件)
//https://www.w3cschool.cn/nodejs/nodejs-stream.html



//fs管道流 复制文件，下载文件



//监听该端口..............................................................................
var server = app.listen(3000, function() {
	//测试
	//测试
	var host = server.address().address
	var port = server.address().port
	console.log("应用实例，访问地址为 http://%s:%s", host, port)
})