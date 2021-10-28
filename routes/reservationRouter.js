const express=require('express')
const reservRouter=express.Router()
const Reservation =require('../models/reservation')

//reserver : add reserv (post)
reservRouter.post("/resrvt",async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
})
//annuler reserv : delete 
reservRouter.delete('/reserv/:id',async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
})
//get reservations 
reservRouter.get('/reservation',async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
})
module.exports=reservRouter

