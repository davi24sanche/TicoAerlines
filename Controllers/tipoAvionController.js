const UserModel = require("../models/TipoAvion");
const jwt = require('jsonwebtoken');

//Se obtienen las variables de entorno
const config = process.env;

// Se crean los nuevos tipos de avion

module.exports.saveTipoAvion = async (req, res, next) => {
    const { id, anio, modelo, marca, cant_Filas, cant_Asientos } = req.body;
    console.log(req.body);
    if (id==null || anio==null || modelo==null || marca==null || cant_Filas==null || cant_Asientos==null) {
        res.json({ success: false, msg: 'Por favor digíte llenas los campos' });
    } else {
        var newTipo = new UserModel({ id: id, anio: anio, modelo: modelo, marca: marca, cant_Filas: cant_Filas, cant_Asientos: cant_Asientos });
        console.log(newTipo);
        // save the user
        newTipo.save(function (err) {
            if (err) {
                return res.json({ success: false, msg: 'Este tipo de avión ya ha sido registrado previamente' });
            }
            res.json({ success: true, msg: 'El tipo de avión fue registrado correctamente' });
        });
    }
};