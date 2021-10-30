const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt-nodejs');

const RuteSchema = new Schema({
    ID_Ruta: {
      type: int,
      required: true,
    },
    ID_TipoAvion: {
      type: int,
      required: true,
    },
  });
  const RuteModel = model("Avion", RuteSchema);
  module.exports = RuteModel;