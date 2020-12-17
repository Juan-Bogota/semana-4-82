const routerx = require('express-promise-router');
const userController = require('../../controllers/UserController');
const auth = require('../../middlewares/auth');

const router = routerx();


// login Endpoint: 
router.post('/login', userController.login);


// api/auth/lista
router.get('/list', auth.verificarAdministrador, userController.list);

// api/user/register

router.post('/register', userController.register);


// actualizar un valor
router.put('/update', auth.verificarVendedor, userController.update)


module.exports = router;