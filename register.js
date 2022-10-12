const db = require(__dirname + "/dbconnect.js");
const bcrypt = require('bcryptjs');
const saltRounds = 10;

function hash(string){
    bcrypt.hash(string, saltRounds, function(err, hash) {
        return hash
    });
}

function DbAppend(data){
    hashedPasswd = hash(data.Password);
    console.log(hashedPasswd);
    db.query('INSERT INTO Users(UUID,Email,Phone,Password,FirstName,LastName,DisplayName) VALUES (UUID_TO_BIN(UUID()),?,?,?,?,?,?)',
    [data.Email,data.Phone,hashedPasswd,data.FirstName,data.LastName,data.DisplayName],
    function(error){
        if (error) throw error;
    });
}

module.exports = DbAppend;