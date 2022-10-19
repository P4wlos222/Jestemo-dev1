const mysql = require('mysql2');

connection = mysql.createConnection({
    host     : process.env.MYSQLHOST,
    user     : process.env.MYSQLUSER,
    password : process.env.MYSQLPASSWORD,
    database : process.env.MYSQLDATABASE,
    port     : process.env.MYSQLPORT
});

connection.connect();
module.exports = connection;