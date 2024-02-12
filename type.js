"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 문자 타입만 가능
var ChelseaName = 'Mudryk';
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
    // return x * 2; // 요거는 함수 실행하면 오류남
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
var animal;
var teacher = { name: 'Daniel', age: 20 };
var footballPlayer = {
    name: 'Son'
};
var Coord = { x: 1, y: 2 };
// Literal Types
var lee;
var choi;
var direction;
direction = 'left';
function func(a) {
    return 1;
}
var nameData = {
    name: 'kim'
};
function myFunc(a) {
}
myFunc(nameData.name);
var functions = function () {
    return 10;
};
// Typescirpt DOM Manupulation
var title = document.querySelector('#title');
var link = document.querySelector('.link');
var btn = document.querySelector('#button');
// Narrowing 1
if (title != null) {
    title.innerHTML = '반갑소';
}
// Narrowing 2
if (title instanceof Element) {
    title.innerHTML = '반갑소';
}
// Narrowing 3 (비추)
title = document.querySelector('#title');
title.innerHTML = '반갑소';
// Narrowing 4
if ((title === null || title === void 0 ? void 0 : title.innerHTML) != undefined) {
    title.innerHTML = '반갑소';
}
if (link instanceof HTMLAnchorElement) {
    link.href = 'https://kakao.com';
}
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function () {
    console.log('앙!!');
});
// Class 
var Persons = /** @class */ (function () {
    function Persons(what) {
        this.data = 0;
        this.name = what;
    }
    return Persons;
}());
Persons.prototype.func = function (a) {
    console.log('안뇽 ' + a);
};
var human1 = new Persons('kim');
var human2 = new Persons('lee');
var rect = { color: 'red', width: 100 };
var student1 = { name: 'kim' };
var teacher1 = { name: 'kim', age: 50 };
// Type VS Interface
// Interface는 중복 선언 가능
// Type은 중복 선언 불가능
