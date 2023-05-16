// Viết code kết nối đến MySQL ở đây
// Thông tin để kết nối đén DB
// Server: sql12.freemysqlhosting.net
// DB Name: sql12599183
// Username: sql12599183
// Password: 7kDm3VrFbT
const mysql = require('mysql');  
const db = mysql.createConnection ({
   host: 'sql12.freemysqlhosting.net',
   user: 'sql12599183',
   password: '7kDm3VrFbT',
   database: 'sql12599183'
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    db.query('select * from employees', function (err, database) {
      if (err) throw err;
      module.exports.database=database;
    });
  });