"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
// Rest Parameter
function addAll() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
addAll(1, 2, 3, 4, 5);
// Spread Operator
var arr = [3, 4, 5];
var arr2 = __spreadArray([1, 2], arr, true);
console.log(arr2);
// Destructuring
var _a = ['안녕', 100], a = _a[0], b = _a[1];
var _b = { student: true, ages: 20 }, student = _b.student, ages = _b.ages;
var person = { student: true, ages: 20 };
function humanFunction(_a) {
    var student = _a.student, ages = _a.ages;
    console.log(student, ages);
}
humanFunction({ student: true, ages: 20 });
// Advanced Narrowing
// - 1. null & undefined 체크하는 법
function printAll(strs) {
    if (strs && typeof strs === "string") {
        console.log(strs);
    }
}
function animalCheck(animal) {
    if ("swim" in animal) {
        return animal.swim;
    }
    return animal.fly;
}
function vehicleCheck(x) {
    if (x.wheel === '4개') {
        console.log('이 차는 ' + x.color);
    }
    else {
        console.log('이 바이크는 ' + x.color);
    }
}
var benz = { wheel: '4개', color: '파랑' };
vehicleCheck(benz);
// Never Type 
// 조건 1) 절대 return을 하지 않아야 하고
// 조건 2) 함수 실행이 끝나지 않아야 합니다 (전문용어로 endpoint가 없어야합니다)
function neverFunction() {
    throw new Error('에러메세지');
}
function infiniteLoop() {
    while (true) {
        console.log(123);
    }
}
function neverFunction2(parameter) {
    if (typeof parameter === "string") {
        parameter + 1;
    }
    else {
        parameter;
    }
}
// Object-Oriented Programming
var User = /** @class */ (function () {
    function User(a) {
        // private 붙으면 변경 방지 가능, class 안에서만 수정 가능
        this.familyName = 'kim';
        // protected 붙으면 변경 방지 가능,현재 class 안에서 + extends된 class 안에서 수정 가능
        this.age = 30;
        this.y = 20; // 자식만 사용 가능
        this.name = this.familyName + a;
    }
    User.prototype.changeFamilyName = function (b) {
        this.familyName = b;
    };
    // static 붙으면 부모 class에 직접 부여됨
    User.x = 10; // 부모만 사용 가능 (자식에게 안 물려줌, extends는 물려줌)
    return User;
}());
var users = new User('옥지');
// users.familyName = 'Lee'; // error!
users.changeFamilyName('ang kim');
console.log(User.x);
// public
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
// extends
var NewUser = /** @class */ (function (_super) {
    __extends(NewUser, _super);
    function NewUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewUser.prototype.HowOldAreYou = function (num) {
        this.age = num;
    };
    return NewUser;
}(User));
var typeVarious;
// Generic
function arrayFunc(x) {
    return x[0];
}
var newX = arrayFunc([4, 2]);
function minusOne(a) {
    return a - 1;
}
var newA = minusOne(100);
// Tuple Type
var baaaark = ['dog', true];
var baaaaaaaark = ['dog', true];
function func1() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
var arrs = [1, 2, 3];
var arrs2 = __spreadArray([4, 5], arrs, true);
