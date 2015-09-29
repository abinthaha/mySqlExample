var path = require('path'),
    express = require('express');
    bodyParser = require('body-parser');

var sql = require('../js/db');

module.exports = function(app, passport) {

    app.use(bodyParser());

    app.get('/', function(request, response){
        response.render('index.html');
    });

    app.post('/', function (req, res) {

        var userName = req.body.uname;
            passWord = req.body.pass;

        var html;

        sql.connection.query('SELECT * from USER WHERE name = "'+userName+'" AND password = "'+passWord+'"', function(err, rows, fields) {
            if (!err){
                if(rows.length > 0)
                {
                    console.log('Successfull Login');
                    res.render('home.html');
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

        sql.connection.query('INSERT INTO USER VALUES("02", "'+userName+'", "'+passWord+'")', function(err) {
            if (!err){
                console.log("Inserted");
            }
            else
                console.log('Error while performing Query.');
            });
        res.render('index.html');
    });
};
