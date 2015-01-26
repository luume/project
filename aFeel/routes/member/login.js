var express = require('express');
var router = express.Router();

var util = require('../../afeel/util/vo');

router.post('/', function(req, res){
    var memberEmail = req.body.memberEmail;
    if(memberEmail == "" || memberEmail == undefined){
        res.json({success:0, message:"Error(빈값이 넘어왔습니다.[memberEmail])", result:null});
        return;
    }
    var memberPw = req.body.memberPw;
    if(memberPw == "" || memberPw == undefined){
        res.json({success:0, message:"Error(빈값이 넘어왔습니다.[memberPw])", result:null});
        return;
    }

    util.successCode(res, 'success');

});

module.exports = router;