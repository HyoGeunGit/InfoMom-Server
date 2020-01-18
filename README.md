## InfoMOM

#Restful Api

* POST /signup ( 유저 회원가입 )

> Parmas

    id : {type: String, unique: true}, // 아이디
    
    name : {type: String, unique :false } // 유저이름

    phoneNum :{type: String} // 전화번호

    passwd : {type : String}, // 비밀번호

> Response

    HTTP 200 : { message: "success!"}

    HTTP 409 : { message : "already exist"}

    HTTP 400 : { message : e.message } // 나올 일 없음

* POST /signin ( 유저 로그인 )

> Params

    id : { type : String } // 유저 아이디

    passwd : { type : String } // 유저 비밀번호

> Response

    HTTP 200 : { user :
    
      id : {type: String, unique: true}, // 아이디
      
      passwd : {type : String},
      
      token : {type: String}, // 토큰
     } 

    HTTP 404 : { message : "User Not Found!"}


* POST /addBabySitter 

> Params

      name : { type : String } // 베이비시터 이름

      percent : { type : String } // 신뢰도

      money : {type: String, required: true} // 금액 (시급)
      
      lat : {type: Number, required: true} // 위도

      lng : {type: Number, required: true} // 경도
    
      subdata: {type: String, required: true} // 자기소개글
  
      isGujik : {type : String } // 구직 표시

> Response

    HTTP 200 : {
      token : {type: String} // 토큰
     } 

    HTTP 404 : { message : "Training Not Found!"}




* POST /addWiki

> Params

      title : {type: String, required: true} // 글 제목

      subdata : {type: String, required: true} // 글 내용

      timeStamp : {type: String} // 타임스탬프

      userName : {type : String, required: true} // 유저네임

 > Response

    HTTP 200 : {
      token : {type: String} // 토큰
     } 

    HTTP 404 : { message : "User Training Not Found!"}



* POST /getallBabyList (/allWikiList)

> Params
        null
 > Response

    HTTP 200 : {

      name : { type : String } // 베이비시터 이름

      percent : { type : String } // 신뢰도

      money : {type: String, required: true} // 금액 (시급)
      
      lat : {type: Number, required: true} // 위도

      lng : {type: Number, required: true} // 경도
    
      subdata: {type: String, required: true} // 자기소개글
  
      userToken : {type : String} // 유저토큰
  
      isGujik : {type : String } // 구직 표시
  
      token : {type: String} // 혹시 모르니까 토큰 하나 더
     } 

    HTTP 404 : { message : "User Training Not Found!"}
