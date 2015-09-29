var mysql = require('mysql');
var connection;

module.exports.connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "my_db"
});
