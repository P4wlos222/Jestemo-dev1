const bcrypt = require("bcryptjs")
const db = require(__dirname + "/dbconnect.js");

function authenticate(req){
    let email = req.body.email;
	let password = req.body.passwd;
    if (email && password){
        db.query('SELECT Password FROM Users WHERE Email = ?',[email],function(err,result){
            if (err){return err}
            if (result.length > 0){
                hash = result[0]['Password'];
            } else {
                return 'emailNotValid'
            }
        });
        if (bcrypt.compareSync(password, hash))
        {
            req.session.loggedin = true;
            db.query('SELECT UUID FROM Users WHERE Email = ?',[email],function(err,result){
                if (err){return err}
                req.session.uuid = result
            });
            return 'valid';
        } else {
            return 'passwdNotValid';
        };
    }
    return false;
}

module.exports = authenticate;