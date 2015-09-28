var http = require('http');
var mysql = require('mysql');
var sql = require('./js/server');
var express =  require('express');
var path = require('path');

var PORT = 8080;

var app = express();

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

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
