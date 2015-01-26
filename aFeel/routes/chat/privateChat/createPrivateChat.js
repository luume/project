var express = require('express');
var router = express.Router();

var util = require('../../../afeel/util/vo');

router.post('/', function(req, res){
    var memberNo = req.body.memberNo;
    if(memberNo == "" || memberNo == undefined){
        res.json({success:0, message:"Error(빈값이 넘어왔습니다.[memberNo])", result:null});
        return;
    }
    var chatroomNo = req.body.chatroomNo;
    if(chatroomNo == "" || chatroomNo == undefined){
        res.json({success:0, message:"Error(빈값이 넘어왔습니다.[chatroomNo])", result:null});
        return;
    }

    var m = util.createValueObject('Member');
    var pr = util.createValueObject('Private_Room');

    util.successCode(res, {
        memberNo : m.Member().memberNo,
        privateRoomNo : pr.Private_Room().privateRoomNo,
        messageTo : pm.Private_Message().messageTo,
        isafeel : '/chat/createprivatechat/:privateRoomNo'
    });

});

module.exports = router;