const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt-nodejs');

const RuteSchema = new Schema({
    ID_Ruta: {
      type: Number,
      required: true,
    },
    ID_TipoAvion: {
      type: Number,
      required: true,
    },
  });
  const RuteModel = model("Avion", RuteSchema);
  module.exports = RuteModel;