const express = require('express');
const router = express.Router();
const User = require("../models/articleSchema");
var moment = require("moment");
const userController = require("../controllers/userController");

router.get("",userController.user_add_get);

router.post("", userController.user_add_post);

module.exports = router;