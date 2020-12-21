const routerx = require('express-promise-router');
const articuloController = require('../../controllers/ArticuloController');
const auth = require('../../middlewares/auth');

const router = routerx();

// api/articulo/list
router.get('/list', articuloController.list);

// api/articulo/add 
router.post('/add',auth.verificarVendedor, articuloController.add);

// api/articulo/update
router.put('/update', auth.verificarVendedor, articuloController.update)

router.put('/activate', auth.verificarVendedor, articuloController.activate)

router.put('/deactivate',auth.verificarVendedor, articuloController.deactivate)

module.exports = router;