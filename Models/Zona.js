const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt-nodejs');

const zonaSchema = new Schema({
    descripcion: {
      type: String,
      required: true,
    },
  });
  const zonaModel = model("Zona", zonaSchema);
  module.exports = zonaModel;