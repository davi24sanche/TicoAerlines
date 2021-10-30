const TicketModel = require("../models/Tickets");
const jwt = require('jsonwebtoken');

//Se obtienen las variables de entorno
const config = process.env;

// Se crean los nuevos tipos de avion

module.exports.save = async (req, res, next) => {
    const { monto, fechaCompra, ID_Vuelo, ID_Usuario, ID_Asiento } = req.body;
    console.log(req.body);
    if (monto==null || fechaCompra==null || ID_Vuelo==null || ID_Usuario==null || ID_Asiento==null) {
        res.json({ success: false, msg: 'Por favor digíte llenas los campos' });
    } else {
        var newTicket = new TicketModel({ monto: monto, fechaCompra: fechaCompra, ID_Vuelo: ID_Vuelo, ID_Usuario: ID_Usuario, ID_Asiento: ID_Asiento });
        console.log(newTicket);
        // save the user
        newTipo.save(function (err) {
            if (err) {
                return res.json({ success: false, msg: 'Este ticket ya ha sido registrado previamente' });
            }
            res.json({ success: true, msg: 'El ticket fue registrado correctamente' });
        });
    }
};

//Se obtiene el vuelo
module.exports.get = async (req, res, next) =>{
    const avion = await TicketModel.find().exec();
    res.json(avion)
}

//Se obtiene el vuelo por el ID
module.exports.getById = async (req, res, next) => {
    const id = req.params.id;
    const ruta = await TicketModel.findById(id).exec();
    res.json(ruta);
};

//Se elimina el vuelo
module.exports.delete = async (req, res, next) => {
    const ruta = await TicketModel.findByIDAndRemove(req.params.id);
    if (ruta) {
      res.json({ result: "Ticket borrado correctamente", post: ruta });
    } else {
      res.json({ result: "Id del ticket invalido", post: ruta });
    }
  };

  //Se actualiza el vuelo
  module.exports.update = async (req, res, next) => {
    const { name, info } = req.body;
    const ruta = await TicketModel.findOneAndUpdate(
      { _id: req.params.id },
      { monto, fechaCompra, ID_Vuelo, ID_Usuario, ID_Asiento}, // ==> {title: title, body: body}
      { new: true } // retornar el registro que hemos modificado con los nuevos valores
    );
    res.json(zona);
  };