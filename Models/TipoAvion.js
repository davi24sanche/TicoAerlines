
//Esquema para controlar el tipo de avión en la app

const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt-nodejs');

const tipoAvionSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  anio: {
    type: Number,
    required: true,
  },
  marca: {
    type: String,
    required: true,
  },
  cant_Filas: {
    type: Number,
    required: true,
  },
  cant_Asientos: {
    type: Number,
    required: true,
  },
});

const tipoAvionModel = model("TipoAvion", tipoAvionSchema);

module.exports = tipoAvionModel;