const routerx = require('express-promise-router');
const userController = require('../../controllers/UserController');
const auth = require('../../middlewares/auth');

const router = routerx();


// login Endpoint: 
router.post('/login', userController.login);


// api/auth/lista
router.get('/list', auth.verificarAdministrador, userController.list);

// api/user/register

router.post('/register', auth.verificarAdministrador, userController.register);


// actualizar un valor
router.put('/update', auth.verificarAdministrador, userController.update)

router.put('/activate', auth.verificarAdministrador, userController.activate)

router.put('/deactivate', auth.verificarAdministrador, userController.deactivate)


module.exports = router;