const Demande = require("../models/Demande");
const User=require("../models/user")
const Bag=require("../models/bag")
//customerMiddelware==> only cust can add/delete/get his demande
//storek middelware ==> only storek can accepte/refuse get custdemnd 

exports.addTo=async(req,res)=>{
  try {
    await User.findOneAndUpdate({id:req.user._id},{demande:req.body})
const finduser=await User.findById(req.user._id)
res.send({msg:"successfult added",user:finduser})
    
  } catch (error) {
   res.status(400).send({error,msg:"error while demande"}) 
  }
}


//get all the cust dmnd 
exports.getDemandeCust = async (req, res) => {
  try {
    const demandes = await Demande.find().populate(
      "id_bag id_customer"
    );
    res.status(200).send({ msg: "the demandes of customer ", demandes });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({ errors: [{ msg: "error", error }] });
  }
};

// GET ALL DMND
exports.getDemande = async (req, res) => {
  try {
    const alldemande = await Demande.find().exec()
    res.status(200).send({ msg: "demande saved successfully", alldemande });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({ errors: [{ msg: "can not add this demande", error }] });
  }
};
//cust: add bag to mes dmnds
exports.addtoDemande = async (req, res) => {
  try {
    const id_bag = req.body._id
    const { id_customer } = req.params
    
    const newDemande = new Demande({   ...req.body, userId: req.user})
//verif if ag exist or not
{/*const existed=await Demande.findOne({id_bag})
if (existed){
    return res.status(200).send({msg:"this bag already exist"})
}*/}

    await newDemande.save()
    res.status(200).send({ newDemande,msg: "congrats your demande is saved with success :) " })
  } catch (error) { 
    console.log(error)
    res.status(400).send({ errors: [{ msg: "oops!! we cannot add this demande", error }] })
  }
}
//get mydmnd 1*
exports.getMyDmnd = async (req, res) => {
  try {
    const demande = await Demande.find({ user: req.user }).populate('_id')
  
    res.status(200).send({ msg: "success",  demande });
  } catch (err) {
    console.log(err.message); 
    res.status(400).send({ msg: "error", msg: err.message });
  } 
};
//

 


//get dmd by id
exports.getdmndbyid=async(req,res)=>{
  try {
    //test adresse id demande
    const { id } = req.params
    const oneDemande= await Demande.findById(id)
      res.send({oneDemande,msg:"bag successfully "})
  } catch (error) {
      console.log(error)
      res.status(401).send({msg:"error while getting one bag"})
  }
  }
//add items to demand !!!
  exports.addItems=(req,res)=>{
    Demande.findOne({user:req.user._id}).exec((error,demand)=>{
      if (error) return res.status(400).send({error})
if (demand){
  //test if demand exists => increment quantity
//res.status(200).send({msg:demand})
const bagg=req.body.items.bag
console.log(bagg)
const itemm=demand.items.find((c)=> c.bagg === bagg )
console.log(itemm)
if (itemm){
  Demande.findOneAndUpdate({"user":req.user._id,"items.bag":bagg},{
    "$set": {
      "items":{...req.body.items,
      quantity: Number(itemm.quantity) +Number(req.body.items.quantity)}
    } 
  }).exec((error,_demand)=>{ 
    if (error) return res.status(400).send({error})
    if (_demand){
      return res.status(201).send({demand:_demand})
    }
  })
}else {
  Demande.findOneAndUpdate({user:req.user._id},{
    "$push": {
      "items":req.body.items
    }
  }).exec((error,_demand)=>{
    if (error) return res.status(400).send({error})
    if (_demand){
      return res.status(201).send({demand:_demand})
    }
  })
}

}else{
  //if doesnt exist create new one 
  const demand= new Demande({user:req.user._id, items:[req.body.items]})

demand.save((error,demand)=>{ 
  if (error) return res.status(400).send({error})
  if(demand){
    return res.status(201).send({demand})
  }
})
}
    })
  }
  




//GET ACCEPTED DEMANDE !!
exports.getAcceptedDemande = async (req, res) => {
  try {

    const user = req.user;
console.log(user)
    const demandes = await Demande.find({
     user, isAccepted: true ,
    }).populate('id_bag id_customer')
    console.log(demandes)

    res.status(200).send({ msg: "accepted demandes", demandes }); 
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({ errors: [{ msg: "OOPS! ", error }] });
  }
};
//accept demande
{/*exports.acceptdmnd = async (req, res) => {
  try {
    await Demande.updateOne(
      { _id: req.params.id_demande },
      { $set: { isAccepted: true} }
    );

    res.status(200).send({ msg: "demande updated successfully" });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "", error }] });
  }
};*/}





