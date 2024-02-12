/////////////// Baic Type ///////////////
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
    return "";
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
/////////////// Literal Type ///////////////
// Q1. 이런 함수는 어떻게 만들까요?
function rockScissorPaper(my) {
    return ['가위'];
}
var userInfo = {
    name: 'kim',
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log('안녕');
    }
};
userInfo.plusOne(1);
userInfo.changeName();
var cutZero = function (a) {
    var result = a.replace(/^0+/, "");
    return result;
};
function removeDash(a) {
    var result = a.replace(/-/g, '');
    return parseFloat(result);
}
function phoneNumber(a, b, c) {
    var result = b(a);
    var result2 = c(result);
    console.log(result2);
}
phoneNumber('010-1111-2222', cutZero, removeDash);
/////////////// Typescirpt DOM Manupulation ///////////////
// Q1. 이미지를 바꿔봅시다.
var img = document.querySelector('#image');
if (img instanceof HTMLImageElement) {
    img.src = 'new.jpg';
}
// Q2. 바꾸고 싶은 html 요소가 많습니다.
var links = document.querySelectorAll('.link');
for (var i = 0; i < links.length; i++) {
    var a = links[i];
    if (a instanceof HTMLAnchorElement) {
        a.href = 'https://kakao.com';
    }
}
/////////////// Class ///////////////
// Q1. Car 클래스를 만들고 싶습니다.
var Car = /** @class */ (function () {
    function Car(models, prices) {
        this.model = models;
        this.price = prices;
    }
    Car.prototype.tax = function () {
        return this.price / 10;
    };
    return Car;
}());
var car1 = new Car('소나타', 3000);
console.log(car1); //콘솔창 출력결과는 { model : '소나타', price : 3000 }
console.log(car1.tax()); //콘솔창 출력결과는 300
// Q2. class인데 파라미터가 잔뜩 들어가는 class Word를 만들어봅시다.
var Word = /** @class */ (function () {
    function Word() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var nums = [];
        var strs = [];
        param.forEach(function (a) {
            if (typeof a == 'number') {
                nums.push(a);
            }
            else {
                strs.push(a);
            }
        });
        this.num = nums;
        this.str = strs;
    }
    return Word;
}());
var obj = new Word('kim', 3, 5, 'park');
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park']
var item = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] };
var cart = [{ product: '청소기', price: 7000 }, { product: '삼다수', price: 800 }];
var object = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    }
};
