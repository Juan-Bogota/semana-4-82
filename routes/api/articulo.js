const routerx = require('express-promise-router');
const articuloController = require('../../controllers/ArticuloController');
const auth = require('../../middlewares/auth');

const router = routerx();

// api/articulo/list
router.get('/list', articuloController.list);

// api/articulo/add 
router.post('/add', articuloController.add);

// api/articulo/update
router.put('/update', articuloController.update)

router.put('/activate', articuloController.activate)

router.put('/deactivate', articuloController.deactivate)

module.exports = router;