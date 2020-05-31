# MySQL Node.js:

Using MySQL With Node.js :coffee:

https://github.com/mysqljs/mysql

### How to connect with mysql using nodejs:


            Nodejs connection with database applications
            create,read,update,delete 

   
   ### Install in NPM:
   
      
            $ npm install mysql
            
  
  
  ### Establishing Connections Node.js:
  

         var mysql      = require('mysql');
         var connection = mysql.createConnection({
           host     : 'localhost',
           user     : 'me',
           password : 'secret',
           database : 'my_db'
         });

         connection.connect();

         connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
           if (error) throw error;
           console.log('The solution is: ', results[0].solution);
         });

         connection.end();
         
                 
  ###  Insert.js in Node:

            var mysql = require('mysql');  
            var con = mysql.createConnection({  
            host: "localhost",  
            user: "root",  
            password: "***",  
            database: "nodejs"  
            });  
            con.connect(function(err) {  
            if (err) throw err;  
            console.log("Connected!");  
            var sql = "INSERT INTO employees (id, name, age, city) VALUES ?";  
            var values = [  
            ['2', 'Bharat Kumar', '25', 'Mumbai'],  
            ['3', 'John Cena', '35', 'Las Vegas'],  
            ['4', 'Ryan Cook', '15', 'CA']  
            ];  
            con.query(sql, [values], function (err, result) {  
            if (err) throw err;  
            console.log("Number of records inserted: " + result.affectedRows);  
            });  
            });       
            
            
 ### Select.js Node:

            var mysql = require('mysql');  
            var con = mysql.createConnection({  
            host: "localhost",  
            user: "root",  
            password: "***",  
            database: "nodejs"  
            });  
            con.connect(function(err) {  
            if (err) throw err;  
            con.query("SELECT * FROM employees", function (err, result) {  
            if (err) throw err;  
            console.log(result);  
            });  
            });                     


### Update.js Node:

            var mysql = require('mysql');  
            var con = mysql.createConnection({  
            host: "localhost",  
            user: "root",  
            password: "***",  
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
            

### Delete.js in Node:

            var mysql = require('mysql');  
            var con = mysql.createConnection({  
            host: "localhost",  
            user: "root",  
            password: "***",  
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


                                                                                                






    
<a href="http://starwalt.in/Blogs/index.html">Follow us on Blog</a>




            
