// 문자 타입만 가능
let name :string = 'Mudryk';
// name = 123; 숫자 타입이 들어오면 에러;

// 문자 타입 또는 숫자 타입 가능
let player :string | number = 'Mudryk';

// 배열 또는 객체 타입 사용법
let person : string[] = ['Nkunku', 'Enzo'];
let human : {name : string} = {name  : 'Colwil'}

// 타입 지정
type myType = string | number;
type Member = [number, boolean]; // tuple 타입
type People = {
    name : string,
}

let Yeah : myType = 123;
let john : Member = [123, true];
let Luke : People = {name : 'kim'};

// 함수 파라미터와 리턴 값에 타입 지정
function multiply(x : number) :number {
    return x * 2 ;
}

// 클래스에 타입 지정
class User {
    name : string;
    constructor(name : string) {
        this.name = name;
    }
}