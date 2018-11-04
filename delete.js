var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "sandy",  
database: "nodejs"  
});  
con.connect(function(err) {  
if (err) throw err;  
var sql = "DELETE FROM employees WHERE city = 'Delhi'";  
con.query(sql, function (err, result) {  
if (err) throw err;  
console.log("Number of records deleted: " + result.affectedRows);  
});  
});  