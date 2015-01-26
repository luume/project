var express = require('express');
var router = express.Router();

var util = require('../../afeel/util/vo');

router.post('/', function(req, res){
    var memberNo = req.body.memberNo;
    if(memberNo == "" || memberNo == undefined){
        res.json({success:0, message:"Error(빈값이 넘어왔습니다.[memberEmail])", result:null});
        return;
    }

    util.successCode(res, 'success');

});

module.exports = router;