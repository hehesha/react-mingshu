//修改..........................

//功能：更新数据库中register中phone为XX的数据的内容
//返回：obj.status为true
//配置：路由：update    require(该文件的路径).update(req, res, connection) 
exports.update=function(req,res,connection){
	var phone = req.query.phone;
	var password = req.query.password;
			//注意数据类型，字符串要加引号，int不要加引号
	connection.query(`update register set password='${password}' where phone = '${phone}'`, function(error, results, fields) {
		if(error) throw error;
		//results =>array类型
		console.log('The solution is: ', results);
		//把数据整理，返回到前端
		var obj = {
			news: results,
			status: true
		}
		res.send(JSON.stringify(obj));
		connection.end();
	})	
}