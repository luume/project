var express = require('express');
var router = express.Router();

var util = require('../../afeel/util/vo');

router.get('/', function(req, res){

    var faq = util.createValueObject('Faq');

    util.successCode(res, {
        faqNo : faq.Faq().faqNo,
        faqQuestion : faq.Faq().faqQuestion,
        faqAnswer : faq.Faq().faqAnswer
    });
});

module.exports = router;