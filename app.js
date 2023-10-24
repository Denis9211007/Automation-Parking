const fs = require('fs');

const path = require('path');

const express = require('express');

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({extended: false}));

app.get('/',function (req,res){
    res.send('<h1>hello world</h1>');

});

app.get('/homePage',function(req,res){
    const htmlFilePath = path.join(__dirname,'views','index.html');
    res.sendFile(htmlFilePath);
});

app.get('/signup',function(req,res){
    const htmlFilePath = path.join(__dirname,'views','sing_Up_page.html');
    res.sendFile(htmlFilePath);
});
app.post('/signup', function(req,res){
    const signUpPage = req.body;
    const filePath = path.join(__dirname,'data','signUp.json')

    const fileData = fs.readFileSync(filePath);
    const storedProfs = JSON.parse(fileData);

    storedProfs.push(signUpPage);

    fs.writeFileSync(filePath, JSON.stringify(storedProfs));

    res.redirect('/user');
});

app.get('/user',function(req,res){
    const htmlFilePath = path.join(__dirname,'views','user_page.html');
    res.sendFile(htmlFilePath);
});

app.listen(3000);