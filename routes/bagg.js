const express = require("express");
const {
  addDemande,
  getDemandeClient,
  getDemandeChef,
  updateDemande,
  deleteDemande,
  getAcceptedDemandeChef,
  getDemande,
  updateStatus,
  updateStatusToPending,
  updateStatusToDone,
} = require("../controllers/bagg");
const router = express.Router();
const isCust=require('../middleware/isCust')
const isStorek=require('../middleware/isStorek')


router.get("/client/alldemande", isAuth, isCust, getDemandeClient);
router.post("/:id_chef", isAuth, isCust, addDemande);
router.get("/chef", isAuth, isStorek, getDemandeChef);
router.get("/:id_demande", isAuth, isCust, getDemande);
router.get("/accepteddemandechef", isAuth, isStorek, getAcceptedDemandeChef);
router.put("/:id_demande", isAuth, isCust, updateDemande);
router.put(
  "/updateStatusToPending/:id_demande",
  isAuth,
  isStorek,
  updateStatusToPending
);
router.put(
  "/updateStatusToDone/:id_demande",
  isAuth,
  isStorek,
  updateStatusToDone
);

router.delete("/:id_demande", isAuth, isCust, deleteDemande);

module.exports = router;