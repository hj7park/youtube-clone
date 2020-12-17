var express = require('express');
var router = express.Router();
let importCtrl = require("../controllers/videos");


/* GET home page. */
router.get('/', importCtrl.showPage);

router.get('/:id', importCtrl.showVideo);

module.exports = router;
