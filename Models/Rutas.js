const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt-nodejs');

const RuteSchema = new Schema({
    horario: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    duracion: {
      type: String,
    },
    precio:{
        type: Number,
        required: true,
    },
  });
  const RuteModel = model("Ruta", RuteSchema);
  module.exports = RuteModel;