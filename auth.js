const bcrypt = require("bcryptjs")
const saltRounds = 10;
const db = require(__dirname + "/dbconnect.js");

function authenticate(req){
    let email = req.body.email;
	let password = req.body.passwd;
    if (email && password){
        hash = db.query('SELECT Password FROM Users WHERE Email = ?',[email],function(error,result,fields){
            console.log(error,result,fields);
        });
        //if (bcrypt.compareSync(password, hash)){

        //}
    }
    return true;
}

module.exports = authenticate;