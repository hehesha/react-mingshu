//查找......................

//功能：查找register表中的所有项
//返回：返回表register的所有数据
//配置：路由：selectAll    require(该文件的路径).selectAll(req, res, connection)


exports.selectAll = function(req, res, connection) {
	connection.query(`SELECT * FROM homestary`, function(error, results, fields) {
		if(error) throw error;
		//results =>array类型
		console.log('The solution is: ', results);
		//把数据整理，返回到前端
		var obj = {
			news: results,
		}
		res.send(JSON.stringify(obj));
		connection.end();
	});
}


//功能：查找lagou表中id为XX的项
//返回：返回该项的数据
//配置：路由：selectId    require(该文件的路径).selectId(req, res, connection)   
exports.selectId = function(req, res, connection) {
	//查找......................
	var id = req.query.id;
	connection.query(`SELECT * FROM lagou where id = ${id}`, function(error, results, fields) {
		if(error) throw error;
		//results =>array类型
		console.log('The solution is: ', results);
		//把数据整理，返回到前端
		var obj = {
			news: results,
		}
		res.send(JSON.stringify(obj));
		connection.end();
	});
}


//功能：分页功能。
//接受参数：page：页码， pageCount:每一页显示的个数
//返回：返回该页码的pageCount条数据
//配置：路由：selectPage    require(该文件的路径).selectPage(req, res, connection)  
exports.selectPage = function(req,res,connection){
	var pageCount = req.query.pageCount;
	var page = req.query.page;
	var pageBegin = pageCount * (page - 1)
												//从这里开始显示     显示多少个
	connection.query('select * from lagou limit '+ pageBegin + ','+pageCount,function(err,results, fields){
		
		res.end(JSON.stringify(results))
		
		
	})
	connection.end();
	
}
