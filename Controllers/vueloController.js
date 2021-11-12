const vueloModel = require("../models/Vuelo");
const jwt = require('jsonwebtoken');

//Se obtienen las variables de entorno
const config = process.env;

// Se crean las nuevas zonas
module.exports.save = async (req, res, next) => {
    const { ID_ZonaOrigen, ID_ZonaDestino, descripcion, ID_Ruta, ID_Avion} = req.body;
    console.log(req.body);
    if (ID_ZonaOrigen ==null || ID_ZonaDestino ==null || descripcion ==null || ID_Ruta== null || ID_Avion== null || ID_ZonaOrigen.isEmpty() || ID_ZonaDestino.isEmpty() || descripcion.isEmpty() || ID_Ruta.isEmpty() || ID_Avion.isEmpty()) {
        res.json({ success: false, msg: 'Por favor llené los campos' });
    } else {
        var newVuelo = new vueloModel({ ID_ZonaOrigen: ID_ZonaOrigen, ID_ZonaDestino: ID_ZonaDestino, descripcion: descripcion, ID_Ruta: ID_Ruta, ID_Avion: ID_Avion});
        console.log(newVuelo);
        newTipo.save(function (err) {
            if (err) {
                return res.json({ success: false, msg: 'Este vuelo ya ha sido registrado previamente' });
            }
            res.json({ success: true, msg: 'El vuelo fue registrado correctamente' });
        });
    }
};

//Se obtiene el vuelo
module.exports.get = async (req, res, next) =>{
    const avion = await vueloModel.find().exec();
    res.json(avion)
}

//Se obtiene el vuelo por el ID
module.exports.getById = async (req, res, next) => {
    const id = req.params.id;
    const ruta = await vueloModel.findById(id).exec();
    res.json(ruta);
};

//Se elimina el vuelo
module.exports.delete = async (req, res, next) => {
    const ruta = await vueloModel.findByIDAndRemove(req.params.id);
    if (ruta) {
      res.json({ result: "Vuelo borrado correctamente", post: ruta });
    } else {
      res.json({ result: "Id del vuelo invalido", post: ruta });
    }
  };

  //Se actualiza el vuelo
  module.exports.update = async (req, res, next) => {
    const { name, info } = req.body;
    const ruta = await vueloModel.findOneAndUpdate(
      { _id: req.params.id },
      { ID_ZonaOrigen, ID_ZonaDestino, descripcion, ID_Ruta, ID_Avion}, // ==> {title: title, body: body}
      { new: true } // retornar el registro que hemos modificado con los nuevos valores
    );
    res.json(zona);
  };