angular.module('sg.message').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('ko_KR', {"Internal Server Error":"서버에러","Login Fail":"로그인 실패","Login Required. Or Your login info is expired.":"로그인정보가 만료되었습니다.","Login Success":"로그인 성공 ","Not found the content.":"컨텐츠를 찾을 수 없습니다.","Signup Fail":"신규등록 실패","Signup Success":"신규등록 성공 ","User Email Duplicated":"이메일이 중복 입니다. ","You send a Bad Request. send the right thing.":"잘못된 요청 입니다. ","Your Authorized is forbidden. Request the autorization to administrator.":"권한이 없습니다. "});
/* jshint +W100 */
}]);