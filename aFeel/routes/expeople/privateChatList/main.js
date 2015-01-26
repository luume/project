var express = require('express');
var router = express.Router();

var util = require('../../../afeel/util/vo');

router.get('/:memberNo', function(req, res){
    var memberNo = req.params.memberNo;
    if(memberNo == "" || memberNo == undefined){
        res.json({success:0, message:"Error(빈값이 넘어왔습니다.[memberNo])", result:null});
        return;
    }

    var m = util.createValueObject('Member');
    var pm = util.createValueObject('Private_Message');
    var p = util.createValueObject('Profil');

    util.successCode(res, {
        memberNo : m.Member().memberNo,
        memberName : m.Member().memberName,
        messageData : pm.Private_Message().messageData,
        messageDate : pm.Private_Message().messageDate,
        profilSaveFileName : p.Profil().profilSaveFileName
    });
});

module.exports = router;