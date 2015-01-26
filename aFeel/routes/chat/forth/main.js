var express = require('express');
var router = express.Router();

var util = require('../../../afeel/util/vo');

router.get('/:chatroomNo/:memberNo', function(req, res){
    var memberNo = req.params.memberNo;
    if(memberNo == "" || memberNo == undefined){
        res.json({success:0, message:"Error(빈값이 넘어왔습니다.[memberNo])", result:null});
        return;
    }
    var chatroomNo = req.params.chatroomNo;
    if(chatroomNo == "" || chatroomNo == undefined){
        res.json({success:0, message:"Error(빈값이 넘어왔습니다.[chatroomNo])", result:null});
        return;
    }

    var m = util.createValueObject('Member');
    var ft = util.createValueObject('Feeling_Type');

    util.successCode(res, {
        memberNo : m.Member().memberNo,
        memberGender : m.Member().memberGender,
        memberNick : m.Member().memberNick,
        memberJob : m.Member().memberJob,
        memberHobby : m.Member().memberHobby,
        memberAdd : m.Member().memberAdd,
        memberBirth : m.Member().memberBirth,
        memberHeight : m.Member().memberHeight,
        memberEmailYn : m.Member().memberEmailYn,
        memberSNSYn : m.Member().memberSNSYn,
        fType : ft.Feeling_Type().fType
    });
});

module.exports = router;