// 대수 타입: 여러 개의 타입을 합성하여 새롭게 만든 타입

// 1. 합집합 (Union Type)
let a: string | number | boolean;
a = "hello";
a = 3;

let arr: (number | string | boolean)[] = [1, "hello", false];

type Dog = {
    name: string;
    color: string;
};

type Person = {
    name: string;
    language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
    name: "",
    color: "",
};

let union2: Union1 = {
    name: "",
    language: "",
};

let union3: Union1 = {
    name: "",
    color: "",
    language: "",
};

// 얘는 어디에도 포함되지 않음
// let union4: Union1 = {
//     name: "",
// };

// 2. 교집합 (Intersection Type)
let variable: number & string;

type Intersection = Dog & Person;

let intersection1: Intersection = {
    name: "",
    color: "",
    language: "",
};
