var express = require('express');
var router = express.Router();
const UserController = require("../Controllers/UserController")

/* GET home page. */
router.get('/getAllUsers', UserController.getAllUsers);

module.exports = router;
