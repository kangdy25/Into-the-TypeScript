// 문자 타입만 가능
var name = 'Mudryk';
// name = 123; 숫자 타입이 들어오면 에러;
// 문자 타입 또는 숫자 타입 가능
var player = 'Mudryk';
// 배열 또는 객체 타입 사용법
var person = ['Nkunku', 'Enzo'];
var human = { name: 'Colwil' };
var Yeah = 123;
var john = [123, true];
var Luke = { name: 'kim' };
// 함수 파라미터와 리턴 값에 타입 지정
function multiply(x) {
    return x * 2;
}
// 클래스에 타입 지정
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
