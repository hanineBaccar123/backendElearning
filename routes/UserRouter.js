var express = require('express');
var router = express.Router();
const UserController = require("../Controllers/UserController")


const uploadfile = require("../middlewares/uploadFile")

/* GET home page. */
router.get('/getAllUsers', UserController.getAllUsers);
router.get('/getUserById/:id', UserController.getUsersById);
router.post('/addClient', UserController.addClient);
router.get('/searchUsersByFirstName', UserController.searchUsersByFirstName);
router.delete('/deleteUserById/:id', UserController.deleteUserById);
router.post('/addClientV2',UserController.addClientV2);
router.post('/addClientWithImage', uploadfile.single("user_image"),UserController.addClientWithImage);



module.exports = router;
