
var mysql = require('mysql');
var config = require('./config');
var conn = mysql.createConnection({
  host: "127.0.0.1",
  port: config.db.port,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
});
conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!")
});

module.exports = conn; 