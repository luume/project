var express = require('express');
var router = express.Router();

var util = require('../../afeel/util/vo');

// 자기가한 질문으로 소개 받기
router.post('/', function(req, res) {

  res.json(util.successCode(res, 'success'));

});

module.exports = router;
