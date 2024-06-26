// Rest Parameter, Destructuring 
// (숙제1) 숫자 여러 개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다. 
function Maximum() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var minimum = 0;
    for (var i = 0; i < a.length; i++) {
        if (minimum < a[i]) {
            minimum = a[i];
        }
    }
    return minimum;
}
console.log(Maximum(1, 6, 3, 4, 5));
function inputObject(_a) {
    var users = _a.users, comment = _a.comment, admin = _a.admin;
    console.log(users, comment, admin);
}
inputObject({ users: 'kim', comment: [3, 5, 4], admin: false });
function drinkInput(_a) {
    var price = _a[0], kind = _a[1], alcohol = _a[2];
    console.log(price, kind, alcohol);
}
drinkInput([40, 'wine', true]);
// Public, Private, Protected, Static
// (숙제1) 다음 x, y, z 속성의 특징을 설명해보십시오.
var Users = /** @class */ (function () {
    function Users() {
        this.z = 30;
    }
    Users.prototype.addOne = function (a) {
        Users.x += a;
    };
    Users.prototype.printX = function () {
        console.log(Users.x);
    };
    Users.x = 10;
    Users.y = 20;
    return Users;
}());
// x는 Users 클래스가 직접 사용하는 것만 가능하고 자식 클래스에 상속되지 않으며, 
// 클래스 외부에서 변경을 금지한다.
// y는 Users 클래스가 직접 사용하는 것만 가능하고 자식 클래스에 상속되지 않으며, 
// 클래스 외부에서 변경을 허용한다.
// z는 클래스 외부에서 변경을 금지하지만, extends로 확장한 클래스에서 사용할 수 있다.
// (숙제2) x 속성에 숫자를 더해주는 함수가 필요합니다.
var ImUser = new Users;
ImUser.addOne(3); //이렇게 하면 x가 3 더해져야함
ImUser.addOne(4); //이렇게 하면 x가 4 더해져야함
ImUser.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함
// (숙제3) 이런거 어떻게 만들게요 
var Square = /** @class */ (function () {
    function Square(width, height, color) {
        this.a = width;
        this.b = height;
        this.c = color;
    }
    Square.prototype.draw = function () {
        var square = "<div style=\"\n            position: relative;\n            width:".concat(this.a, "px;\n            height:").concat(this.b, "px;\n            background:").concat(this.c, ";\n            \n            top: ").concat(Math.random() * 400, "px;\n            left: ").concat(Math.random() * 400, "px;\"></div>");
        document.body.insertAdjacentHTML('beforeend', square);
    };
    return Square;
}());
var 네모 = new Square(30, 30, 'red');
console.log(네모);
네모.draw();
네모.draw();
네모.draw();
네모.draw();
var DogFace;
(function (DogFace) {
    ;
})(DogFace || (DogFace = {}));
var dog1 = 'bark';
var dog2 = { name: 'paw' };
// Generic
// (숙제1) 문자를 집어넣으면 문자의 갯수, array를 집어넣으면 
// array 안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까요? 
function countElement(arr) {
    return arr.length;
}
var data = '{"name" : "dog", "age" : 1 }';
function changeToObj(a) {
    return JSON.parse(a);
}
var result = changeToObj(data);
// (숙제3) class 를 수정해봅시다.
var Person = /** @class */ (function () {
    function Person(a) {
        this.name = a;
    }
    return Person;
}());
var ang = new Person('어쩌구');
ang.name; //string 타입이 되었넹
// Tuple Type
// (숙제1) 여러분이 최근에 사먹은 음식의 1. 이름 2. 가격 3. 맛있는지 
// 여부를 array 자료에 담아보고 타입지정까지 해보십시오.
var masjib = ['미분당', 17000, true];
// (숙제2) 이렇게 생긴 자료는 타입지정 어떻게 해야할까요?
var arr = ['동서녹차', 4000, true, false, true, true, false, true];
// (숙제3) 함수에 타입지정을 해보도록 합시다.
function tupleFunc() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    console.log(rest);
}
// (숙제4) 다음과 같은 문자/숫자 분류기 함수를 만들어보십시오.
function Distinction() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var result = [[], []];
    for (var i = 0; i < a.length; i++) {
        if (typeof a[i] === 'string') {
            result[0].push(a[i]);
        }
        else if (typeof a[i] === 'number') {
            result[1].push(a[i]);
        }
    }
    console.log(result);
}
Distinction('b', 5, 6, 8, 'a');
var obj2 = {
    model: 'k5',
    brand: 'kia',
    price: 6000,
    year: 2030,
    date: '6월',
    percent: '5%',
    dealer: '김차장',
};
var obj3 = {
    'font-size': 10,
    'secondary': {
        'font-size': 12,
        'third': {
            'font-size': 14
        }
    }
};
