const express=require('express');
const mysql=require('mysql');

const app=express();

var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'sandy',
  database : 'sandy'
});

//connect

db.connect((err)=>{
    
    if(err)
        {
         throw err;
        }
    console.log('Mysql Connected');
});


//create  DB
app.get('/createdb', (req,res) => {
    let sql='CREATE DATABASE nodemysql';
    db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database Created...');
    });
});

//creeate table
app.get('/createposttable', (req,res) => {
    let sql='CREATE TABLE posts(id int AUOT_INCREMENT,title VARCHAR(255),body VARCHAR(255), PRIMARY KEY(id))';
    let query=db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send('post table  Created...');
    });
});


//insert into database

app.get('/insert', (req,res) => {
    let library={bookid:5,bookname:'core java',author:'sandy'}
    let sql='INSERT INTO library set ?';
    let query=db.query(sql,library, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send('post one  added...');
    });
});



//select posts
app.get('/getposts', (req,res) => {
    let sql='select * from library';
    let query=db.query(sql, (err,results) => {
        if(err) throw err;
        console.log(results);
        res.send('post fetched...');
    });
});

//update posts
app.get('/updatepost/bookname', (req,res) => {
    let book='booknames';
    let sql='update library set bookname = book where bookname = ${req.param.bookname}';
    let query=db.query(sql, (err,results) => {
        if(err) throw err;
        console.log(results);
        res.send('post updated...');
    });
});


// delete posts
app.get('/deletepost/:id', (req,res) => {
    let sql='delete from library where bookid = ${req.params.id}';
    let query=db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send('post deleted...');
    });
});



app.listen('3000',() => {
    console.log('Sever started on port 3000');
});

