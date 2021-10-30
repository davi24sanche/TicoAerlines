const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt-nodejs');

const RuteSchema = new Schema({
    descripcion: {
      type: String,
      required: true,
    },
  });
  const RuteModel = model("Zona", RuteSchema);
  module.exports = RuteModel;