var express = require('express');
var router = express.Router();

var util = require('../../afeel/util/vo');

router.get('/', function(req, res){

    var re = util.createValueObject('Request');

    util.successCode(res, {
        requestNo : re.Request().requestNo,
        memberNo : re.Request().memberNo,
        requestTitle : re.Request().requestTitle,
        requestContent : re.Request().requestContent,
        requestRegDate : re.Request().requestRegDate
    });
});

module.exports = router;