const express = require("express");
const router = express.Router();
const UserModel = require("../models/User");
const controller = require("../controllers/userController");

//Autenticación para el uso del API
const auth = require("../middleware/auth");
const { permit } = require("../middleware/authorization");

router.get("/", controller.get);

router.get("/:id", controller.getById);

router.post("/", controller.signup);

router.post("/", controller.signin);

router.delete("/:id", controller.delete);

// actualizar registro
router.put("/:id", controller.update);

module.exports = router;