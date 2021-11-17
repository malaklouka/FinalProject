const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  id_storekeeper: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  adresse: { 
      type: String
    },
  category: {
       type: String 
    }, 
  gender: {
       type: String, enum: ["male", "female"]
    },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);