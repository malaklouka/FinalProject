
//demande duration middelware 
const durationReserv=(req,res,next)=>{

const Demande=require('../models/Demande')
    const dayjs = require('dayjs')
{/* var isBetween = require('dayjs/plugin/isBetween')
dayjs.extend(isBetween)*/}

 var duration = require('dayjs/plugin/duration')
dayjs.extend(duration)
const durationR=dayjs.duration(12, 'hours');
  
 const {createdAt,isReserved}=req.body
 var isReserved=true

 if(isReserved || createdAt>= durationR){
     res.status(200).send({message: " sorry this demand is deleted it passed 12h   ",isReserved});
 }else{
     next()                                
 }
}
  module.exports=durationReserv;
