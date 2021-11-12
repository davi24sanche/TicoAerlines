const ZonaModel = require("../models/Zona");
const jwt = require('jsonwebtoken');

//Se obtienen las variables de entorno
const config = process.env;

// Se crean las nuevas zonas
module.exports.save = async (req, res, next) => {
    const { descripcion} = req.body;
    console.log(req.body);
    if (descripcion ==null || descripcion.isEmpty()) {
        res.json({ success: false, msg: 'Por favor llené los campos' });
    } else {
        var newZona = new TipoAvionModel({ descripcion: descripcion});
        console.log(newZona);
        newTipo.save(function (err) {
            if (err) {
                return res.json({ success: false, msg: 'Esta zona ya ha sido registrada previamente' });
            }
            res.json({ success: true, msg: 'La zona fue registrada correctamente' });
        });
    }
};

//Se obtiene la zona
module.exports.get = async (req, res, next) =>{
    const avion = await ZonaModel.find().exec();
    res.json(avion)
}

//Se obtiene la zona por el ID
module.exports.getById = async (req, res, next) => {
    const id = req.params.id;
    const ruta = await ZonaModel.findById(id).exec();
    res.json(ruta);
};

//Se elimina la zona
module.exports.delete = async (req, res, next) => {
    const ruta = await ZonaModel.findByIDAndRemove(req.params.id);
    if (ruta) {
      res.json({ result: "Zona borrada correctamente", post: ruta });
    } else {
      res.json({ result: "Id de la zona invalido", post: ruta });
    }
  };

  //Se actualiza el avión
  module.exports.update = async (req, res, next) => {
    const { name, info } = req.body;
    const ruta = await ZonaModel.findOneAndUpdate(
      { _id: req.params.id },
      { descripcion}, // ==> {title: title, body: body}
      { new: true } // retornar el registro que hemos modificado con los nuevos valores
    );
    res.json(zona);
  };