//get reservation of cust
const User = require("../models/user");
const Profile=require('../models/profile')
{/*exports.getProfile = async (req, res) => {
    try {
      const profile = await Profile.findOne({ id_storekeeper: req.params.id }).populate(
        "id_storekeeper"
      );
      res.status(200).send({ msg: "demande saved successfully", profile });
    } catch (error) {
      console.log(error);
      res
        .status(400)
        .send({ errors: [{ msg: "can not add this demande", error }] });
    }
  };
*/}

