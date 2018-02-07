var express = require('express');
var app = express();
//链接数据库模块
var mysql = require("mysql");


//连接服务器配置.......................................................................
function createConnection() {
	var connection = mysql.createConnection({
		host: '10.3.136.153',//127.0.0.1
		user: 'root',
		password: '',
		database: 'homestay'
	});
	return connection
}
//解决跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
   	res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    next();
});

app.use(express.static('public'));
// parse application/json 

//get请求.................................................................................
//删除homestary里面的民宿信息
app.get('/delethomestray', function(req, res) {
	
	var connection = createConnection();
	connection.connect();
	//引入查找模块
	require('./router/del').delSelf(req,res,connection);
	console.log(req.query)
})	
//删除checkhomestay里面的民宿信息
app.get('/deletcheck', function(req, res) {
	
	var connection = createConnection();
	connection.connect();
	//引入查找模块
	require('./router/del').delCheck(req,res,connection);
	console.log(req.query)
})	
//增加审核过关的民宿信息
app.get('/insertcheck', function(req, res) {
	
	var connection = createConnection();
	connection.connect();
	//引入插入模块	
	require('./router/insert').insert(req,res,connection)
	console.log(req.query)
})


//增加
app.get('/insert', function(req, res) {
	
	var connection = createConnection();
	connection.connect();
	//引入插入模块	
	require('./router/insert').insert(req,res,connection)
	console.log(req.query)
})

//分页获取前端页面的商品数据
app.get('/selectpage', function(req, res) {
	
	var connection = createConnection();
	connection.connect();
	//引入查找模块
	require('./router/select').selectPage(req,res,connection);
	console.log(req.query)
})	
	
//获取所有前端页面的商品数据
app.get('/selectAll', function(req, res) {
	
	var connection = createConnection();
	connection.connect();
	//引入查找模块
	require('./router/select').selectAll(req,res,connection);
	console.log(req.query)
})	
//查找所有travel里面的东西
app.get('/selectTravel', function(req, res) {
	//  解决跨域

	//然后请求的很快的时候才能正常关闭链接、
	var connection = createConnection();
	connection.connect();
	//引入查找模块
	require('./router/select').selectTravel(req,res,connection);
	console.log(req.query)
})	


// 查找分享
app.get('/selectShare', function(req, res) {
	//然后请求的很快的时候才能正常关闭链接、
	var connection = createConnection();
	connection.connect();
	//引入查找模块
	require('./router/share').selectShare(req,res,connection);
	console.log(req.query)
})	
	

//查找所有审核表单里的东西
app.get('/checkhomestay', function(req, res) {
	//  解决跨域

	//然后请求的很快的时候才能正常关闭链接、
	var connection = createConnection();
	connection.connect();
	//引入查找模块
	require('./router/select').checkhomestay(req,res,connection);
	console.log(req.query)
})	

//获取所有workplan里面的东西
app.get('/getplan', function(req, res) {
	//然后请求的很快的时候才能正常关闭链接、
	var connection = createConnection();
	connection.connect();
	//引入查找模块
	require('./router/select').getplan(req,res,connection);
	console.log(req.query)
})	
//获取所有admin里面的东西
app.get('/getadmin', function(req, res) {
	//然后请求的很快的时候才能正常关闭链接、
	var connection = createConnection();
	connection.connect();
	//引入查找模块
	require('./router/select').getadmin(req,res,connection);
	console.log(req.query)
})	
//更新admin的员工评分
app.get('/changerate', function(req, res) {
	//然后请求的很快的时候才能正常关闭链接、
	var connection = createConnection();
	connection.connect();
	//引入查找模块
	require('./router/update').updaterare(req,res,connection);
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
//注册管理者
app.post('/registeradmin', function(req, res) {
	//  解决跨域
	res.append("Access-Control-Allow-Origin", "*")
	//然后请求的很快的时候才能正常关闭链接、
	var connection = createConnection();
	connection.connect();
	//引入插入模块	
	require('./router/register').registerAdmin(req,res,connection)
})

//监听该端口..............................................................................
var server = app.listen(3000, function() {
	//测试
	//测试
	var host = server.address().address
	var port = server.address().port
	console.log("应用实例，访问地址为 http://%s:%s", host, port)
})