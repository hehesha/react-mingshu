

//功能：根据传进来的id在数据库中查找并删除该id对应数据。
//前提：先建立对应的数据库的表
//接受参数：用于查找的信息：id:5
//逻辑：
//返回：obj.status为ture
//配置：路由：delSelf    require(该文件的路径).delSelf(req, res, connection) 
exports.delSelf=function(req,res,connection){
	var phone = req.query.phone;
	connection.query(`delete FROM register where phone ='${phone}' `, function(error, results, fields) {
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
	});
	
}





//功能：根据传进来的数组，遍历数组，在数据库中查找并删除该对应数据。
//例如:把已选的所有多选框的父级tr的id传进来并删除该tr
//前提：先建立对应的数据库的表
//接受参数：数组：id:[1,3,4,7,23]
//逻辑：遍历数组，在数据库中查找并删除该对应数据。
//返回：obj.status为ture
//配置：路由：delArr   require(该文件的路径).delArr(req, res, connection) 
exports.delArr=function(req,res,connection){
	var arrId = typeof req.query.id=='string'?[req.query.id]:req.query.id;
	arrId.forEach(function(id){
		connection.query(`delete FROM lagou where id ='${id}' `, function(error, results, fields) {
			if(error) throw error;
			//results =>array类型
			console.log('The solution is: ', results);
			//把数据整理，返回到前端
			var obj = {
				news: results,
				status: true
			}
		});
		
	})
	res.send('删除成功');
	connection.end();
	
}