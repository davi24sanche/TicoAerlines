const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt-nodejs');

const vueloSchema = new Schema({
    ID_ZonaOrigen: {
      type: Number,
      required: true,
    },
    ID_ZonaDestino: {
      type: Number,
      required: true,
    },
    Descripcion: {
        type: String,
        required: true,
      },
      ID_Ruta: {
        type: Number,
        required: true,
      },
      ID_Avion: {
        type: Number,
        required: true,
      },
  });
  const VueloModel = model("Vuelo", vueloSchemaSchema);
  module.exports = vueloSchemaModel;