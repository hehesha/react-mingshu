exports.userlogin = function(req, res, connection) {
    var user = req.query.user;
    var password = req.query.password;
    connection.query(`SELECT * from user where user = '${user}' and password='${password}'`, function(err, data) {
        if(data.length==0){
            //数据库中没有匹配到帐号密码
            res.end('手机没注册或密码错误')
            connection.end();
        }else{
            
            res.end('登录成功')
            connection.end();
        }
    })
}