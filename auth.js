const bcrypt = require("bcryptjs")
const db = require(__dirname + "/dbconnect.js");

function authenticate(req){
    let email = req.body.email;
	let password = req.body.passwd;
    if (email && password){
        db.query('SELECT Password FROM Users WHERE Email = ?',[email],function(error,result){
            if (error){return error}
            hash = result[0]['Password'];
        });
        if (bcrypt.compareSync(password, hash))
        {
            req.session.loggedin = true;
            return true;
        } else {
            return false;
        };
    }
    return false;
}

module.exports = authenticate;