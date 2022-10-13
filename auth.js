const bcrypt = require("bcryptjs")
const db = require(__dirname + "/dbconnect.js");

function authenticate(req){
    let email = req.body.email;
	let password = req.body.passwd;
    if (email && password){
        db.query('SELECT Password FROM Users WHERE Email = ?',[email],function(err,result){
            if (err){return err}
            hash = result[0]['Password'];
        });
        if (bcrypt.compareSync(password, hash))
        {
            req.session.loggedin = true;
            db.query('SELECT UUID FROM Users WHERE Email = ?',[email],function(err,result){
                if (err){return err}
                req.session.uuid = result
            });
            return true;
        } else {
            return false;
        };
    }
    return false;
}

module.exports = authenticate;