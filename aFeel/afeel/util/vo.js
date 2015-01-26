

// 전역변수라 다른데서 vo라고 선언하면 안됨
var vo = {};    // 동적 함수가 저장될 곳.
var ejo; // EqualJoinOption 을 위한 변수

function createValueObject(name){
  ejo = new EqualJoinOption();
  makeCallBackJValueObject(name);   // 함수를 만든다.
//vo['Member']();
 return vo;
}


function getEjo(){
  return ejo;
}


function joinArgument(arguments, obj){
  var resultJson;
  var argLength;

  var Ej = function(){
    Ej.prototype.setget = function(name, value){  // memberNo
      this['' + name + ''] = value;
    };
  };

  if(arguments.t1 != undefined){
    console.log('t1' + ', ' + Object.keys(arguments).length);

    argLength = arguments.c1.length;

    for(var i = 0; i < argLength; i++){
      if(i == 0)
        resultJson = new Ej();

      console.log(arguments.c1[i]);
      console.log(arguments.c1[i] + ' : ' +  arguments.v1[0][arguments.c1[i]]);
      resultJson.setget(arguments.c1[i], arguments.v1[0][arguments.c1[i]]);
    }

   /* for(var i in arguments.c1 ){

    }*/

  }

  if(arguments.t2 != undefined){
    console.log('t2 ==> ' , arguments.v2 );
    argLength = arguments.c2.length;
    for(var i = 0; i < argLength; i++){
      console.log(arguments.c2[i]);
      console.log(arguments.c2[i] + ' : ' +  arguments.v2[0][arguments.c2[i]]);
      resultJson.setget(arguments.c2[i], arguments.v2[0][arguments.c2[i]]);
    }
  }

  if(arguments.t3 != undefined){
    console.log('t3');
  }

  if(arguments.t4 != undefined){
    console.log('t4');
  }


  return resultJson;
} // joinArguments end



var EqualJoinOption = function(){
  EqualJoinOption.prototype.setget = function(name, value){  // memberNo
    this['' + name + ''] = value;
  };
};


