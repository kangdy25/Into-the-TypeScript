// 문자 타입만 가능
let name :string = 'Mudryk';
// name = 123; 숫자 타입이 들어오면 에러;

// 문자 타입 또는 숫자 타입 가능
let player :string | number = 'Mudryk';

// 배열 또는 객체 타입 사용법 
// (array 자료에 타입 지정 가능)
let person : string[] = ['Nkunku', 'Enzo'];
// (object 자료에 타입 지정 가능) 
let chelsea : {member1 : string, member2: string} = {member1 : 'Colwil', member2: 'Gusto'}

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
// ?는 x : number | undefined랑 똑같음
function muliply2(x? : number) {
    return x * 2; // 요거는 함수 실행하면 오류남
}

// 클래스에 타입 지정
class User {
    name : string;
    constructor(name : string) {
        this.name = name;
    }
}

// Union Type (2개 이상의 타입 설정)
let names: string | number = 'kim';
let array: (number | string)[] = [1,'2',3]
let object: {data : number | string} = { data : '123' }

// Any Type (타입스크립트를 쓰는 이유가....)
let allType : any;
allType = 123;
allType = [];

// Unknown Type (Any와 비슷하지만, 조금 더 엄격한 타입)
let Idontknow : unknown;
Idontknow = 123;
Idontknow = {};

// let var1 : string = Idontknow; // unknown은 오류 O
// let var2 : string = allType; // any는 오류 X

// Narrowing (타입이 불확실할 경우, 특정 타입으로 제한한다.)
function Narrowing(x :number | string){
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
function Assertion(x :number | string){ 
    return (x as number) + 1;
}
console.log( Assertion(123) )

// type alias
type Animal = string | number | undefined;
let animal : Animal;

type Teacher = {
    name : string,
    age : number,
}
let teacher : Teacher = { name : 'Daniel', age : 20 } 

type Korea = {
    readonly name : string,
}
let footballPlayer : Korea = {
    name : 'Son'
}
// footballPlayer.name = 'Hwang' //readonly라서 에러남

type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };
type XandY = PositionX & PositionY
let Coord :XandY = { x : 1, y : 2 }

// Literal Types
let lee :'대머리';
let choi :'솔로';

let direction: 'left' | 'right';
direction = 'left';

function func(a : 'hello') : 1 | 0 | -1 {
    return 1 
}

let nameData = {
    name : 'kim'
} as const

function myFunc(a : 'kim') {

}

myFunc(nameData.name)

// Functon Alias

type FunctionType = (a : string) => number;

let functions : FunctionType = function () {
    return 10;
}