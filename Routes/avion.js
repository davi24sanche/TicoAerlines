const express = require("express");
const router = express.Router();
const AvionModel = require("../models/Avion");
const controller = require("../controllers/avionController");

router.get("/", controller.get);

router.get("/:id", controller.getById);

router.post("/", controller.save);

router.delete("/:id", controller.delete);

router.put("/:id", controller.update);

module.exports = router;