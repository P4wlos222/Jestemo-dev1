const db = require(__dirname + "/dbconnect.js");
const bcrypt = require('bcryptjs');
const saltRounds = 10;

/*const passwd = 'miaurek2137';
bcrypt.hash(passwd, saltRounds, function(err, hash) {
    console.log(hash);
});*/


function DbAppend(data){
    //console.log(data);
    //console.log(typeof data.Password);
    var plain = data.Password
    bcrypt.hash(plain, saltRounds, function(err, hash) {
        console.log(hash);
    });
    hashedPassword = bcrypt.hash(data.Password, saltRounds, function(err, hash) {
        console.log(hash);
        return hash 
    });
    console.log(hashedPassword);
    db.query('INSERT INTO Users(UUID,Email,Phone,Password,FirstName,LastName,DisplayName) VALUES (UUID_TO_BIN(UUID()),?,?,?,?,?,?)',
    [data.Email,data.Phone,hashedPassword,data.FirstName,data.LastName,data.DisplayName],
    function(error){
        if (error) throw error;
    });
}

module.exports = DbAppend;