angular.module('sg.translation').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('ko_KR', {"Add New":"신규추가","Add a new thing here.":"여기에 새로 추가하세요.","Features:":"기능","Syncs in realtime across clients":"클라이언트간 실시간 업데이트 수행 "});
/* jshint +W100 */
}]);