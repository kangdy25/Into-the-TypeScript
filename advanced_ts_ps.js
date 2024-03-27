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
