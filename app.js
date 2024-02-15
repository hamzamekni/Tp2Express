const express = require('express');
const app = express();
const user = require('./routes/user');
const voitures=require('./routes/voiture');


//middleware to parse the request bodys
app.use(express.json());
app.use('/user',user);
app.use('/api',voitures);

//create a new server instance with the default settings 
app.listen(5000,()=>{
    console.log('server listening on port 5000')
})

app.get('/', (req, res) =>{
    res.send('<h1> welcome to node js app </h1>')
})
app.get('/index',(req, res) =>{
    res.sendFile(__dirname+'/index.html')
})