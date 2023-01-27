
const express = require("express");
const router = express.Router();
const pathController = require("../controllers/pathController");


router.post('/', pathController.path_post);
router.get('/', pathController.path_get);
router.get('/delete:_id', pathController.path_delete);

module.exports = router;