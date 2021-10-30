const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt-nodejs');

const TicketsSchema = new Schema({
    monto: {
      type: Number,
      required: true,
    },
    fecha_Compra: {
      type: Date,
      required: true,
    },
    ID_Vuelo: {
      type: Number,
    },
    ID_Usuario:{
        type: Number,
        required: true,
    },
    ID_Asiento:{
        type: Number,
        required: true,
    },
  });
  const TicketsModel = model("Tickets", RuteSchema);
  module.exports = TicketsModel;