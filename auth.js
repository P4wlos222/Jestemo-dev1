const bcrypt = require("bcryptjs");
const e = require("express");
const db = require(__dirname + "/dbconnect.js");

function authenticate(req){
    let email = req.body.email;
	let password = req.body.passwd;
    console.log(email,password)
    if (email && password){
        db.query('SELECT Password FROM Users WHERE Email = ?',[email],function(err,result){
            if (err){return err}
            if (result.length > 0){
                let hash = result[0]['Password'];
                if (bcrypt.compareSync(password, hash)){
                    req.session.loggedin = true;
                    db.query('SELECT UUID FROM Users WHERE Email = ?',[email],function(err,result){
                        if (err){return err}
                        req.session.uuid = result
                    });
                    return 'success';
                } else {
                    return 'passwdInvalid'
                }
            } else {
                return 'emailInvalid'
            }
        })
    } else {
        return 'requestInvalid'
    }
}

module.exports = authenticate;