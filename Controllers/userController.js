const UserModel = require("../models/User");
const jwt = require('jsonwebtoken');

//Se obtienen las variables de entorno
const config = process.env;


// Se crean los nuevos usuarios
module.exports.signup = async (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.json({ success: false, msg: 'Por favor digíte su usuario y su contraseña' });
    } else {
        var newUser = new UserModel({ username: username, password: password });
        console.log(newUser);
        // save the user
        newUser.save(function (err) {
            if (err) {
                return res.json({ success: false, msg: 'Este usuario ya exite' });
            }
            res.json({ success: true, msg: 'Usuario creado con éxito' });
        });
    }
};


// Aca se loguean los usuarios

module.exports.signin = async (req, res, next) => {

    const { username, password } = req.body;

    const user = await UserModel.findOne({ username: username }).exec();

    if (!user) {
        res.status(401).send({ success: false, msg: 'Error en la autenticación, el usuario no se ha encontrado' });
    } else {
        //Si el usuario existe verifica si las contraseñas
        user.comparePassword(password, user.password, function (err, isMatch) {
            if (isMatch && !err) {
                // Si el usuario es correcto y la contraseña coindice se procede a crear el TOKEN
                const token = jwt.sign({ "username": username},
                                         "dfgdfadrhtdzfbsfrfssbrsrbesrvvvhgsadfgbaertergdn",
                                         { expiresIn: "2h"}
                                       );
                // retorna la informacion incluyendo el token en formato json
                res.json({ success: true, token: 'JWT ' + token });

            } else {
                //si la contraseña no coincide se procede a indicar el error
                res.status(401).send({ success: false, msg: 'Ups..Fallo en la autenticación, contraseña incorrecta' });
            }
        });
    }
};

//Se obtiene el usuario
module.exports.get = async (req, res, next) =>{
    const avion = await UserModel.find().exec();
    res.json(avion)
}

//Se obtiene el usuario por el ID
module.exports.getById = async (req, res, next) => {
    const id = req.params.id;
    const ruta = await UserModel.findById(id).exec();
    res.json(ruta);
};

//Se elimina el usuario
module.exports.delete = async (req, res, next) => {
    const ruta = await UserModel.findByIDAndRemove(req.params.id);
    if (ruta) {
      res.json({ result: "Usuario borrado correctamente", post: ruta });
    } else {
      res.json({ result: "Id del usuario invalido", post: ruta });
    }
  };

  //Se actualiza el usuario
  module.exports.update = async (req, res, next) => {
    const { name, info } = req.body;
    const ruta = await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      { username, password}, // ==> {title: title, body: body}
      { new: true } // retornar el registro que hemos modificado con los nuevos valores
    );
    res.json(zona);
  };

