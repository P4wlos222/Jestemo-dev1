const db = require(__dirname + "/dbconnect.js");


function getUser(uuid,callback){
    db.query('SELECT DisplayName FROM Users WHERE UUID = ?',[uuid], (err,result) => {
        if (err) throw err
        if (result.length > 0){
            callback(result[0])
        }
    })
}


module.exports = getUser