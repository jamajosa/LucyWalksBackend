const express = require("express");

const router = express.Router();
const Path = require("../model/Path");
const User = require("../model/User");
const userController = require("../controllers/userController");


router.post('/signup', userController.signup_post);
router.post('/login', userController.login_post);
router.get('/login', userController.login_get);

module.exports = router;