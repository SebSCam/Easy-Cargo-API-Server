const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const { authjwt, verifyReg } = require("../middlewares");

router.post(
  "/create",
  [authjwt.verifyToken, authjwt.isAdmin, verifyReg.checkRolesExisted],
  userController.createUser
);

router.get(
  "/",
  [authjwt.verifyToken, authjwt.isAdmin],
  userController.getUsers
);

module.exports = router;