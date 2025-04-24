// 기본 타입 간의 호환성

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

// 객체 타입 간의 호환성 (프로퍼티를 기준으로 계층이 분류된다.)
type Animal = {
    name: string;
    color: string;
};

type Dog = {
    name: string;
    color: string;
    breed: string;
};

let animal: Animal = {
    name: "기린",
    color: "yellow",
};

let dog: Dog = {
    name: "멍멍이",
    color: "yellow",
    breed: "진돗개",
};

animal = dog;
// dog = animal;

// ###################################################################################################

type Book = {
    name: string;
    price: number;
};

type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
    name: "모던 자바스크립트 딥다이브",
    price: 33000,
    skill: "JavaSript",
};

book = programmingBook;
// programmingBook = book

// 초과 프로퍼티 검사: 실제 타입에는 정의하지 않은 프로퍼티를 작성하면 안 되도록 막는 검사
let MathBook: Book = {
    name: "Into-the-Math",
    price: 33000,
    // 객체 타입에서 정의한 프로퍼티만 넣어야 한다.
    // skill: "Basic Mathematicss", // (에러!!)
};

let book2: Book = programmingBook;
