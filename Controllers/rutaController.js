const RuteModel = require("../models/Rutas");

//Se obtienen las variables de entorno
const config = process.env;

// Se crean las nuevas rutas

module.exports.create = async (req, res, next) => {
    const { horario, descripcion, duracion, precio} = req.body;
    console.log(req.body);  
    const ruta = new RuteModel({ horario, descripcion, duracion, precio });
    console.log(ruta);
    ruta.save();
    res.json(author)   
};

module.exports.get = async (req, res, next) =>{
    const ruta = await RuteModel.find().exec();
    res.json(ruta)
}

module.exports.getById = async (req, res, next) => {
    const id = req.params.id;
    const ruta = await RuteModel.findById(id).exec();
    res.json(ruta);
};

module.exports.delete = async (req, res, next) => {
    const ruta = await RuteModel.findByIDAndRemove(req.params.id);
    // si post es null significa que no existe el registro
    if (ruta) {
      res.json({ result: `Ruta borrada correctamente`, post: ruta });
    } else {
      res.json({ result: "Id de la ruta invalida", post: ruta });
    }
  };
  
  module.exports.update = async (req, res, next) => {
    const { name, info } = req.body;
    const ruta = await RuteModel.findOneAndUpdate(
      { _id: req.params.id },
      { horario, descripcion, duracion, precio}, // ==> {title: title, body: body}
      { new: true } // retornar el registro que hemos modificado con los nuevos valores
    );
    res.json(ruta);
  };