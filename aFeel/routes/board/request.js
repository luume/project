var express = require('express');
var router = express.Router();

var util = require('../../afeel/util/vo');

router.post('/:memberNo', function(req, res){
    var memberNo = req.params.memberNo;
    if(memberNo == "" || memberNo == undefined){
        res.json({success:0, message:"Error(빈값이 넘어왔습니다.[memberNo])", result:null});
        return;
    }
    var requestTitle = req.params.requestTitle;
    if(requestTitle == "" || requestTitle == undefined){
        res.json({success:0, message:"Error(빈값이 넘어왔습니다.[requestTitle])", result:null});
        return;
    }
    var requestContent = req.params.requestContent;
    if(requestContent == "" || requestContent == undefined){
        res.json({success:0, message:"Error(빈값이 넘어왔습니다.[requestContent])", result:null});
        return;
    }

    util.successCode(res, 1);

});

module.exports = router;