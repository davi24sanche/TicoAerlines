const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt-nodejs');

const RuteSchema = new Schema({
    ID_Ruta: {
      type: Number,
      required: true,
    },
    ID_Ruta: {
        type: Image,
        required: true,
      },
  });
  const RuteModel = model("Zona", RuteSchema);
  module.exports = RuteModel;