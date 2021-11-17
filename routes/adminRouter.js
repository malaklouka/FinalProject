const express = require("express");
const {
  getAllCust,
  AllStorek,
  BannUser,
  deleteUser,getNumCust,getNumStore
} = require("../controllers/admin");
const isAdmin = require("../middleware/admin");
const adminrouter = express.Router();
const isAuth=require('../middleware/passport')

adminrouter.put("/bannedUser/:id", isAuth(), isAdmin, BannUser);
adminrouter.delete("/deleteUser/:id", isAuth(), isAdmin, deleteUser);
adminrouter.get("/allCust", isAuth(), isAdmin, getAllCust);
adminrouter.get("/allstorek", isAuth(), isAdmin, AllStorek);

adminrouter.get("/allstorek/num", isAuth(), isAdmin, getNumStore);
adminrouter.get("/allCust/num", isAuth(), isAdmin, getNumCust);


module.exports = adminrouter;