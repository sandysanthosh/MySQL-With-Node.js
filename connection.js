var mysql = require('mysql');  
var con = mysql.createConnection({  
  host: "localhost",  
  user: "root",  
  password: "sandy"  
});  
con.connect(function(err) {  
  if (err) throw err;  
  console.log("Connected!");  
});  