// var mysql = require('mysql');

// var con =  mysql.createConnection({
//     host: "localhost",
//     user:"p1",
//     password:"",
//     database:"test",
//     connectionLimit:"10"
// })

// // pool.query(`select * from reg where id = ?`, (err, result )=>
// // {
// //     if(err){
// //         return console.log(err);
// //     }
// //     return console.log(result);

// // })
const mysql = require("p1");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "database_name",
});
// connect to the MySQL database
connection.connect((error) => {
  if (error) {
    console.error("Error connecting to MySQL database:", error);
  } else {
    console.log("Connected to MySQL database!");
  }
});
connection.end();
