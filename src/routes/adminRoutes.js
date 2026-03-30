const express = require("express");
const router = express.Router();

const auth = require("../middlewares/authMiddleware");
const { authorize } = require("../middlewares/roleMiddleware");

const {
  createAdmin,
  getAdmins,
  updateAdmin,
  deleteAdmin,
} = require("../controllers/adminController");

router.post("/", auth, authorize("superadmin"), createAdmin);
router.get("/", auth, authorize("superadmin"), getAdmins);
router.put("/:id", auth, authorize("superadmin"), updateAdmin);
router.delete("/:id", auth, authorize("superadmin"), deleteAdmin);

module.exports = router;