//accept dmnd!!!
exports.acceptcustdmnd = async (req, res)  => {
  const id  = req.params._id
  
  const dmd = await Demande.find(id)
console.log(dmd)
  const result = await Demande.updateOne(id,{isAccepted:!dmd.isAccepted},{ new: true });
console.log(result)  
  res.send({result,msg:"demande is accepted"})
}

//cust cancel dmnd
exports.cancelDemande = async (req, res) => {
  try {
    const findDemande = await Demande.findOne({ _id: req.params.id });
    if (findDemande.isAccepted) {
      res.send({ msg: "sorry this demande it is accepted you cant cancel it " });
    } else {
      await Demande.deleteOne({ _id: req.params.id });
    }
    res.status(200).send({ msg: "Hollas! demande is cancelled!!" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: [{ msg: "can not cancel this demande", error }] });
  }
};
{/*exports.cancelDemande = async (req, res) => {
  const { id } = req.params
  try {
 

   const result = await Demande.findByIdAndRemove(id)
   console.log(result)
        res.send({message:"hollas!!this demande is cancelled.."})
 
     
  } catch (error) {
    
    console.dir(error);
    res
      .status(400)
      .send({ errors: [{ msg: "cant cancel this demande", error }] });
  }
}
*/}


//storek refuse
//change the status of bag ===> bagrouter 




//envoyer dmnd
{/*exports.addDemande = async (req, res) => {
  try {
    const {id} = req.params
    const newDemande = new Demande({ ...req.body, id });
    await newDemande.save();
    res.status(200).send({ msg: "demande saved successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({ errors: [{ msg: "can not add this demande", error }] });
  }
};
//get the dmnd of cust
exports.getDemandeCust = async (req, res) => {
  try {
    const demandes = await Demande.find({ id_cust: req.user._id }).populate(
      "id_storek id_cust"
    );
    res.status(200).send({ msg: "demande saved successfully", demandes });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({ errors: [{ msg: "can not add this demande", error }] });
      console.log(error)
  }
};
//get one dmnd
exports.getDemande = async (req, res) => {
  try {
    const demande = await Demande.find({
      _id: req.params.id_demande,
    });
    res.status(200).send({ msg: "demande saved successfully", demande });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({ errors: [{ msg: "can not add this demande", error }] });
  }
};
//dmnd of storek
exports.getDemandeStore = async (req, res) => {
  try {
    const demandes = await Demande.find({ id_storek: req.user._id });

    res.status(200).send({ msg: "demande saved successfully", demandes });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({ errors: [{ msg: "can not add this demande", error }] });
  }
};

exports.getAcceptedDemandeStore = async (req, res) => {
  try {
    const demandes = await Demande.find({
      $and: [{ id_storek: req.user._id }, { approved: true }],
    });
    res.status(200).send({ msg: "accepted demandes", demandes });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({ errors: [{ msg: "can not get this demande", error }] });
  }
};
//edit approved dmnd
exports.updateDemande = async (req, res) => {
  try {
    const findDemande = await Demande.findOne({ _id: req.params.id_demande });
    if (findDemande.approved) {
      res.send({ msg: "you can not modify this demande after it is approved" });
    } else {
      await Demande.updateOne(
        { _id: req.params.id_demande },
        { $set: { ...req.body } }
      );
    }
    res.status(200).send({ msg: "demande updated successfully", findDemande });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({ errors: [{ msg: "can not add this demande", error }] });
  }
};
//delete dmnd
exports.deleteDemande = async (req, res) => {
  try {
    const findDemande = await Demande.findOne({ _id: req.params.id_demande });
    if (findDemande.approved) {
      res.send({ msg: "you can not delete this demande after it is approved" });
    } else {
      await Demande.deleteOne({ _id: req.params.id_demande });
    }
    res.status(200).send({ msg: "demande deleted successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({ errors: [{ msg: "can not add this demande", error }] });
  }
};
//edit the status of dmnd
exports.updateStatusToPending = async (req, res) => {
  try {
    await Demande.updateOne(
      { _id: req.params.id_demande },
      { $set: { approved: true, status: "pending" } }
    );

    res.status(200).send({ msg: "demande updated successfully" });
  } catch (error) {
    res
      .status(400)
      .send({ errors: [{ msg: "can not update this demande", error }] });
  }
};
//status of dmnd is done
exports.updateStatusToDone = async (req, res) => {
  try {
    await Demande.updateOne(
      { _id: req.params.id_demande },
      { $set: { status: "done" } }
    );

    res.status(200).send({ msg: "demande updated successfully" });
  } catch (error) {
    res
      .status(400)
      .send({ errors: [{ msg: "can not update this demande", error }] });
  }
};*/}