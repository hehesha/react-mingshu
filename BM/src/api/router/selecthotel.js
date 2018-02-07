//查找travel所有的东西
exports.selecthotel = function(req, res, connection) {
    console.log(111);
    var pageCount = 10;
    var page = (req.query.page);
    var pageEnd = pageCount * (page);
    var city=decodeURI(req.query.city); 
    connection.query(`SELECT * FROM homestary where city='${city}' limit ${pageEnd}`, function(error, results, fields) {
        if(error) throw error;
        //results =>array类型
        console.log('The solution is: ', results);
        //把数据整理，返回到前端
       res.send(results);
        connection.end();
    });
}