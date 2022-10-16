const fs = require('fs');
const bodyParser = require("body-parser");
const cors = require('cors');
const session = require('express-session');
const express = require('express');
const app = express();
const auth = require(__dirname + "/auth.js");
const register = require(__dirname + "/register.js");




app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

app.use(cors());


app.get('/', function (req, res) {
    if (req.session.loggedin){
        res.redirect('/dashboard')
    } else{
        fs.readFile(__dirname + "/index.html", function(err, data){
            if (err) {
              res.writeHead(404, {'Content-Type': 'text/html'});
              return res.end("404 Not Found");
            } 
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        })
    };
})

app.get('/dashboard', function (req, res) {
    if (req.session.loggedin){
        res.send('Zalogowany');
    } else{
        fs.readFile(__dirname + "/index.html", function(err, data){
            if (err) {
              res.writeHead(404, {'Content-Type': 'text/html'});
              return res.end("404 Not Found");
            } 
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        })
    };
})

app.get('/login', function (req, res) {
    fs.readFile(__dirname + "/login.html", function(err, data){
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/html'});
          return res.end("404 Not Found");
        } 
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
})

app.get('/register', function (req, res) {
    fs.readFile(__dirname + "/register.html", function(err, data){
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/html'});
          return res.end("404 Not Found");
        } 
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
})

app.post('/auth', function(req, res) {
    res.send({returned: auth(req)})
});

app.post('/register', function(req, res) {
    data = {
        Email       : req.body.email,
        Phone       : req.body.phone,
        Password    : req.body.password,
        FirstName   : req.body.firstName,
        LastName    : req.body.lastName,
        DisplayName : req.body.displayName
    };
    if (register(data)){
        res.redirect('/');
    } else {
        res.send('Źle, rejestrować ni umie!')
    }
});


var server = app.listen(process.env.PORT);
