//demande: add new dmnd + get dmnds(storek)+ edit my dmnd+isAccepted or not

//add new dmnd : idcust + idbag want to buy it 
const express = require("express");
const Demande=require('../models/Demande')
const { addtoDemande,addTo, addItems,getDemandeCust,getdmndbyid, acceptdmnd,getDemande,cancelDemande,getAcceptedDemande,acceptcustdmnd,getMyDmnd}=require("../controllers/Demande")
const Dmndrouter = express.Router();
const isAuth=require('../middleware/passport')
Dmndrouter.get("/alldemande",getDemande)
Dmndrouter.get("/cust/alldemande", getDemandeCust)
Dmndrouter.post("/addtodmnd",isAuth(),addTo)
Dmndrouter.post('/additemsto',isAuth(),addItems)

Dmndrouter.post("/addt",isAuth(), addtoDemande)
Dmndrouter.delete("/cancel/:id",isAuth(),cancelDemande)
Dmndrouter.get("/acc",isAuth(),getAcceptedDemande)
Dmndrouter.patch("/accept/:id",isAuth(),acceptcustdmnd)
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
  Dmndrouter.get('/getdbyuser',(req, res) => {
    Demande.findOne({ user: req.user.id })
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


  




module.exports = Dmndrouter;

