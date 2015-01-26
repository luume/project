var express = require('express');
var router = express.Router();

var util = require('../../afeel/util/vo');

// 회원가입(SNS 연동)
router.post('/', function(req, res) {

  var m = util.createValueObject('Member');

  var p = util.createValueObject('Profil');

  res.json(util.successCode(res,
    {
      memberToken : m.Member().memberToken,
      memberNick : m.Member().memberNick,
      memberTel : m.Member().memberTel,
      memberGender : m.Member().memberGender,
      memberBirth : m.Member().memberBirth,
      memberHobby : m.Member().memberHobby,
      memberHeight  : m.Member().memberHeight ,
      memberAdd   : m.Member().memberAdd  ,
      memberJob    : m.Member().memberJob   ,
      profilOriginalFileName    : p.Member().profilOriginalFileName
    }
  ));

});

module.exports = router;
