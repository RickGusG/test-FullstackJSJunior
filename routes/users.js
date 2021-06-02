var express = require('express');
var router = express.Router();
var cors = require('cors')
const controller = require("../api/controllers/usersController")()
const corsAllowOrigin = {origin: '*', methods: "GET,HEAD,PUT,PATCH,POST,DELETE", preflightContinue: false, optionsSuccessStatus: 200}

/* All user related routes */
router.options('*', cors(corsAllowOrigin))
router.get('/', cors(corsAllowOrigin), controller.listUsers)
router.get('/:userID', cors(corsAllowOrigin), controller.getUser)
router.post('/', cors(corsAllowOrigin), controller.addUser)
router.put('/:userID', cors(corsAllowOrigin), controller.updateUser)
router.delete('/', cors(corsAllowOrigin), controller.deleteUsers)
router.delete('/:userID', cors(corsAllowOrigin), controller.deleteUser)

module.exports = router;
