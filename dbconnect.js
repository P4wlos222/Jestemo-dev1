const mysql = require('mysql');

connection = mysql.createConnection({
    host     : 'containers-us-west-100.railway.app',
    user     : 'root',
    password : '5c24Dfcr42wYngE6mG8p',
    database : 'railway',
    port     : 7863
});

connection.connect();
module.exports = connection;