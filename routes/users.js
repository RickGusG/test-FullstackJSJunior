var express = require('express');
var router = express.Router();
const controller = require("../api/controllers/usersController")()

/* GET users listing. */
router.get('/', controller.listUsers)
router.get('/:userID', controller.getUser)
router.post('/', controller.addUser)
router.post('/:userID', controller.updateUser)
router.delete('/', controller.deleteUsers)
router.delete('/:userID', controller.deleteUser)

module.exports = router;
