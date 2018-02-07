exports.release = function(req, res, connection) {
    console.log(req)
    res.send(true)
    // connection.query(`INSERT into register (phone,password)values('${phone}','${password}')`, function(error, results, fields) {
    //     if(error) throw error;
    //     //results =>array类型
    //     console.log('The solution is: ', results);
    //     //把数据整理，返回到前端
    //     var obj = {
    //         news: results,
    //         status: true
    //     }
    //     res.send(JSON.stringify(obj));
    //     connection.end();
    // })
}