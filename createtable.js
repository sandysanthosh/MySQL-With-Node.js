var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "sandy",  
database: "nodejs"  
});  
con.connect(function(err) {  
if (err) throw err;  
console.log("Connected!");  
var sql = "CREATE TABLE employees2 (id INT PRIMARY KEY, name VARCHAR(255), age INT(3), city VARCHAR(255))";  
con.query(sql, function (err, result) {  
if (err) throw err;  
console.log("Table created");  
});  
});  