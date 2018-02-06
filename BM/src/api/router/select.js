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

//查找travel所有的东西
exports.selectTravel = function(req, res, connection) {
	connection.query(`SELECT * FROM travelStrategy`, function(error, results, fields) {
		if(error) throw error;
		//results =>array类型
		console.log('The solution is: ', results);
		//把数据整理，返回到前端
		
		res.send(results);
		connection.end();
	});
}
