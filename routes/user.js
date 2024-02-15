const express = require('express');
const route = express.Router();

route.get('/', (req, res)=>{
    return res.json({data:'hello user one'});
});

route.get('/path',(req,res)=>{
    return res.json({name:req.query.name,password:req.query.password})
})


route.get('/path/:name/:password',(req,res)=>{
    return res.json({name:req.params.name,password:req.params.password})
})

module.exports = route;
