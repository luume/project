var express = require('express');
var router = express.Router();

var util = require('../../afeel/util/vo');

router.post('/', function(req, res){
    var memberNo = req.body.memberNo;
    if(memberNo == "" || memberNo == undefined){
        res.json({success:0, message:"Error(빈값이 넘어왔습니다.[memberNo])", result:null});
        return;
    }
    var memberWithdrawReason = req.body.memberWithdrawReason;
    if(memberWithdrawReason == "" || memberWithdrawReason == undefined){
        res.json({success:0, message:"Error(빈값이 넘어왔습니다.[memberWithdrawReason])", result:null});
        return;
    }

    util.successCode(res, 'success');

});

module.exports = router;