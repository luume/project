var express = require('express');
var router = express.Router();

var util = require('../../afeel/util/vo');

// 랜덤 소개 받기
router.post('/', function(req, res) {

  res.json(util.successCode(res, 'success'));

});

module.exports = router;
