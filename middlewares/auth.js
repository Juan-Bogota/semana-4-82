//Middleware de autenticacion;
const tokenService = require('../services/token');

module.exports = {
    verificarAdministrador: async (req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'No hay token!'
            })
        } else {
            const response = await tokenService.decode(req.headers.token);
            if (response.rol === "Administrador") {
                next();
            } else {
                return res.status(403).send({
                    error: 'usuario sin permiso'
                });
            }
        }
    },
    verificarVendedor: async (req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'No hay token!'
            })
        } else {
            const response = await tokenService.decode(req.headers.token);
            if (response.rol === "Administrador" || response.rol === "Vendedor") {
                next();
            } else {
                return res.status(403).send({
                    error: 'usuario sin permiso'
                });
            }
        }
    },
    verifyUsuario: async (req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if (response.rol == 'Administrador' || response.rol == 'Vendedor' || response.rol == 'Almacen') {
            next();
        } else {
            return res.status(403).send({
                message: 'No autorizado'
            });
        }
    },

}