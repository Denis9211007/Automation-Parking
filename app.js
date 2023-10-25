const fs = require('fs');

const path = require('path');

const express = require('express');

const app = express();


app.use(express.static('public'));

app.use(express.urlencoded({extended: false}));

app.get('/',function (req,res){
    res.redirect('/homepage');

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
    console.log(signUpPage);
    const filePath = path.join(__dirname,'data','signUpDat.json');
    console.log(filePath);
    const fileData = fs.readFileSync(filePath);

    const storedProfs = JSON.parse(fileData);
    console.log(storedProfs);

    storedProfs.push(signUpPage);

    fs.writeFileSync(filePath, JSON.stringify(storedProfs));

    res.redirect('/user');
});

app.get('/user',function(req,res){
    const htmlFilePath = path.join(__dirname,'views','user_page.html');
    res.sendFile(htmlFilePath);
});

app.listen(3000);