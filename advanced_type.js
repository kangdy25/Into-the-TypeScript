var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
