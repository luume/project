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
    var q = util.createValueObject('Question');

    util.successCode(res, {
        questionData : q.Question().questionData,
        questionGuideData : q.Question().questionGuideData,
        questionRegDate : q.Question().questionRegDate,
        memberBestQ : m.Member().memberBestQ
    });
});

module.exports = router;