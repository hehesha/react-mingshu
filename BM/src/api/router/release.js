exports.release = function(req, res, connection) {
    console.log(req.body)
    connection.query(`INSERT into wanted (city,times,house_type)values('广州','2018年1月21日','1室')`, function(error, results, fields) {
        if(error) throw error;
        //results =>array类型
        console.log('The solution is: ', results);
        //把数据整理，返回到前端
        // var obj = {
        //     news: results,
        //     status: true
        // }
        res.send(results);
        connection.end();
    })
}