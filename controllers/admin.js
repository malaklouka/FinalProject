const User = require("../models/user");
const Bag = require("../models/bag");


exports.BannUser = async (req, res) => {
  try {
    //   get user id clicked
    const { id } = req.params;
    const findUser = await User.findOne({ _id: id });
    await User.updateOne(
      {
        _id: id,
      },
      {
        $set: { banned: !findUser.banned },
      }
    );
    res.status(200).send({ msg: "user banned succefully" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: [{ msg: "can not bann the user" }] });
  }
};

exports.getAllCust = async (req, res) => {
  try {
    const cust = await User.find({ role: "customer" })
    res.send({ msg: "cust succ", cust });
 
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "can not get the currentUser" }] });
  }
};
exports.getNumCust= async (req,res)=>{
  try {
    const cust = await User.find({ role: "customer" }).count()
    res.send({ msg: "cust succ", cust });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "cant get the cust" }] });
  }
}

exports.getNumStore= async (req,res)=>{
  try {
    const storek = await User.find({ role: "storekeeper" }).count()
    res.send({ msg: "storek succ", storek });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "can not get the storek" }] });
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await User.deleteOne({ _id: id });
    await Bag.deleteMany({ id_customer: id });
    await Bag.deleteMany({ id_storekeeper: id });
    res.status(200).send({ msg: "deleting  succ" });
  } catch (error) {
    res
      .status(400)
      .send({ errors: [{ msg: "can not delete the currentUser" }] });
  }
};
exports.AllStorek = async (req, res) => {
  try {
    const storek = await User.find({ role: "storekeeper" });
    res.send({ msg: "getting succ", storek });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "can not get the currentUser" }] });
  }
};