const mysql = require('mysql2');

connection = mysql.createConnection({
    host     : process.env.MYSQLHOST || 'localhost',
    user     : process.env.MYSQLUSER || 'root',
    password : process.env.MYSQLPASSWORD || 'hasloroota',
    database : process.env.MYSQLDATABASE || 'railway',
    port     : process.env.MYSQLPORT || 3306
});

connection.connect();
module.exports = connection;