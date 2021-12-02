const express=require('express')
const bagRouter=express.Router()
const Bag =require('../models/bag')
const User=require("../models/user")
const controllers=require('../controllers/bag')
const {isCust}=require('../middleware/isCust')
const isAuth=require('../middleware/passport')
const {isStorek}=require('../middleware/isStorek')
const multer=require('multer')

const storage= multer.diskStorage({
  destination:function(req,file,callback){
    callback(null,"./clients/public/uploads/")
  }, 
  filename:function(req,file, callback){
    callback(null, file.originalname)
  }
})
//verif image type : png/jpeg
const fileFilter=(req,file,cb)=>{
  if(file.mimetype==='image/jpeg' || file.mimetype==='image/png'){
    cb(null,true)}
    else {
      cb(null,false)
    }
  }

const upload=multer({storage:storage})



{/*bagRouter.post('/upload', upload.single('image'), (req, res) => {
  res.send(`/${req.file}`)
})*/}

//get all bags
bagRouter.get('/',isAuth(),async(req,res)=>{
try {
 
    const bags= await Bag.find().populate({path:"id_storekeeper",select: 'name'})
    res.send({bags,msg:"all the bags "})
} catch (error) {
    console.log(error)
    res.status(401).send({msg:"error while getting all bags"})
}
})
//delete bag isStorek() middelware
bagRouter.delete('/:id',isAuth(),isStorek,async(req,res)=>{
  const { id } = req.params
    try {
        const result = await Bag.findByIdAndRemove(id)
        result.deletedCount ? 
        res.send({  msg:'successfully deleted'}) :  res.send({  msg:'bag  is already deleted :) '})
    } catch (error) {
        res.status(400).send('sorry ,bag is not  deleted :(')
    }
})

//get bags by location
//filter bags
bagRouter.get('/bags/:adresse',isAuth(),isCust,async(req,res)=>{
    try {
      //test adresse
      const adresse=req.params.adresse
      console.log(adresse)
        const onebag= await Bag.find({adresse})
        res.send({onebag,msg:"bag successfully "})
    } catch (error) {
        console.log(error)
        res.status(401).send({msg:"error while getting one bag"})
    }
    })
    //get images
    bagRouter.get('/bagPic',async(req,res)=>{
      try {
        //test adresse
        const _id=req.params
          const images= await Bag.distinct('image')
          res.send(images)
      } catch (error) {
          console.log(error)
          res.status(401).send({msg:"error while getting images"})
      }
      })
//get bag by id
bagRouter.get('/:id',isAuth(),async(req,res)=>{
  try {
    //test adresse
    const { id } = req.params
    const oneBag= await Bag.findById(id)
      res.send({oneBag,msg:"bag successfully "})
  } catch (error) {
      console.log(error)
      res.status(401).send({msg:"error while getting one bag"})
  }
  })
//add new bag
bagRouter.post('/bags', isAuth(),isStorek,async(req,res)=>{
  const user = req.user;
const bag=req.body

 const {namebag,description,adresse,rating,category,price,priceBefore,
numProduct,expirationDate,availibilityDate,image,storekeeper}=req.body
  //  const image=req.body.file.filename => err backend filename undefined
 
  const newbag = new Bag({ namebag, description, adresse, rating, 
    category,price,priceBefore,numProduct, image,expirationDate,availibilityDate,storekeeper: req.user.name
  })

  try {
        
        await newbag.save()
        res.status(201).send({ message: 'New bag Created', bag: newbag })
      
    } catch (error) {
      console.log(error)
        res.status(401).send({msg:"cant post bag"})

    }
})
//sort bags
bagRouter.get("/bag/top",async (req, res) => {
  const topbags = await Bag.find({}).sort({ likes: -1 }).limit(3)
  res.status(200).send(topbags)
})
//review bag
bagRouter.post('/:id/reviews',async (req, res) => {
    const { rating} = req.body
  
    const bag = await Bag.findById(req.params.id)

    if (bag) {
      const alreadyReviewed = Bag.reviews.find(
        (r) => r.user.toString() === req.user._id.toString()

      ) 
      if (alreadyReviewed) {
        res.status(400)
        throw new Error('Bag already reviewed')
      }
  
      const review = {
        name: req.user.name,
        rating: Number(rating),
        
        user: req.user._id,
      }

      Bag.reviews.push(review)
      Bag.numReviews = bag.reviews.length
      Bag.rating =
       Bag.reviews.reduce((acc, cur) => cur.rating + acc, 0) /
        Bag.reviews.length
  
      await Bag.save()
      res.status(201).json({ message: 'Review Added' })
    } else {
      res.status(404)
      throw new Error('bag not found')
    }
    console.log(user)
  })
  //update bag
  bagRouter.put("/:id", isAuth(),isStorek,async(req,res)=>{

    try {
      const updatedbag = await Bag.updateOne(
        { _id: req.params.id },
        { $set: { ...req.body } }
      );
      console.log(updatedbag);
      if (updatedbag.modifiedCount) {
        return res.send({ msg: "bag updated with success :) ",updatedbag });
      }
      res.status(400).send({ msg: "oops! theres no modification.." });
    } catch (error) {
      res.status(400).send({ msg: "sorry we cannot modify this bag " });
    }  
  })

