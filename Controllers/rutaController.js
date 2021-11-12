const RuteModel = require("../models/Rutas");

//Se obtienen las variables de entorno
const config = process.env;

// Se crean las nuevas rutas
module.exports.create = async (req, res, next) => {
    const { horario, descripcion, duracion, precio} = req.body;
    if(horario=null || descripcion==null || duracion==null || precio==null || horario.isEmpty() || descripcion.isEmpty()  || duracion.isEmpty()  || precio.isEmpty() ){
      res.json({sucess:false,msg:"Debe rellenar todos los campos"});
    }
    else{
    console.log(req.body);
    const ruta = new RuteModel({ horario, descripcion, duracion, precio });
      console.log(ruta);
    ruta.save().catch((error)=>{
      res.json({"error al crear ruta":error});
      console.log(error);
    });
    }
    res.json(ruta)
};

module.exports.get = async (req, res, next) =>{
    const ruta = await RuteModel.find().exec();
    ruta==null?console.log("No existe datos"):res.json(ruta);

}

module.exports.getById = async (req, res, next) => {
    const id = req.params.id;
    const ruta = await RuteModel.findById(id).exec();
    ruta==null?res.json({"Mensaje":"No existe la ruta solicitada"}):res.json(ruta);
    //res.json(ruta);
};

module.exports.delete = async (req, res, next) => {

    const ruta = await RuteModel.findByIdAndRemove(req.params.id).exec();
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