// fncMap에 key, function 으로 동적으로 함수가 저장된다.
function makeCallBackJValueObject(name){

  var obj;
  return vo[name]=function(){
  //  var a = new Member();

    switch(name){
      case 'Member' :
        obj = new Member();

        obj.setget('memberNo', 1);
        obj.setget('memberEmail', 'hong@naver.com');
        obj.setget('memberNick', 'hong');;
        obj.setget('memberTel', 01065437532);
        obj.setget('memberAdd', '서울');
        obj.setget('memberName', '홍길동');
        obj.setget('memberGender', 'M');
        obj.setget('memberBirth', 19901123);
        obj.setget('memberHeight', 170);
        obj.setget('memberPw', '1234');
        obj.setget('memberHobby', '축구');
        obj.setget('memberJob', '갓수');
        obj.setget('memberLevel', 1);
        obj.setget('memberSmoking', 'N');
        obj.setget('memberMatchCnt', 0);
        obj.setget('memberHPYn', '0');
        obj.setget('memberEmailYn', 0);
        obj.setget('memberSNSYn', 0);
        obj.setget('memberStMeeting', '2015-01-23 16:22:34');
        obj.setget('memberPushYn', 0);
        obj.setget('memberPenalty', 0);
        obj.setget('memberCash', 0);
        obj.setget('memberBestQ', 5);
        obj.setget('memberWithdraw',0)
        obj.setget('memberWithdrawReason','');
        obj.setget('memberToken','aegagea124151eagagea');
        break;

      case 'Cash' :
        obj = new Cash();

        obj.setget('cashNo', 1);
        obj.setget('memberNo', 1);
        obj.setget('cashDate', '2015-0123 16:23:43');
        obj.setget('cashAmount', 5000);

        break;

      case 'Chat_Rank' :
        obj = new Chat_Rank();

        obj.setget('rankNo', 1);
        obj.setget('memberNo', 1);
        obj.setget('chatroomNo', 1);
        obj.setget('rank', 1);

        break;


    case 'ChatRoom' :
      obj = new ChatRoom();

      obj.setget('chatroomNo', 123);
      obj.setget('memberWNo', 364);
      obj.setget('memberM1No', 257);
      obj.setget('memberM2No', 485);
      obj.setget('memberM3No', 129);
      obj.setget('memberM4No', 102);
      obj.setget('chatroomRegdate', '2015-01-23 16:34:52');

         break;

     case 'Faq' :
      obj = new Faq();

      obj.setget('faqNo', 1);
      obj.setget('faqQuestion', '이 앱은 어케 써요?');
      obj.setget('faqAnswer', '도움말을 보시면 됩니다.');

      break;

    case 'Feeling' :
      obj = new Feeling();

      obj.setget('feelingNo', 1);
      obj.setget('memberNo', 1);
      obj.setget('feelingRate', 2);
      obj.setget('feelingCode1', 1);
      obj.setget('feelingCode2', 2);
      obj.setget('feelingCode3', 3);

      break;

    case 'Feeling_Type' :
      obj = new Feeling_Type();

      obj.setget('fTypeNo', 1);
      obj.setget('fType', '귀여움');

      break;

    case 'Notice' :
      obj = new Notice();

      obj.setget('noticeNo', 1);
      obj.setget('memberNo', 1);
      obj.setget('noticeTitle', 'test입니다');
      obj.setget('noticeContent', 'test내용');
      obj.setget('noticeRegDate', '2015-01-23 16:34:52');
      break;

      case 'Payment' :
        obj = new Cash();

        obj.setget('paymentNo', 1);
        obj.setget('memberNo', 1);
        obj.setget('paymentDate', '2015-0123 16:23:43');
        obj.setget('paymentAmount', 5000);

        break;

      case 'Private_Message' :
        obj = new Cash();
        obj.setget('messageNo','89');
        obj.setget('privateRoomNo','175');
        obj.setget('messageFrom','257');
        obj.setget('messageTo','224');
        obj.setget('messageData','안녕하세요 반갑습니다.');
        obj.setget('messageDate','2015-01-23 09:00:00');
        break;
      case 'Private_Room' :
        obj = new Cash();
        obj.setget('privateRoomNo','175');
        obj.setget('memberWNo','257');
        obj.setget('memberMNo','224');
        obj.setget('privateRoomRegDate','2015-01-23 09:00:00');
        break;
      case 'Profil' :
        obj = new Cash();
        obj.setget('profilNo','189');
        obj.setget('memberNo','257');
        obj.setget('profilOriginalFileName','profil.jpg');
        obj.setget('profilSaveFileName','profil.jpg');
        obj.setget('profilThumbnail','profil.jpg');
        obj.setget('profilMainYn','Y');
        break;
      case 'Question' :
        obj = new Cash();
        obj.setget('questionNo','246');
        obj.setget('memberNo','257');
        obj.setget('questionData','여자친구가 생기면 첫 데이트로 가고 싶은 곳은 어디세요?');
        obj.setget('questionGuideData','일산 호수공원이요. 한 번도 가보지 못했거든요? 혹시 가보셨나요?');
        obj.setget('questionType','0');
        obj.setget('questionRegDate','2015-01-23 09:00:00');
        break;
      case 'Request' :
        obj = new Cash();
        obj.setget('requestNo','35');
        obj.setget('memberNo','257');
        obj.setget('requestTitle','결제가 안돼요');
        obj.setget('requestContent','결제가 안돼요 확인 해주세요');
        obj.setget('requestRegDate','2015-01-23 09:00:00');
        break;
      case 'Text_Answer' :
        obj = new Cash();
        obj.setget('textAnswerNo','68');
        obj.setget('questionNo','246');
        obj.setget('textAnswerData','파주 헤이리 드라이브를 하고 싶네요');
        obj.setget('chatroomNo','174');
        obj.setget('textAnswerRegDate','2015-01-23 09:00:00');
        break;
      case 'Voice_Answer' :
        obj = new Cash();
        obj.setget('voiceAnserNo','54');
        obj.setget('qustionNo','246');
        obj.setget('voiceAnswerOriginalFileName','20150120123257.mp4');
        obj.setget('voiceAnswerRegDate','2015-01-23');
        break;
    } // switch end


    return obj;
  } // return end
} // function end




