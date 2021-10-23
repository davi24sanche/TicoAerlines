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

