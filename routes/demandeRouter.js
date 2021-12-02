//demande: add new dmnd + get dmnds(storek)+ edit my dmnd+isAccepted or not

//add new dmnd : idcust + idbag want to buy it 
const express = require("express");
const Demande=require('../models/Demande')
const Bag =require('../models/bag')
const { addtoDemande,addTo, addItems,getDemandeCust,getdmndbyid, getD,getOneD,acceptdmnd,getDemande,cancelDemande,getAcceptedDemande,acceptcustdmnd,getMyDmnd}=require("../controllers/Demande")
const Dmndrouter = express.Router();
const isAuth=require('../middleware/passport');
const { isStorek } = require("../middleware/isStorek");
Dmndrouter.get("/alldemande",getDemande)
//Dmndrouter.get("/cust/alldemande", getDemandeCust)
Dmndrouter.post("/addtodmnd",isAuth(),addtoDemande)
Dmndrouter.post('/additemsto',isAuth(),addItems)
Dmndrouter.get('/d',isAuth(),getD)
Dmndrouter.get('/oned',isAuth(),getOneD)
//Dmndrouter.get('/myd',isAuth(),getmyd)

//Dmndrouter.post("/addt",isAuth(), addtoDemande)
Dmndrouter.delete("/cancel/:id",isAuth(),cancelDemande)
Dmndrouter.get("/acc",isAuth(),getAcceptedDemande)
//nzidou el middelware de storekeeper : only storekk can accept demand => it worksss
Dmndrouter.patch("/accept/:id",isAuth(),isStorek,acceptcustdmnd)

Dmndrouter.get("/mesdemandes",isAuth(),getMyDmnd)
Dmndrouter.get("/:id",getdmndbyid) 
//update isAccepted
Dmndrouter.patch('/:id_demande/status',async (req, res) => {
    try {
        const { id_demande } = req.params
        const demandestatus = await Demande.findById(id_demande)
     console.log(demandestatus) 

     const updatedStatus = await Demande.findByIdAndUpdate(id_demande,{isAccepted:!demandestatus.isAccepted},{ new: true });
        console.log(updatedStatus)
        res.send(updatedStatus)
    } catch (error) {
        res.status(409).send('Failure')
        console.dir(error)
    }
  
  })


 



Dmndrouter.post('/testadd', isAuth(), (req, res) => {
    const user = req.user;
    const item = {
      bag: req.body.bag,
      
      quantity: req.body.quantity
    };
  
    Demande.findOne({ user: user }).then((foundDmd) => {
        if (foundDmd) {
          let bags = foundDmd.items.map((item) => item.bag + '');
          if (bags.includes(item.bag)) {
            Demande.findOneAndUpdate({
              user: user,
              items: {
                $elemMatch: { bag: item.bag }
              }
            },
              {
                $inc: { 'items.$.quantity': item.quantity }
              })
              .exec()
              .then(() => res.send("ok"));
          } else {
            foundDmd.items.push(item);
            foundDmd.save().then(() => res.send("ol"));
          }
        } else {
          Demande.create({
            user: user,
            items: [item]
          })
            .then(() => res.send("aa"));
        }
      });
  });

  //get demand by user
{ /* Dmndrouter.get('/dem/getdbyuser',(req, res) => {

    Demande.findOne({ user: req.user._id })
    .populate('items.bag')
    .exec((err, bag) => {
      if (!bag) {
        return res.send(null);
      }
  
      res.send(bag);
    });
  });
    Dmndrouter.put('/', isAuth(), (req, res) => {
    Cart.findById(req.body.cartId)
      .then((foundCart) => {
        foundCart.items = foundCart.items.filter((item) => item._id != req.body.itemId);
        foundCart.save(() => res.end());
      });
  });

  
  Dmndrouter.delete('/', isAuth(), (req, res) => {
    Cart.findByIdAndRemove(req.query.id)
      .then(() => res.end())
      .catch((err) => res.send(err));
  });
*/}

///////////////////
  Dmndrouter.post('/test/add', isAuth(), async (req, res) => {
    try {
      const { bag, isReserved,namebag,price } = req.body;
      const user = req.user;
      const update = {
        bag,
        isReserved,namebag,
        updated: Date.now()
      };
      const query = { bag: update.bag,namebag:update.namebag, user: user._id };
  
      const updatedDemand = await Demande.findOneAndUpdate(query, update, {
        new: true
      } ).populate({path:'bag', select:"namebag"}); 
  
      //verif if ag exist or not
const existed=await Demande.findOne({bag})

if (existed){
    return res.status(200).send({msg:"this bag already exist"})
}

      if (updatedDemand !== null) { 
        res.status(200).send({
          success: true,
          message: 'Your demand has been updated successfully!',
          demand: updatedDemand
        });
      } else {
        const demand = new Demande({
          bag,
          isReserved:!isReserved,
          user: user._id
        });
  
        const demandDoc = await demand.save();
  
        res.status(200).send({
          success: true,
          message: `Added to your demand successfully!`,
          demand: demandDoc
        });
      }
    } catch (error) {
       res.status(400).send({error,
        error: 'Your request could not be processed. Please try again.'
      });
      console.dir(error)

    }
  });
  
// get dmnd list 
Dmndrouter.get('/dmd/getthd', isAuth(),isStorek, async (req, res) => {
  try {

    const thedemand = await Demande.find().populate({path:'user',select:'name email adresse'})

console.log(thedemand)
    res.status(200).send({
      thedemand
    });
  } catch (error) {
    res.status(400).send({
      msg: 'Your request could not be processed. Please try again.',error
    });
  }
});






module.exports = Dmndrouter;

