var express = require('express');
var router = express.Router();

var util = require('../../afeel/util/vo');

router.get('/:memberNo', function(req, res){

    var m = util.createValueObject('Member');

    util.successCode(res, {
        memberNo : m.Member().memberNo,
        memberCash : m.Member().memberCash
    });
});

module.exports = router;