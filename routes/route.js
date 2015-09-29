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
        response.render('index.html');
    });


    var sess;

    app.post('/', function (req, res) {

        var userName = req.body.uname;
            passWord = req.body.pass;

        var html;

        sql.connection.query('SELECT * from USER WHERE name = "'+userName+'" AND password = "'+passWord+'"', function(err, rows, fields) {
            if (!err){
                if(rows.length > 0)
                {
                    console.log('Successfull Login');
                    req.session.userName = userName;
                    res.redirect('/home');
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

    app.get('/home', function(request, response){
        // response.render('home.html');
        if (request.session.userName) {
            html = 'Welcome ' + request.session.userName;
        }
        response.send(html);
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
