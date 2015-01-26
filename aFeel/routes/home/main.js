var express = require('express');
var router = express.Router();

var util = require('../../afeel/util/vo');

// 앱 홈 화면
router.get('/:memberNo', function(req, res) {

  var m = util.createValueObject('Member');

  var p = util.createValueObject('Profil');

  res.json(util.successCode(res,
    {
      memberNo : m.Member().memberNo,
      memberName : m.Member().memberName,
      memberBirth : m.Member().memberBirth,
      memberHobby : m.Member().memberHobby,
      memberAdd : m.Member().memberAdd,
      memberHeight : m.Member().memberHeight,
      memberJob : m.Member().memberJob,
      memberSnsYn : m.Member().memberSnsYn,
      memberHPYn : m.Member().memberHPYn,
      memberEmailYn : m.Member().memberEmailYn,
      memberStMeeting : m.Member().memberStMeeting
    }
  ));

});

module.exports = router;
