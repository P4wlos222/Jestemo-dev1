const fs = require('fs');
const bodyParser = require("body-parser");
const cors = require('cors');
const express = require('express');
const session = require('express-session');
const { body, validationResult } = require('express-validator');
const app = express();
const auth = require(__dirname + "/auth.js");
const register = require(__dirname + "/appenduser.js");


const PORT = process.env.PORT || 8080;


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
    } else {
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
        fs.readFile(__dirname + "/dashboard.html", function(err, data){
            if (err) {
              res.writeHead(404, {'Content-Type': 'text/html'});
              return res.end("404 Not Found");
            } 
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        })
    } else {
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
    if (req.session.loggedin){
        fs.readFile(__dirname + "/dashboard.html", function(err, data){
            if (err) {
              res.writeHead(404, {'Content-Type': 'text/html'});
              return res.end("404 Not Found");
            } 
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        })
    } else {
        fs.readFile(__dirname + "/login.html", function(err, data){
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

app.get('/profile', function (req, res) {
    if (req.session.loggedin){
        fs.readFile(__dirname + "/profile.html", function(err, data){
            if (err) {
              res.writeHead(404, {'Content-Type': 'text/html'});
              return res.end("404 Not Found");
            } 
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        })
    } else {
        fs.readFile(__dirname + "/login.html", function(err, data){
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

app.get('/logout', function(req,res) {
    req.session.loggedin = false
    req.session.uuid = null
    res.redirect("/")
})

app.post('/login',
    body('email').isEmail().normalizeEmail().isLength({min: undefined, max: 255}),

    (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        auth(req,function(result) {
            res.json({"logresult": result})
        })
    } else {
        res.json({"logresult": "error", "errors": errors})
    }

});

app.post('/register',
    body('email').isEmail().normalizeEmail().isLength({min: undefined, max: 255}),
    body('passwd').isStrongPassword({minsymbols: 0}).isLength({min: undefined, max: 255}), //isStrongPassword()
    body('firstName').trim(),
    body('lastName').trim(),

    (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        register(req,function(result) {
            res.json({"regresult": result})
        })
    } else {
        res.json({"regresult": "error", "errors": errors})
    }
    
});


var server = app.listen(PORT);
