exports.release = function(req, res, connection) {
<<<<<<< HEAD
    var city = req.body.city;
    var district = req.body.district;
    var date = req.body.date;
    var room = req.body.room;
    console.log(city,district,date,room)
    connection.query(`INSERT into wanted (city,district,times,house_type)values('${city}','${district}','${date}','${room}')`, function(error, results, fields) {
=======
    console.log(req.body)
    connection.query(`INSERT into wanted (city,times,house_type)values('广州','2018年1月21日','1室')`, function(error, results, fields) {
>>>>>>> c9f0aae7e6607498db7d0e5c75821781443528eb
        if(error) throw error;
        //results =>array类型
        console.log('The solution is: ', results);
        //把数据整理，返回到前端
        // var obj = {
        //     news: results,
        //     status: true
        // }
        res.send(true);
        connection.end();
    })
}