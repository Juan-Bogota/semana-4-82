const models = require('../models');


//list
exports.list = async (req, res, next) => {
    try {
        const list = await models.Categoria.findAll();
        if (list) {
            res.status(200).json(list)
        } else {
            res.status(404).send({
                message: 'No existe categoria en la base de datos'
            })
        }
    } catch (error) {
        res.status(500).send({
            message: 'Error listar Categoria!!'
        })
        next(error);
    }
}

exports.add = async (req, res, next) => {
    try {
        const registro = await models.Categoria.create(req.body);
        res.status(200).json(registro);

    } catch (error) {
        res.status(500).send({
            message: 'No se pudo crear categoria!!'
        })
        next(error);
    }
}


exports.update = async (req, res, next) => {
    try {
        const update = await models.Categoria.update({ nombre: req.body.nombre, descripcion: req.body.descripcion }, {
            where: {
                id: req.body.id
            }
        });
        res.status(200).json(update)

    } catch (error) {
        res.status(500).send({
            message: 'categoria no actualizada'
        })

        next(error);
    }
}

// actualizar validar como se actualiza
exports.activate = async (req, res, next) => {
    try {
        const update = await models.Categoria.update({ estado: 1 }, {
            where: {
                id: req.body.id
            }
        });
        res.status(200).json(update);
    } catch (error) {
        res.status(500).send({
            message: 'No exitoso Activate'
        });

        next(error);
    }
}

exports.deactivate = async (req, res, next) => {
    try {
        const update = await models.Categoria.update({ estado: 0 }, {
            where: {
                id: req.body.id
            }
        });
        res.status(200).json(update)
    } catch (error) {
        res.status(404).send({
            message: 'No exitoso Deactivate'
        })

        next(error);
    }
}
