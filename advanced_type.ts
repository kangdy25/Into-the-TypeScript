import { types } from "util";

// Rest Parameter
function addAll(...a :number[]){
    console.log(a)
}

addAll(1,2,3,4,5);

// Spread Operator
let arr = [3,4,5];
let arr2 = [1,2, ...arr]
console.log(arr2)

// Destructuring
let [a, b] = ['안녕', 100];
let {student, ages} = {student : true, ages : 20}

let person = { student : true, ages : 20 }
function humanFunction({student, ages} : {student : boolean, ages : number}){
    console.log(student, ages)
}
humanFunction({ student : true, ages : 20 })

// Advanced Narrowing
// - 1. null & undefined 체크하는 법
function printAll(strs: string | undefined) {
    if (strs && typeof strs === "string") {  
        console.log(strs);
    } 
}
// - 2. in 연산자로 object 자료 narrowing
type Fish = { swim: string };
type Bird = { fly: string };
function animalCheck(animal: Fish | Bird) {
    if ("swim" in animal) {
        return animal.swim
    }
    return animal.fly
} 
// - 3. literal type으로 narrowing
type Cars = {
    wheel : '4개',
    color : string,
}
type Bike = {
    wheel : '2개',
    color : string,
}

function vehicleCheck(x : Cars | Bike){
    if (x.wheel === '4개') {
        console.log('이 차는 ' + x.color)
    } else {
        console.log('이 바이크는 ' + x.color)
    }
}

let benz: Cars = {wheel : '4개', color: '파랑'} 
vehicleCheck(benz)

// Never Type 
// 조건 1) 절대 return을 하지 않아야 하고
// 조건 2) 함수 실행이 끝나지 않아야 합니다 (전문용어로 endpoint가 없어야합니다)
function neverFunction() : never{
    throw new Error('에러메세지');
}

function infiniteLoop() :never{
    while ( true ) {
        console.log(123)
    }
}

function neverFunction2 (parameter: string) {
    if ( typeof parameter === "string"){
        parameter + 1;
    } else {
        parameter;
    }
}

// Object-Oriented Programming
class User {
    // public 붙으면 모든 자식들이 이용 가능
    public name : string;
    // private 붙으면 변경 방지 가능, class 안에서만 수정 가능
    private familyName : string = 'kim'
    // protected 붙으면 변경 방지 가능,현재 class 안에서 + extends된 class 안에서 수정 가능
    protected age : number = 30;
    // static 붙으면 부모 class에 직접 부여됨
    static x = 10; // 부모만 사용 가능 (자식에게 안 물려줌, extends는 물려줌)
    y = 20; // 자식만 사용 가능

    constructor(a) {
        this.name = this.familyName + a;
    }
    changeFamilyName(b) {
        this.familyName = b
    }
}
let users = new User('옥지');
// users.familyName = 'Lee'; // error!
users.changeFamilyName('ang kim')
console.log(User.x)

// public
class Person {
    constructor(public name : string) {
        
    }
}
// extends
class NewUser extends User {
    HowOldAreYou(num) {
        this.age = num;
    }
}

// export/import type, namespace
export type Name = string;

namespace typeSpace {
    export type Info = string | number
}

let typeVarious : typeSpace.Info

// Generic
function arrayFunc<MyType1>(x : MyType1[]) : MyType1{
    return x[0];
}

let newX = arrayFunc<number>([4, 2])

function minusOne<MyType extends number>(a : MyType) {
    return a-1;
}

let newA = minusOne<number>(100)

// Tuple Type
let baaaark : (string | boolean)[] = ['dog', true];
let baaaaaaaark : [string, boolean?] = ['dog', true];

function func1(...x : [number, string]) {
    console.log(x);
}

let arrs = [1, 2, 3];
let arrs2 : [number, number, ...number[]] = [4, 5, ...arrs];

// declare : 다른 곳에 이미 정의된 변수나 함수 재정의
// declare let a :number;
// console.log(a + 1);

declare global {
    type Dog = string;
} 

// d.ts
import { multiply } from "./test.d";

// implements

interface CarType {
    model : string,
    price : number
}

class Car implements CarType {
    model : string;
    price : number = 1000;
    constructor(a :string){
        this.model = a
    }
}
let 붕붕이 = new Car('morning');

// object index signatures
interface StringOnly {
    [key: string]: string
}

let obj :StringOnly = {
    name : 'kim',
    age : '20',
    location : 'seoul'
}

let array :StringOnly = {
    0 : 'kim',
    1 : '20',
    2 : 'Seoul',
}

interface MyType {
    'font-size': MyType | number
}

let css = {
    'font-size' : {
        'font-size' : {
            'font-size' : 14
        }
    }
}

// keyof
interface Person {
    age: number;
    name: string;
}

type PersonKeys = keyof Person;   //"age" | "name" 타입됩니다
let human1 :PersonKeys = 'age'; //가능
// let human2 :PersonKeys = 'ageeeee'; //불가능

// Type Changer
type Vehicle = {
    color: boolean,
    model : boolean,
    price : boolean | number,
};

type TypeChanger <MyType> = {
    [key in keyof MyType]: string;
};

type newCar = TypeChanger<Vehicle>;

// Conditional Statement
type Age<T> = T extends string ? string : unknown;
let age1 : Age<string> //age는 string 타입
let age2 : Age<number> //age는 unknown 타입

type FirstItem<T> = T extends any[] ? T[0] : any

// Infer
type Person1<T> = T extends infer R ? R : unknown; 
type newType = Person1<string> // newType은 string 타입입니다 

type giveMeType<T> = T extends (infer R)[] ? R : unknown; 
type NewType = giveMeType< boolean[] > // NewType 은 boolean 타입입니다 

type giveMeType2<T> = T extends ( ()=> infer R ) ? R : unknown; 
type NewTypes = giveMeType2< () => number > // NewTypes은 number 타입입니다 