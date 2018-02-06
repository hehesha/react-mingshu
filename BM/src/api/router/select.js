//查找所有的员工信息
exports.getadmin = function(req, res, connection) {
	connection.query(`SELECT * FROM admin`, function(error, results, fields) {
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

//查找所有审核表单里的东西
exports.checkhomestay = function(req, res, connection) {
	connection.query(`SELECT * FROM checkhomestay`, function(error, results, fields) {
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
//获得所有workplan里面的东西
exports.getplan = function(req, res, connection) {
	connection.query(`SELECT * FROM workplan`, function(error, results, fields) {
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
