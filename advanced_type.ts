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
