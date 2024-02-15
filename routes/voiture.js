const express =require("express");
const route =express.Router();

const voiture = [{id:1,marque:"clio"},{id:2,marque:"porsche"},{id:3,marque:"mazda"},{id:4,marque:"toyota"}]
route.get('/voitures', (req,res)=>{
    res.json(voiture);
})

route.post('/addV',(req,res)=>{
    const v =req.body;
    v.id = voiture.length+1;
    voiture.push(v);
    res.status(201).json(v);
})
 
route.put('/updateV/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const v =voiture.findIndex(voitures => voitures.id ===id);
    
    if (v === -1){
        return res.status(404).json({message: 'nexist pas'});
    }else{
        return res.json(v);
    }
    
})

route.put('/updatedV/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const v =voiture.findIndex(voitures => voitures.id ===id);
    console.log(v)
    if (v === -1){
        return res.status(404).json({message: 'nexist pas'});
    }
    voiture[v].marque=req.body.marque
    res.status(201).json({message:"le voiture modifier et => ",voitures: voiture[v]})
})

route.delete('/delV/:id',(req,res)=>{
    const id =parseInt(req.params.id);
    const v =voiture.findIndex(voitures => voitures.id === id)

    if (v === -1){
        return res.json({message :'nexist pas'})
    }
    voiture.splice(v,1);
    res.json({message:'voiture supprimer ',voiture: voiture})
})




module.exports= route;