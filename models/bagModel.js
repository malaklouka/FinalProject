const mongoose = require("mongoose")

const BaggSchema =new mongoose.Schema({
  id_customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  id_storekeeper: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "user",
    required: true,
  },
  text: { type: String, required: true },
  dueDate: { type: Date, required: true },

  approved: { type: Boolean, default: false },
  status: {
    type: String,
    enum: ["send", "pending", "done"],
    default: "send",
  },
});

module.exports = Bagg = mongoose.model("bagg", BaggSchema)