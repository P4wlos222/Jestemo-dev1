const db = require(__dirname + "/dbconnect.js");
const bcrypt = require('bcryptjs');
const saltRounds = 10;

/*const passwd = 'miaurek2137';
bcrypt.hash(passwd, saltRounds, function(err, hash) {
    console.log(hash);
});*/


function DbAppend(data){
    let salt = bcrypt.genSaltSync(saltRounds);
    let hashedPassword = bcrypt.hashSync(data.Password, salt);
    //console.log(data);
    //console.log(typeof data.Password);
    //var plain = data.Password
    //console.log(typeof plain, plain);
    //bcrypt.hash(plain, saltRounds, function(err, hash) {
    //    console.log(hash);
    //});
    console.log(hashedPassword);
    db.query('INSERT INTO Users(UUID,Email,Phone,Password,FirstName,LastName,DisplayName) VALUES (UUID_TO_BIN(UUID()),?,?,?,?,?,?)',
    [data.Email,data.Phone,hashedPassword,data.FirstName,data.LastName,data.DisplayName],
    function(error){
        if (error) throw error;
    });
}

module.exports = DbAppend;