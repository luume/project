var express = require('express');
var router = express.Router();

var util = require('../../afeel/util/vo');

// 회원가입
router.post('/', function(req, res) {

  var m = util.createValueObject('Member');

  var p = util.createValueObject('Profil');

  res.json(util.successCode(res,
    {
      memberEmail : m.Member().memberEmail,
      memberName : m.Member().memberName,
      memberNick : m.Member().memberNick,
      memberPw : m.Member().memberPw,
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
