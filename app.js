const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(3001, ()=>{
    console.log('Servidor funcionando en el purto 3001');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});


app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});