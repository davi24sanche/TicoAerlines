const TipoAvionModel = require("../models/Avion");
const jwt = require('jsonwebtoken');

//Se obtienen las variables de entorno
const config = process.env;

// Se crean los nuevos aviones
module.exports.save = async (req, res, next) => {
    const { ID_Ruta, ID_TipoAvion } = req.body;
    console.log(req.body);
    if (ID_Ruta ==null || ID_Ruta.isEmpty()|| ID_TipoAvion ==null || ID_TipoAvion.isEmpty()) {
        res.json({ success: false, msg: 'Por favor llené los campos' });
    } else {
        var newAvion = new TipoAvionModel({ ID_Ruta: ID_Ruta, ID_TipoAvion: ID_TipoAvion });
        console.log(newAvion);
        newTipo.save(function (err) {
            if (err) {
                return res.json({ success: false, msg: 'Este avión ya ha sido registrado previamente' });
            }
            res.json({ success: true, msg: 'El avión fue registrado correctamente' });
        });
    }
};

//Se obtiene el avión
module.exports.get = async (req, res, next) =>{
    const avion = await TipoAvionModel.find().exec();
    res.json(avion)
}

//Se obtiene el avión por el ID
module.exports.getById = async (req, res, next) => {
    const id = req.params.id;
    const ruta = await TipoAvionModel.findById(id).exec();
    res.json(ruta);
};

//Se elimina el avión
module.exports.delete = async (req, res, next) => {
    const ruta = await TipoAvionModel.findByIDAndRemove(req.params.id);
    // si post es null significa que no existe el registro
    if (ruta) {
      res.json({ result: `Ruta borrada correctamente`, post: ruta });
    } else {
      res.json({ result: "Id de la ruta invalida", post: ruta });
    }
  };

  //Se actualiza el avión
  module.exports.update = async (req, res, next) => {
    const { name, info } = req.body;
    const ruta = await TipoAvionModel.findOneAndUpdate(
      { _id: req.params.id },
      { ID_Ruta, ID_TipoAvion}, // ==> {title: title, body: body}
      { new: true } // retornar el registro que hemos modificado con los nuevos valores
    );
    res.json(ruta);
  };