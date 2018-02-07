exports.userregister = function(req,res,connection){
    connection.query(`INSERT INTO user(username,password) values(${req.body.username},${req.body.password}`,function(error,results,fields){
        if(error) throw error;
        res.send(results);
        connection.end()
    })
}