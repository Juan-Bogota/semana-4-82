const routerx = require('express-promise-router');
const apiRouterArticulo = require('./api/articulo');
const apiRouterUser = require('./api/user');
const apiRouterCategoria = require('./api/categoria')



const router = routerx();

router.use('/usuario', apiRouterUser); //ruta => /api/usuario
router.use('/categoria', apiRouterCategoria); //ruta => /api/categoria
router.use('/articulo', apiRouterArticulo);

module.exports = router;