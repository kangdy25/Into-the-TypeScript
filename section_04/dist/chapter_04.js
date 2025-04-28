// 함수 오버로딩
// 하나의 함수를 매개변수의 개수나 타입에 따라 여러 버전으로 만듦
// 구현부 -> 구현 시그니처
function func(a, b, c) {
    if (typeof b === "number" && typeof c === "number") {
        console.log(a + b + c);
    }
    else {
        console.log(a * 20);
    }
}
// 비정상
// func();
// 정상
func(1);
// 비정상
// func(1, 2);
// 정상
func(1, 2, 3);
export {};
