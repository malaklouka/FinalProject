//demande middelware 
const shownbag=(req,res,next)=>{
    const Bag=require('../models/bag')
    const Demande=require('../models/Demande')
    const dayjs = require('dayjs')
 var isBetween = require('dayjs/plugin/isBetween')
 dayjs.extend(isBetween)
  
 const {expirationDate,availibiltyDate,isReserved}=req.body
 const demandes = await Demande.find({bag: bag});
 var isReserved=false
 
 demandes.map(async (demande) => {    
                                 
     const test1= (dayjs(expirationDate+1).isBetween(dayjs(demande.expirationDate), dayjs(demande.availibiltyDate),null,[] ) )||
     (dayjs(expirationDate+1).isBetween(dayjs(demande.expirationDate), dayjs(demande.availibiltyDate),null,[] ) ) 
    console.log(test1)
 
 
     isReserved= isReserved || test1 
     //console.log(isReserved)
     
 })
 if(isReserved){
     res.status(200).send({message: " unavailable ",isReserved});
 }else{
     next()                                
 }
}
  module.exports=shownbag;