const express = require("express");
const router = express.Router();
const User = require("../models/articleSchema");
var moment = require("moment");
const userController = require("../controllers/userController");
/////////////////////////////////////////////////
router.get("/", userController.user_index_get);

/////////////////////////view::::::::id;;;;;;;;;;///////////////
router.get("/edit/:id", userController.user_edit_get);
router.get("/view/:id", userController.user_view_get);

//////////////////////////////post ----save--- /////////////////

/////////////////////////////search///////////////////////////////
router.post("/search", userController.user_search_post);
///////////////////////////delete/////////////////////////////////////////
router.delete("/edit/:id", userController.user_delete);
////////////////////////////put/////////////////////////////////////
router.put("/edit/:id", userController.user_edit_put);
////////////////////////////mongoose///////////////////////////////

module.exports = router;
