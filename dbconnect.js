const mysql = require('mysql2');

connection = mysql.createConnection({
    host     : 'containers-us-west-100.railway.app',
    user     : 'root',
    password : process.env.MYSQLPASSWORD,
    database : 'railway',
    port     : 7863
});

connection.connect();
module.exports = connection;