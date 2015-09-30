var http = require('http');
var mysql = require('mysql');
var sql = require('./js/db');
var express =  require('express');
var path = require('path');
var passport = require('passport');

var PORT = 8080;

var app = express();
app.use(express.static('public'));

require('./routes/route')(app, passport);
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.listen(PORT, function(){
    // console.log("Server listening on: http://localhost:%s", port);
    sql.connection.connect(function(err) {
        if (err) {
            console.error('error connecting : ' + err.stack);
            return;
        }
    console.log('connected as id ' + sql.connection.threadId);
    });
    // console.log(sql.connection.connect);
});
