// 대수 타입: 여러 개의 타입을 합성하여 새롭게 만든 타입
// 1. 합집합 (Union Type)
let a;
a = "hello";
a = 3;
let arr = [1, "hello", false];
let union1 = {
    name: "",
    color: "",
};
let union2 = {
    name: "",
    language: "",
};
let union3 = {
    name: "",
    color: "",
    language: "",
};
// 얘는 어디에도 포함되지 않음
// let union4: Union1 = {
//     name: "",
// };
// 2. 교집합 (Intersection Type)
let variable;
let intersection1 = {
    name: "",
    color: "",
    language: "",
};
export {};
