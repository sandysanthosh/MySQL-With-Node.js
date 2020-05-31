# MySQL Node.js:

Using MySQL With Node.js


### how to connect with mysql using nodejs:


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
         
 ### Select Query:

                      connection.query(
                       'SELECT * FROM `books` WHERE `author` = ?',
                       'David',
                       function (error, results, fields) {
                         // error will be an Error if one occurred during the query
                         // results will contain the results of the query
                         // fields will contain information about the returned results fields (if any)
                       }
                     );






    
<a href="http://starwalt.in/Blogs/index.html">Follow us on Blog</a>




