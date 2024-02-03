/////////////// Basic Type ///////////////
// Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다. 
var myName = '동불이';
var myAge = 24;
var ImFrom = 'Busan';
// Q2. 여러분이 가장 좋아하는 곡과 가수 이름을 변수에 object 자료형으로 담아보십시오.
var song = { title: '주를 더욱 사랑', singer: '예수전도단' };
// Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
/////////////// Union / Any / Unknown Type ///////////////
// Q1. 다음 변수 4개에 타입을 지정해봅시다.
var user = 'kim';
var age = undefined;
var married = false;
var chulsoo = [user, age, married];
// Q2. 학교라는 변수에 타입 지정해보십시오.
var school = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
school.score[4] = false;
school.friend = ['Lee', school.teacher];
/////////////// Functon ///////////////
// Q1. 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
function Hong(name) {
    if (name) {
        console.log("\uC548\uB155\uD558\uC138\uC694 ".concat(name));
    }
    else {
        console.log('이름이 없습니다.');
    }
}
// Q2. 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
function digit(num) {
    num = num.toString();
    console.log(num.length);
}
// Q3. 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
function canYouMarry(money, home, attractive) {
    var score = 0;
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
}
/////////////// Narrowing / Assertion ///////////////
// Q1. 숫자 여러개를 array 자료에 저장해놨는데
function cleaning(array) {
    var newArray = [];
    array.forEach(function (a) {
        if (typeof a === 'string') {
            newArray.push(parseFloat(a));
        }
        else {
            newArray.push(a);
        }
    });
    return newArray;
}
// Q2. 다음과 같은 함수를 만들어 보십시오.
var dongyoon = { subject: 'math' };
var sunwoo = { subject: ['science', 'english'] };
var jungin = { subject: ['science', 'art', 'korean'] };
function Subject(obj) {
    if (typeof obj.subject === 'string') {
        return obj.subject;
    }
    else if (Array.isArray(obj.subject)) {
        return obj.subject[obj.subject.length - 1];
    }
    else {
        return '앙 타입 에러띠';
    }
}
