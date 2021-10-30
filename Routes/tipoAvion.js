const express = require("express");
const router = express.Router();
const UserModel = require("../models/TipoAvion");
const userController = require("../controllers/tipoAvionController");

router.post("/", userController.saveTipoAvion);



module.exports = router;