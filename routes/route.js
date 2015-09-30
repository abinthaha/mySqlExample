var path = require('path'),
    express = require('express');
    bodyParser = require('body-parser');

var session = require('express-session');
var cookieParser = require('cookie-parser');
var sql = require('../js/db');

module.exports = function(app, passport) {

    //Initializing session
    app.use(bodyParser());
    app.use(cookieParser());

    app.use(session({secret:'somesecrettokenhere'}));

    app.get('/', function(request, response){
        request.session.destroy();
        response.render('index.html');
    });

    app.get('/logout', function(request, response){
        response.redirect('/');
    });

    app.get('/home/inbox', function(request, response){
        console.log(request.session);
    });

    app.post('/', function (req, res) {

        var userName = req.body.uname;
            passWord = req.body.pass;

        sql.connection.query('SELECT * from users WHERE email = "'+userName+'" AND password = "'+passWord+'"', function(err, rows, fields) {
            if (!err){
                if(rows.length > 0)
                {
                    console.log('Successfull Login');
                    req.session.userName = userName;
                    res.render('home.html', {name : req.session.userName});
                }
                else {
                    console.log("Failed to Login");
                    res.render('index.html');
                }
            }
            else
                console.log('Error while performing Query.');
            });
    });

    app.get('/register', function(request, response){
        response.render('register.html');
    });

    app.post('/register', function (req, res) {

        var userName = req.body.uname;
            passWord = req.body.pass;

            id=Math.floor(Math.random()*200);

        sql.connection.query('INSERT INTO USER VALUES("'+id+'", "'+userName+'", "'+passWord+'")', function(err) {
            if (!err){
                console.log("Inserted");
            }
            else
                console.log('Error while performing Query.');
            });
        res.render('index.html');
    });
};
