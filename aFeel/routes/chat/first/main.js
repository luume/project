var express = require('express');
var router = express.Router();

var util = require('../../../afeel/util/vo');

// 소개 받기
router.post('/', function(req, res) {

  var m = util.createValueObject('Member');
  var f = util.createValueObject('Feeling');
  var p = util.createValueObject('Profil');

  res.json(util.successCode(res,
    {
      memberNo : m.Member().memberNo,
      memberName : m.Member().memberName,
      memberBirth : m.Member().memberBirth,
      memberGender  : m.Member().memberGender ,
      memberHobby  : m.Member().memberHobby ,
      memberAdd  : m.Member().memberAdd ,
      memberHeight  : m.Member().memberHeight ,
      memberJob  : m.Member().memberJob ,
      memberSnsYn  : m.Member().memberSnsYn ,
      memberHPYn  : m.Member().memberHPYn ,
      memberEmailYn  : m.Member().memberEmailYn ,
      memberStMeeting  : m.Member().memberStMeeting ,
      feelingCode1  : m.Member().feelingCode1 ,
      feelingCode2  : m.Member().feelingCode2 ,
      feelingCode3  : m.Member().feelingCode3 ,
      profilSaveFileName   : p.Member().profilSaveFileName
    }
  ));

});

module.exports = router;
