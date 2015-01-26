var express = require('express');
var router = express.Router();

var util = require('../../afeel/util/vo');

router.get('/', function(req, res){

    var not = util.createValueObject('Notice');

    util.successCode(res, {
        noticeNo : not.Notice().noticeNo,
        memberNo : not.Notice().memberNo,
        noticeTitle : not.Notice().noticeTitle,
        noticeContent : not.Notice().noticeContent,
        noticeRegDate : not.Notice().noticeRegDate
    });
});

module.exports = router;