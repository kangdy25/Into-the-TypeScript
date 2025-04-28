// 함수 타입의 호환성
let a = () => 10;
let b = () => 10;
// 가능, 업캐스팅
a = b;
let c = (value) => { };
let d = (value) => { };
// 가능, 다운캐스팅
d = c;
let func1 = (a, b) => { };
let func2 = (a) => { };
func1 = func2;
export {};
// 요건 에러
// func2 = func1;
