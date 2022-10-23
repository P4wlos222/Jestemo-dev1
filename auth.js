const db = require(__dirname + "/dbconnect.js");
const bcrypt = require("bcryptjs");


/*function authenticate(req,callback){ // Redo - get uuid first
    let email = req.body.email;
	let password = req.body.passwd;
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
                    callback('success')
                } else {
                    callback('passwdInvalid')
                }
            } else {
                callback('emailInvalid')
            }
        })
    } else {
        callback('requestInvalid')
    }
}*/

function authenticate(req,callback){ // Redo - get uuid first
    let email = req.body.email;
	let password = req.body.passwd;
    if (email && password){
        db.query('SELECT UUID FROM Users WHERE Email = ?',[email],function(err,result){
            if (err){return err}
            if (result.length > 0){
                let uuid = result[0].UUID
                db.query('SELECT Password FROM Users WHERE UUID = ?',[uuid],function(err,result){
                    if (err){return err}
                    if (result.length > 0){
                        let hash = result[0].Password;
                        if (bcrypt.compareSync(password, hash)){
                            req.session.loggedin = true;
                            req.session.uuid = uuid
                            callback('success')
                        } else {
                            callback('passwdInvalid')
                        }
                    } else {
                        callback('emailInvalid')
                    }
                })
            } else {
                callback('emailInvalid')
        }
        });
        
    } else {
        callback('requestInvalid')
    }
}

module.exports = authenticate;