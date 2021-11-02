const express = require("express");
const router = express.Router();
const UserModel = require("../models/User");
const controller = require("../controllers/userController");

router.get("/", controller.get);

router.get("/:id", controller.getById);

router.post("/", controller.save);

router.delete("/:id", controller.delete);

// actualizar registro
router.put("/:id", controller.update);

module.exports = router;