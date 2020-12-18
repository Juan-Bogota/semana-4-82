const routerx = require('express-promise-router');
const categoriaController = require('../../controllers/CategoriaController');
const auth = require('../../middlewares/auth');

const router = routerx();

// api/categoria/list
router.get('/list', categoriaController.list);

// api/categoria/add 
router.post('/add', categoriaController.add);

// api/categoria/update
router.put('/update', categoriaController.update)

router.put('/activate', categoriaController.activate)

router.put('/deactivate', categoriaController.deactivate)

module.exports = router;