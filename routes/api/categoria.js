const routerx = require('express-promise-router');
const categoriaController = require('../../controllers/CategoriaController');
const auth = require('../../middlewares/auth');

const router = routerx();

// api/categoria/list
router.get('/list', auth.verificarVendedor, categoriaController.list);

// api/categoria/add 
router.post('/add', auth.verificarVendedor, categoriaController.add);

// api/categoria/update
router.put('/update', auth.verificarVendedor, categoriaController.update)

router.put('/activate', auth.verificarVendedor, categoriaController.activate)

router.put('/deactivate', auth.verificarVendedor, categoriaController.deactivate)

module.exports = router;