const db = require(__dirname + "/Backend/dbconnect.js");
const bcrypt = require('bcryptjs');
const saltRounds = 10;


function DbAppend(data){
    let salt = bcrypt.genSaltSync(saltRounds, function(err,hash){
        if (err) throw err;
    });
    let hashedPassword = bcrypt.hashSync(data.Password, salt, function(err,hash){
        if (err) throw err;
    });

    db.query('INSERT INTO Users(UUID,Email,Phone,Password,FirstName,LastName,DisplayName) VALUES (UUID_TO_BIN(UUID()),?,?,?,?,?,?)',
    [data.Email,data.Phone,hashedPassword,data.FirstName,data.LastName,data.DisplayName],
    function(error){
        if (error) throw error;
    });
    return true;
}

module.exports = DbAppend;