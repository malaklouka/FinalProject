const express=require('express')
const storeRouter=express.Router()
const {getProfile,postProfile} =require('../controllers/storecontroller')
const StoreKeeper=require('../models/storeKeeper')
const isStorek=require('../middleware/isStorek')


{/* //signin route
storeRouter.post('/signin/store',isStorek, async(req,res)=>{
    try {
       const storekExist=await StoreKeeper.findOne({email:req.body.email}) 
       if (storekExist){
        return (res.status(400).send({msg:"theres storekeeper exist with this email "}))

       }
       const newStorekeeper= new StoreKeeper(req.body)
      await newStorekeeper.save()
      res.send({newStorekeeper,msg:"storekeeper added succesfully"})
    } catch (error) {
        res.status(401).send({msg:"Invalid email or password"})
        
    }

})

//register
storeRouter.post("/register/store",async({body},res)=>{
    try {
        
    
    const newKeeper=new StoreKeeper({
        email:body.email,
        password:bcrypt.hashSync(body.password, 8),
        name:body.name
    })
    //save newkeeper at database
    const createdKeeper= await newKeeper.save()

    res.send({
        _id: createdKeeper._id,
        email:createdKeeper.email,
        password:createdKeeper.password,
        name:createdKeeper.name,
        isStorekeeper:createdKeeper.isStorekeeper
    })
} catch (error) {
    res.status(401).send({msg:"error while registering as storekeeper"})
       
}
})*/} 

//storeRouter.get("/profile/:id", isAuth(), getProfile);
storeRouter.get('/profile',
isAuth(),
async(req,res)=>{
    try {
        const response = await User.findOne()
        res.send(response)
    } catch (error) {
        res.status(400).send({msg:'No user get it'})
    }
})

storeRouter.put('/editprofil/:id',isAuth(),async (req, res) => {
    try {
     const updatedProfil= await User.updateOne({ _id: req.params.id }, { $set: { ...req.body } });
     console.log(updatedProfil);
     if (updatedProfil.modifiedCount) {
        res.status(200).send({ msg: "profil updated with success :) ",updatedProfil });
      }
    } catch (error) {
      console.log(error);
      res.status(400).send({ msg: "proofile is not edited ", error });
    }
  })
  storeRouter.get('/profil/:id',isAuth(),async(req,res)=>{
    try {
      //test adresse
      const { id } = req.params
      const userp= await User.findById(id)
        res.status(200).send({userp,msg:"user successfully "})
    } catch (error) {
        console.log(error)
        res.status(401).send({msg:"error while getting one bag"})
    }
    })

module.exports=storeRouter
