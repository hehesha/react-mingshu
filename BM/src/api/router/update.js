//修改..........................

//功能：更新admin里面的评分
exports.updaterare=function(req,res,connection){
	console.log(req);
	var aid = req.query.aid;
	var rate = req.query.rate;
			//注意数据类型，字符串要加引号，int不要加引号
	connection.query(`update admin set rate='${rate}' where aid = '${aid}'`, function(error, results, fields) {
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