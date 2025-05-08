// 제네릭
function func(value) {
    return value;
}
let num1 = func(10);
let bool1 = func(true);
let str1 = func("hello");
function genericFunc(value) {
    return value;
}
let num2 = genericFunc(10);
let bool2 = genericFunc(true);
let str2 = genericFunc("hello");
export {};
