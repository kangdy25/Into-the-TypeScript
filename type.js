// 문자 타입만 가능
var name = 'Mudryk';
// name = 123; 숫자 타입이 들어오면 에러;
// 문자 타입 또는 숫자 타입 가능
var player = 'Mudryk';
// 배열 또는 객체 타입 사용법 
// (array 자료에 타입 지정 가능)
var person = ['Nkunku', 'Enzo'];
// (object 자료에 타입 지정 가능) 
var chelsea = { member1: 'Colwil', member2: 'Gusto' };
var Yeah = 123;
var john = [123, true];
var Luke = { name: 'kim' };
// 함수 파라미터와 리턴 값에 타입 지정
function multiply(x) {
    return x * 2;
}
// ?는 x : number | undefined랑 똑같음
function muliply2(x) {
    return x * 2; // 요거는 함수 실행하면 오류남
}
// 클래스에 타입 지정
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
// Union Type (2개 이상의 타입 설정)
var names = 'kim';
var array = [1, '2', 3];
var object = { data: '123' };
// Any Type (타입스크립트를 쓰는 이유가....)
var allType;
allType = 123;
allType = [];
// Unknown Type (Any와 비슷하지만, 조금 더 엄격한 타입)
var Idontknow;
Idontknow = 123;
Idontknow = {};
// let var1 : string = Idontknow; // unknown은 오류 O
// let var2 : string = allType; // any는 오류 X
// Narrowing (타입이 불확실할 경우, 특정 타입으로 제한한다.)
function Narrowing(x) {
    if (typeof x === 'number') {
        return x + 1;
    }
    else if (typeof x === 'string') {
        return x + 1;
    }
    else { // 반드시 else문이 있어야 한다.
        return 0;
    }
}
// Assertion (타입을 덮어씌운다. 평소에는 쓰지 말자;;;)
function Assertion(x) {
    return x + 1;
}
console.log(Assertion(123));
