var express = require('express');
var router = express.Router();

var util = require('../../../afeel/util/vo');

router.post('/:privateRoomNo', function(req, res){
    var privateRoomNo = req.params.privateRoomNo;
    if(privateRoomNo == "" || privateRoomNo == undefined){
        res.json({success:0, message:"Error(빈값이 넘어왔습니다.[privateRoomNo])", result:null});
        return;
    }

    util.successCode(res, 'success');

});

module.exports = router;