function successCode(res, resultValue){

  res.json({
    success : 1,
    message : 'OK',
    result : resultValue
  });
}



/*memberNo,
 memberEmail,
 memberNick,
 memberTel,
 memberAdd,
 memberName,
 memberGender,
 memberBirth,
 memberHeight,
 memberPw,
 memberHobby,
 memberJob,
 memberLevel,
 memberSmoking,
 memberMatchCnt,
 memberHPYn,
 memberEmailY,
 memberSNSYn,
 memberStMeeting,
 memberPushYn,
 memberPenalty,
 memberCash,
 memberBestQ,
 memberWithdraw,*/


var Member = function(){
  Member.prototype.setget = function(name, value){  // memberNo
    this['' + name + ''] = value;
  };
};


var Cash = function(){
  Cash.prototype.setget = function(name, value){
    this['' + name + ''] = value;
  };
};

var Chat_Rank = function(){
  Cash_Rank.prototype.setget = function(name, value){
    this['' + name + ''] = value;
  };
};


var ChatRoom = function(){
  ChatRoom.prototype.setget = function(name, value){
    this['' + name + ''] = value;
  };
};



var Faq = function(){
  Faq.prototype.setget = function(name, value){
    this['' + name + ''] = value;
  };
};


var Feeling = function(){
  Feeling.prototype.setget = function(name, value){
    this['' + name + ''] = value;
  };
};

var Feeling_Type = function(){
  Feeling_Type.prototype.setget = function(name, value){
    this['' + name + ''] = value;
  };
};

var Notice = function(){
  Notice.prototype.setget = function(name, value){
    this['' + name + ''] = value;
  };
};

var Payment = function(){
  Payment.prototype.setget = function(name, value){
    this['' + name + ''] = value;
  };
};

var Private_Message = function(){
  Private_Message.prototype.setget = function(name, value){
    this['' + name + ''] = value;
  };
};

var Private_Room = function(){
  Private_Room.prototype.setget = function(name, value){
    this['' + name + ''] = value;
  };
};

var Profil = function(){
  Profil.prototype.setget = function(name, value){
    this['' + name + ''] = value;
  };
};

var Question = function(){
  Question.prototype.setget = function(name, value){
    this['' + name + ''] = value;
  };
};

var Request = function(){
  Request.prototype.setget = function(name, value){
    this['' + name + ''] = value;
  };
};

var Text_Answer = function(){
  Text_Answer.prototype.setget = function(name, value){
    this['' + name + ''] = value;
  };
};

var Voice_Answer = function(){
  Voice_Answer.prototype.setget = function(name, value){
    this['' + name + ''] = value;
  };
};


module.exports.createValueObject = createValueObject;
module.exports.joinArgument = joinArgument;
module.exports.getEjo = getEjo;
module.exports.successCode = successCode;

/*memberNo,
 memberEmail,
 memberNick,
 memberTel,
 memberAdd,
 memberName,
 memberGender,
 memberBirth,
 memberHeight,
 memberPw,
 memberHobby,
 memberJob,
 memberLevel,
 memberSmoking,
 memberMatchCnt,
 memberHPYn,
 memberEmailY,
 memberSNSYn,
 memberStMeeting,
 memberPushYn,
 memberPenalty,
 memberCash,
 memberBestQ,
 memberWithdraw,*/


/*

 var memberNo;
 var memberEmail;
 var memberNick;
 //var memberTel;
 var memberAdd;
 var memberName;
 var memberGender;
 var memberBirth;
 var memberHeight;
 var memberPw;
 var memberHobby;
 var memberJob;
 var memberLevel;
 var memberSmoking;
 var memberMatchCnt;
 var memberHPYn;
 var memberEmailYn;
 var memberSNSYn;
 var memberStMeeting;
 var memberPushYn;
 var memberPenalty;
 var memberCash;
 var memberBestQ;
 var memberWithdraw;
 */




/* Member.prototype.setMemberNo = function(memberNo){
 this.memberNo = memberNo;
 }

 Member.prototype.getMemberNo = function(){
 return this.memberNo;
 }

 Member.prototype.setEmail = function(email){
 this.email = email;
 }

 Member.prototype.getEmail = function(){
 return this.email;
 }
 */
