var express = require('express');
var router = express.Router();

var util = require('../../afeel/util/vo');

router.get('/:memberNo', function(req, res){

    var m = util.createValueObject('Member');
    var cr = util.createValueObject('ChatRoom');
    var f = util.createValueObject('Feeling');
    var p = util.createValueObject('Profil');


    util.successCode(res, {
        memberNo : m.Member().memberNo,
        memberBirth : m.Member().memberBirth,
        memberHobby : m.Member().memberHobby,
        memberAdd : m.Member().memberAdd,
        memberHeight : m.Member().memberHeight,
        memberJob : m.Member().memberJob,
        memberSNSYn : m.Member().memberSNSYn,
        memberEmailYn : m.Member().memberEmailYn,
        chatroomRegdate : m.ChatRoom().chatroomRegdate,
        feelingCode1 : f.Feeling().feelingCode1,
        feelingCode2 : f.Feeling().feelingCode2,
        feelingCode3 : f.Feeling().feelingCode3,
        feelingRate : f.Feeling().feelingRate,
        profilSaveFileName : p.Profil().profilSaveFileName
    });
});

module.exports = router;