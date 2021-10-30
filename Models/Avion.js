const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt-nodejs');

const RuteSchema = new Schema({
    ID_Ruta: {
      type: Number,
      required: true,
    },
    ID_TipoAvion: {
      type:  [{ type: String, ref: "tipoAvion" }],
      required: true,
    },
  });
  module.exports = model("Avion", RuteSchema);