const express = require("express");
const router = express.Router();

const auth = require("../middlewares/authMiddleware");
const { authorize } = require("../middlewares/roleMiddleware");

const {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

router.post("/", auth, authorize("admin", "superadmin"), createUser);
router.get("/", auth, authorize("admin", "superadmin"), getUsers);
router.put("/:id", auth, authorize("admin", "superadmin"), updateUser);
router.delete("/:id", auth, authorize("admin", "superadmin"), deleteUser);

module.exports = router;