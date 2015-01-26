var express = require('express');
var router = express.Router();

var util = require('../../afeel/util/vo');

// 소개 받기
router.post('/', function(req, res) {

  var m = util.createValueObject('Member');
  var f = util.createValueObject('Feeling');
  var p = util.createValueObject('Profil');

  res.json(util.successCode(res,'success'));
});

module.exports = router;
