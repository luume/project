var express = require('express');
var router = express.Router();

var util = require('../../afeel/util/vo');

router.get('/:memberNo', function(req, res){
    var memberNo = req.params.memberNo;
    if(memberNo == "" || memberNo == undefined){
        res.json({success:0, message:"Error(빈값이 넘어왔습니다.[memberNo])", result:null});
        return;
    }

    var m = util.createValueObject('Member');
    var pro = util.createValueObject('Profil');

    util.successCode(res, {
        memberName : m.Member().memberName,
        memberBirth : m.Member().memberBirth,
        memberHobby : m.Member().memberHobby,
        memberAdd : m.Member().memberAdd,
        memberJob : m.Member().memberJob,
        profilOriginalFileName  : pro.Profil().profilOriginalFileName
    });
});

module.exports = router;

