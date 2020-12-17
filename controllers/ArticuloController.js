const models = require('../models');
const Categoria = require('../models').Categoria;

//listar y register
exports.list = async (req, res, next) => {
    try {
        const list = await models.Articulo.findAll({
            include: [{
                model: Categoria,
                as: 'categoria'
            }],
        });// metodo para llamar al modelo Categoria, mostrar su nombre y no ID
        if (list) {
            res.status(200).json(list)
        } else {
            res.status(500).send({
                message: 'No existe categoria en la base de datos'
            })
        }

    } catch (error) {
        res.status(200).send({
            message: 'No se listo Articulos'
        })
        next(error);
    }
}

exports.add = async (req, res, next) => {
    try {
        const registro = await models.Articulo.create(req.body);
        res.status(200).json(registro);

    } catch (error) {
        res.status(500).send({
            message: 'Error - Validar categoriaId!!!'
        })
        next(error); // para que continue y no se quede en el catch 
    }
}

exports.update = async (req, res, next) => {
    try {
        const update = await models.Articulo.update({
            categoriaId: req.body.categoria, nombre: req.body.nombre, descripcion: req.body.descripcion,
            precio_venta: req.body.precio_venta, stock: req.body.stock, imagen: req.body.imagen, codigo: req.body.codigo
        }, {
            where: {
                id: req.body.id
            }
        });
        res.status(200).json(update)
    } catch (error) {
        res.status(500).send({
            message: 'No se actualizo Articulo'
        })
        next(error);
    }
}

// actualizar validar como se actualiza
exports.activate = async (req, res, next) => {
    try {
        const update = await models.Articulo.update({ estado: 1 }, {
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
        const update = await models.Articulo.update({ estado: 0 }, {
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
