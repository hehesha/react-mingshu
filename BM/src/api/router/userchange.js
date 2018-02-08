
exports.userchange = function(req, res, connection) {
    var user = req.query.username;
    var password = req.query.password;
    connection.query(`SELECT * from user where username = '${user}'`, function(err, data) {
        if(data.length==0){
            res.send(false)
            connection.end();
        }else{
            connection.query(`UPDATE user set password = '${password}' where username = '${user}'`)
            res.send(true);
            connection.end();
        }
    })
}

