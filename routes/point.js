
const express = require("express");

const router = express.Router();
const pointController = require("../controllers/pointController");


router.post('/', pointController.point_post);
router.get('/', pointController.point_get);
router.post('/dummydata', pointController.createDummyData);
//router.delete('/delete:_id', userController.path_delete);


module.exports = router;