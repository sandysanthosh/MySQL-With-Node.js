var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "sandy",  
database: "nodejs"  
});  
con.connect(function(err) {  
if (err) throw err;  
var sql = "UPDATE employees SET city = 'Delhi' WHERE city = 'Allahabad'";  
con.query(sql, function (err, result) {  
if (err) throw err;  
console.log(result.affectedRows + " record(s) updated");  
});  
});  