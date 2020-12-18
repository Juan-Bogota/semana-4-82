const bcrypt = require('bcryptjs');
const models = require('../models');
const tokenServices = require('../services/token')

exports.login = async (req, res, next) => {
    try {
        const user = await models.Usuario.findOne({ where: { email: req.body.email } });
        if (user) {
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if (passwordIsValid) {
                const tokenReturn = await tokenServices.encode(user.id, user.rol);

                res.status(200).json({ user, tokenReturn }); //user: user // datos hacia el front
            } else {
                res.status(401).json({
                    auth: false, accessToken: null,
                    reason: "Invalid Password or Account"
                })
            }
        } else {
            res.status(404).json({
                error: 'User Not Found' // status(404) => No encontrado
            })
        }

    } catch (error) {
        res.status(500).send({
            message: 'Error!!!'
        })
        next(error); // para que continue y no se quede en el catch 
    }
}


//listar y register
exports.list = async (req, res, next) => {
    try {
        const users = await models.Usuario.findAll();
        res.status(200).json(users)
    } catch (error) {
        res.status(500).send({
            message: 'Error!!!'
        })
        next(error);
    }
}

exports.register = async (req, res, next) => {
    try {
        const user = await models.Usuario.findOne({ where: { email: req.body.email } });
        if (!user) {
            req.body.password = await bcrypt.hashSync(req.body.password, 10);
            const user = await models.Usuario.create(req.body);
            res.status(200).json(user)
        } else {
            res.status(403).json({
                message: 'Usuario ya existe'
            })
        }

    } catch (error) {
        res.status(500).send({
            message: 'Error!!!'
        })
        next(error);
    }
}

// actualizar validar como se actualiza
exports.update = async (req, res, next) => {
    try {
        req.body.password = await bcrypt.hashSync(req.body.password, 10);
        const update = await models.Usuario.update({
            nombre: req.body.nombre, email: req.body.email,
            password: req.body.password, rol: req.body.rol
        }, {
            where: {
                id: req.body.id
            }
        });
        res.status(200).json(update)


    } catch (error) {
        res.status(403).json({
            message: 'Email ya existe en el sistema'
        });
        next(error);
    }
}


// actualizar validar como se actualiza
exports.activate = async (req, res, next) => {
    try {
        const update = await models.Usuario.update({ estado: 1 }, {
            where: {
                id: req.body.id
            }
        });
        res.status(200).json(update)
    } catch (error) {
        res.status(500).send({
            message: 'No exitoso'
        })

        next(error);
    }
}

exports.deactivate = async (req, res, next) => {
    try {
        const update = await models.Usuario.update({ estado: 0 }, {
            where: {
                id: req.body.id
            }
        });
        res.status(200).json(update)
    } catch (error) {
        res.status(500).send({
            message: 'No exitoso'
        })

        next(error);
    }
}

