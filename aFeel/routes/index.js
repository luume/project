var express = require('express');
var router = express.Router();

//회원
var memberSignUp = require('./member/signUp');
var memberSignUpSns = require('./member/signUpSns');
var memberCertifyEmail = require('./member/certifyEmail');
var memberLogin = require('./member/login');
var memberLogout = require('./member/logout');
var memberEditPassword = require('./member/editPassword');
var memberPush = require('./member/push');
var memberWithDraw = require('./member/withDraw');

// 메인 화면
var homeMain = require('./home/main');

// 채팅
var random = require('./chat/random');
var select = require('./chat/select');
var custom = require('./chat/custom');
var firstMain = require('./chat/first/main');
var secondMain = require('./chat/second/main');
var secondSendAnswer = require('./chat/second/sendAnswer');
var secondShowAnswer = require('./chat/second/showAnswer');
var secondShowAnswerAlive = require('./chat/second/showAnswerAlive');
var secondKillAnswer = require('./chat/second/killAnswer');
var thirdMain = require('./chat/third/main');
var thirdSendVoiceAnswer = require('./chat/third/sendVoiceAnswer');
var thirdShowVoiceAnswer = require('./chat/third/showVoiceAnswer');
var thirdKillVoiceAnswer = require('./chat/third/killVoiceAnswer');
var forthMain = require('./chat/forth/main');
var forthShowtextanswer = require('./chat/forth/showTextAnswer');
var forthShowvoiceanswer = require('./chat/forth/showVoiceAnswer');
var forthAfeel = require('./chat/forth/afeel');
var privateChatCreatePrivateChat = require('./chat/privateChat/createPrivateChat');
var privateChatMain = require('./chat/privateChat/main');
var privateChatSendChat = require('./chat/privateChat/sendChat');

// 프로필
var profilMain = require('./profil/main');
var profilProfilupdate = require('./profil/profilUpdate');

// 게시판 관련
var boardNotice = require('./board/notice');
var boardFaq = require('./board/faq');
var boardRequestList = require('./board/requestList');
var boardRequest = require('./board/request');

// 지나간 이성
var expeopleEndMatchList = require('./expeople/endMatchList');
var expeoplePrivateChatListMain = require('./expeople/privateChatList/main');
var expeoplePrivateChatListDelete = require('./expeople/privateChatList/delete');

// 내가 한 질문
var myquestionMain = require('./myquestion/main');
var myquestionRegistBestQ = require('./myquestion/registBestQ');
var myquestionUpdateQuestion = require('./myquestion/updateQuestion');
var myquestionDeleteQuestion = require('./myquestion/deleteQuestion');

// 상점
var storeMain = require('./store/main');
var storeRechargeCash = require('./store/rechargeCash');
var storeFreeRechargeList = require('./store/freeRechargeList');




router.use('/member/signup', memberSignUp);
router.use('/member/signupsns', memberSignUpSns);
router.use('/member/certifyemail', memberCertifyEmail);
router.use('/member/login', memberLogin);
router.use('/member/logout', memberLogout);
router.use('/member/editpassword', memberEditPassword);
router.use('/member/push', memberPush);
router.use('/member/withdraw', memberWithDraw);


router.use('/home', homeMain);


router.use('/chat/random', random);
router.use('/chat/select', select);
router.use('/chat/custom', custom);
router.use('/chat/first', firstMain);
router.use('/chat/second', secondMain);
router.use('/chat/second/sendanswer', secondSendAnswer);
router.use('/chat/second/showanswer', secondShowAnswer);
router.use('/chat/second/showansweralive', secondShowAnswerAlive);
router.use('/chat/second/secondkillanswer', secondKillAnswer);
router.use('/chat/third', thirdMain);
router.use('/chat/third/sendvoiceanswer', thirdSendVoiceAnswer);
router.use('/chat/third/showvoiceanswer', thirdShowVoiceAnswer);
router.use('/chat/third/killvoiceanswer', thirdKillVoiceAnswer);
router.use('/chat/forth', forthMain);
router.use('/chat/forth/showtextanswer', forthShowtextanswer);
router.use('/chat/forth/showvoiceanswer', forthShowvoiceanswer);
router.use('/chat/forth/afeel', forthAfeel);
router.use('/chat/privatechat', privateChatMain);
router.use('/chat/privatechat/createprivatechat', privateChatCreatePrivateChat);
router.use('/chat/privatechat/sendchat', privateChatSendChat);


router.use('/profil', profilMain);
router.use('/profil/profilupdate', profilProfilupdate);


router.use('/board/notice', boardNotice);
router.use('/board/faq', boardFaq);
router.use('/board/request', boardRequest);
router.use('/board/requestlist', boardRequestList);


router.use('/expeople/endmatchlist', expeopleEndMatchList);
router.use('/expeople/privatechatlist', expeoplePrivateChatListMain);
router.use('/expeople/privatechatlist/delete', expeoplePrivateChatListDelete);


router.use('/myquestion', myquestionMain);
router.use('/myquestion/registbestq', myquestionRegistBestQ);
router.use('/myquestion/updatequestion', myquestionUpdateQuestion);
router.use('/myquestion/deletequestion', myquestionDeleteQuestion);


router.use('/store', storeMain);
router.use('/store/rechargecash', storeRechargeCash);
router.use('/store/freerechargelist', storeFreeRechargeList);



//router.use();


/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

module.exports = router;