//update status  
bagRouter.put("/status/:id",async(req,res)=>{
  try {
   const statusUp= await Bag.updateOne(
      { _id: req.params.id_bag },
      { $set: { status:req.params.status } }
    );

    res.status(200).send({ msg: "bag updated with succes",statusUp });
  } catch (error) {
    res
      .status(400)
      .send({ errors: [{ msg: "oops! couldnt update status", error }] });
  }
})
//like bag (au lieu de review) //testtttttt
bagRouter.patch('/:id/likePost',isAuth(),async (req, res) => {
  const { id } = req.params
  try {
    const bag = await Bag.findById(id)
//count incremente 
const updatedBag = await Bag.findByIdAndUpdate(id, { likeCount: bag.likeCount + 1 },
  { new: true });

res.send(updatedBag)
  } catch (error) {
    res
      .status(400)
      .send({ errors: [{ msg: "oops! couldnt like bag", error }] });
  }


  
}) 



//like unlike:> err
{/*bagRouter.put('/:id/like',isAuth(),isCust,async (req, res) => {
  const { id } = req.params
  try {
    const bag = await Bag.findById(id)

   if( bag.likes.filter(like=>like.user.toString()===req.user._id).length> 0){
return res.status(400).send({msg:"bag already liked"})
    }
    bag.likes.unshift({user:req.user._id})
    await bag.save()
res.send(bag.likes)
  } catch (error) {
    res.status(500).send('error')
  }})*/}
//status updating
bagRouter.patch('/:id/status',isAuth(),isCust,async (req, res) => {
  try {
    const { id } = req.params
    const user = req.user;
  
    const bag = await Bag.findById(id)
  
                            //is reserved change 
    const updatedStatus = await Bag.findByIdAndUpdate(id,{isReserved:!bag.isReserved},{ new: true });
    
    res.send(updatedStatus)
  } catch (error) {
    res.status(400).send(error)
  }

})



//get mes dmnds
bagRouter.get('/:id/order',async(req,res)=>{
///////////////////////////////
})

//get bags by search adresse
bagRouter.get('/search', controllers.getBagsBySearch);


//pagination
bagRouter.get('/', controllers.getBags);

//FILTER
bagRouter.post('/filter' , controllers.filterController);


// LIKE BAG
bagRouter.put("/current/like/:id", isAuth(),isCust, controllers.like);

// UNLIKE BAG
bagRouter.put("/current/unlike/:id", isAuth(),isCust, controllers.unlike);

//comment Bag 
bagRouter.patch('/comment/:id',isAuth(),isCust,(req,res)=>{
 try {
  return Bag.findByIdAndUpdate(
    req.params.id,
    {
      $push: {
        comments: {
          text: req.body.text,
          postedBy:req.user._id,
          timestamp: new Date().getTime(),
        },
      },
    },
    { new: true },
    (err, docs) => {
      if (!err) return res.send(docs);
      else return res.status(400).send(err);
    }
  );
 } catch (error) {
   res.status(400).send(error)
 }
})
// delete comment
bagRouter.patch('/deletecomment/:id',isAuth(),isCust,async (req, res) => {


  try {
    Bag.findByIdAndUpdate(
      req.params.id,
      {
        $pull: {
          comments: {
            _id: req.body._id,
          },
        },
      },
      { new: true },
      (err, docs) => {
        if (!err) return res.send(docs);
        else return res.status(400).send(err);
      }
    );
  } catch (err) {
    return res.status(400).send(err);
  }
})


module.exports=bagRouter
  