var jwt = require('jsonwebtoken');
const models = require('../models');


const checkToken = async (token) => {
    let localID = null;
    try {
        const { id } = await jwt.decode(token);
        localID = id;
    } catch (error) {
        return false;
    }
    const user = await models.Usuario.findOne({
        where: {
            id: localID,
            estado: 1
        }
    });
    if (user) {
        const token = encode(user);// validar encode - this.encode
        return {
            token,
            rol: user.rol
        }
    } else {
        return false
    }
}

module.exports = {

    //generar el token
    encode: async (id, rol) => {
        const token = jwt.sign({
            id: id,
            rol: rol
        }, 'KEY-SECRET', {
            expiresIn: 86400
        });
        return token;
    },
    //permite decodificar el token
    decode: async (token) => {
        try {
            const { id } = await jwt.verify(token, 'KEY-SECRET');
            const user = await models.Usuario.findOne({
                where: {
                    id: id,
                    estado: 1
                }
            });
            if (user) {
                return user;
            } else {
                return false;
            }

        } catch (e) {
            const newToken = await checkToken(token);
            return newToken;
        }
    }
}