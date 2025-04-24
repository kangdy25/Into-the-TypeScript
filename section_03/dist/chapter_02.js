// 기본 타입 간의 호환성
let num1 = 10;
let num2 = 10;
num1 = num2;
let animal = {
    name: "기린",
    color: "yellow",
};
let dog = {
    name: "멍멍이",
    color: "yellow",
    breed: "진돗개",
};
animal = dog;
let book;
let programmingBook = {
    name: "모던 자바스크립트 딥다이브",
    price: 33000,
    skill: "JavaSript",
};
book = programmingBook;
// programmingBook = book
// 초과 프로퍼티 검사: 실제 타입에는 정의하지 않은 프로퍼티를 작성하면 안 되도록 막는 검사
let MathBook = {
    name: "Into-the-Math",
    price: 33000,
    // 객체 타입에서 정의한 프로퍼티만 넣어야 한다.
    // skill: "Basic Mathematicss", // (에러!!)
};
let book2 = programmingBook;
export {};
