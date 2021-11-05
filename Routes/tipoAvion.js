const express = require("express");
const router = express.Router();
const TipoAvionModel = require("../models/TipoAvion");
const avionController = require("../controllers/tipoAvionController");

router.post("/", avionController.create);



module.exports = router;