var express = require('express');
var router = express.Router();

var util = require('../../afeel/util/vo');

router.get('/', function(req, res){

    var m = util.createValueObject('Member');

    util.successCode(res, {
        memberNo : m.Member().memberNo,
        memberPw : m.Member().memberPw
    });
});

router.post('/:memberNo', function(req, res){
    var memberNo = req.params.memberNo;
    if(memberNo == "" || memberNo == undefined){
        res.json({success:0, message:"Error(빈값이 넘어왔습니다.[memberNo])", result:null});
        return;
    }

    util.successCode(res, 'success');

});

module.exports = router;