/////////////// Baic Type ///////////////

// Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다. 
let myName : string = '동불이';
let myAge : number = 24;
let ImFrom : string = 'Busan';

// Q2. 여러분이 가장 좋아하는 곡과 가수 이름을 변수에 object 자료형으로 담아보십시오.
let song : {title : string, singer : string}= {title : '주를 더욱 사랑', singer : '예수전도단'};

// Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
let project : {
    member : string[], 
    days : number, 
    started : boolean
} = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
} 

/////////////// Union / Any / Unknown Type ///////////////

// Q1. 다음 변수 4개에 타입을 지정해봅시다.
let user : string = 'kim';
let age : undefined | number = undefined;
let married : boolean = false; 
let chulsoo : (string | undefined | number | boolean)[] = [user, age, married];

// Q2. 학교라는 변수에 타입 지정해보십시오.
let school : {
    score : (number | boolean)[],
    teacher : string,
    friend : string | string[],
} = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
school.score[4] = false;
school.friend = ['Lee' , school.teacher]

/////////////// Functon ///////////////
// Q1. 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
function Hong(name? : string) : void {
    if (name) {
        console.log(`안녕하세요 ${name}`)
    } else {
        console.log('이름이 없습니다.')
    }
}

// Q2. 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
function digit(num : number | string) : void {
    num = num.toString();
    console.log(num.length);
}

// Q3. 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
function canYouMarry(money : number, home : boolean, attractive : string) : string{
    let score : number = 0;
    score += money;
    if (home) {
        score += 500;
    }
    if (attractive === '상') {
        score += 100;
    }
    if (score >= 600) {
        return "결혼가능";
    }
    return ""
}

/////////////// Narrowing / Assertion ///////////////

// Q1. 숫자 여러개를 array 자료에 저장해놨는데
function cleaning(array : (number | string)[]) : number[] {
    let newArray : number[] = [];
    array.forEach((a)=>{
        if (typeof a === 'string') {
            newArray.push(parseFloat(a));
        } else {
            newArray.push(a);
        }
    })
    return newArray;
}

// Q2. 다음과 같은 함수를 만들어 보십시오.
let dongyoon = { subject : 'math' }
let sunwoo = { subject : ['science', 'english'] }
let jungin = { subject : ['science', 'art', 'korean'] }

function Subject(obj : {subject : string | string[]}) {
    if (typeof obj.subject === 'string') {
        return obj.subject;
    } else if (Array.isArray(obj.subject)) {
        return obj.subject[obj.subject.length - 1];
    } else {
        return '앙 타입 에러띠';
    }
}

/////////////// Type Alias ///////////////

// Q1. 다음 조건을 만족하는 타입을 만들어봅시다. 
type type1 = {
    color? : string,
    size : number,
    readonly position : number[],
}

// Q2. 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오. 
type type2 = {
    name : string,
    phone : number,
    email: string,
}

// Q3. 다음을 만족하는 type alias를 만들어보십시오.
type Jammin = {jammin: boolean};
type type3 = type2 & Jammin;

/////////////// Literal Type ///////////////

// Q1. 이런 함수는 어떻게 만들까요?
function rockScissorPaper(my : '가위' | '바위' | '보') : [('가위' | '바위' | '보')] {
    return ['가위']
}

/////////////// Function, Method Type Alias ///////////////

// Q1. 위 코드에서 회원정보라는 변수에 타입지정 알아서 해보십시오. 
type memb = {
    name: string,
    age: number,
    plusOne: (x : number) => number,
    changeName: () => void,
}

let userInfo = {
    name : 'kim',
    age : 30,
    plusOne (x : number) : number{
        return x + 1
    },
    changeName : () => {
        console.log('안녕')
    }
}
userInfo.plusOne(1);
userInfo.changeName();

// Q2. 다음 함수 2개를 만들어보고 타입까지 정의해보십시오
type cutType = (a : string) => string;
let cutZero : cutType = function (a) {
    let result = a.replace(/^0+/, "");
    return result;
}

function removeDash (a : string) : number {
    let result = a.replace(/-/g, '');
    return parseFloat(result);
}

// 함수에 함수를 집어넣고 싶습니다.
type funcType1 = (a : string)=>string;
type funcType2 = (a : string)=>number;

function phoneNumber(a : string, b : funcType1, c :funcType2) {
    let result = b(a);
    let result2 = c(result);
    console.log(result2)
}
phoneNumber('010-1111-2222', cutZero, removeDash)  

/////////////// Typescirpt DOM Manupulation ///////////////

// Q1. 이미지를 바꿔봅시다.
let img = document.querySelector('#image');
if (img instanceof HTMLImageElement) {
    img.src = 'new.jpg';
}

// Q2. 바꾸고 싶은 html 요소가 많습니다.
let links = document.querySelectorAll('.link');

for (let i = 0; i < links.length; i++) {
    let a = links[i];
    if (a instanceof HTMLAnchorElement) {
        a.href = 'https://kakao.com';
    }
}

/////////////// Class ///////////////

// Q1. Car 클래스를 만들고 싶습니다.
class Car {
    model : string;
    price : number;
    constructor(models : string, prices : number) {
        this.model = models;
        this.price = prices;
    }
    tax() : number {
        return this.price / 10;
    }
}

let car1 = new Car('소나타', 3000)
console.log(car1) //콘솔창 출력결과는 { model : '소나타', price : 3000 }
console.log(car1.tax()) //콘솔창 출력결과는 300

// Q2. class인데 파라미터가 잔뜩 들어가는 class Word를 만들어봅시다.
class Word {
    num : number[];
    str : string[];
    constructor(...param : (number | string)[] ) {
        let nums : number[] = [];
        let strs : string[] = [];

        param.forEach((a)=>{
            if (typeof a == 'number') {
                nums.push(a);
            } else {
                strs.push(a);
            }
        })
        this.num = nums;
        this.str = strs;
    }
}

let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num) //[3,5]
console.log(obj.str) //['kim', 'park']