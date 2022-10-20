const db = require(__dirname + "/dbconnect.js");
const bcrypt = require("bcryptjs");
const saltRounds = 10;


function register(req,callback){
    let email = req.body.email;
	let password = req.body.passwd;
    let firstName = req.body.firstName
    let lastName = req.body.lastName

    let salt = bcrypt.genSaltSync(saltRounds, function(err,hash){
        if (err) throw err;
    });
    let hashedPassword = bcrypt.hashSync(password, salt, function(err,hash){
        if (err) throw err;
    });

    db.query('INSERT INTO Users(UUID,Email,Password,FirstName,LastName) VALUES (UUID_TO_BIN(UUID()),?,?,?,?)',
    [email,hashedPassword,firstName,lastName],
    function(error){
        if (error) throw error;
    });
    callback("success")
}


module.exports = register;