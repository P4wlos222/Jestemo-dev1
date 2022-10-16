const bcrypt = require("bcryptjs");
const e = require("express");
const db = require(__dirname + "/dbconnect.js");

function authenticate(req,callback){
    let email = req.body.email;
	let password = req.body.passwd;
    let hash = '';
    let res = 'def';
    console.log(email,password)
    if (email && password){
        console.log('email && password')
        db.query('SELECT Password FROM Users WHERE Email = ?',[email],function(err,result){
            console.log('queried')
            if (err){return err}
            if (result.length > 0){
                console.log('found pass for email')
                hash = result[0]['Password'];
                if (bcrypt.compareSync(password, hash)){
                    console.log('passwdmatch')
                    req.session.loggedin = true;
                    db.query('SELECT UUID FROM Users WHERE Email = ?',[email],function(err,result){
                        if (err){return err}
                        req.session.uuid = result
                    });
                    res = 'valid';
                } else {
                    console.log('pass not valid')
                    res = 'passwdNotValid'
                }
            } else {
                console.log('email not valid')
                res = 'emailNotValid'
            }
        })
    } else {
        res = 'invalidRequest'
    }
    callback(res)
}

module.exports = authenticate;