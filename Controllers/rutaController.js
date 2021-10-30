const RuteModel = require("../models/Rutas");


//Se obtienen las variables de entorno
const config = process.env;

// Se crean los nuevos tipos de avion

module.exports.create = async (req, res, next) => {
    const { horario, descripcion, duracion, precio} = req.body;
    console.log(req.body);  
    const ruta = new RuteModel({ horario, descripcion, duracion, precio });
    console.log(ruta);
    ruta.save();
    res.json(author)
    
};