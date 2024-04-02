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
