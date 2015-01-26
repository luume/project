var express = require('express');
var router = express.Router();

var util = require('../../../afeel/util/vo');

router.post('/', function(req, res){
    var chatroomNo = req.body.chatroomNo
    if(chatroomNo == "" || chatroomNo == undefined){
        res.json({success:0, message:"Error(빈값이 넘어왔습니다.[chatroomNo])", result:null});
        return;
    }
    var memberNo = req.body.memberNo;
    if(memberNo == "" || memberNo == undefined){
        res.json({success:0, message:"Error(빈값이 넘어왔습니다.[memberNo])", result:null});
        return;
    }
    var textAnwerData = req.body.textAnwerData;
    if(textAnwerData == "" || textAnwerData == undefined){
        res.json({success:0, message:"Error(빈값이 넘어왔습니다.[textAnwerData])", result:null});
        return;
    }

    util.successCode(res, 'success');

});

module.exports = router;